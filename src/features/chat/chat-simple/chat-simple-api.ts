import { userHashedId } from "@/features/auth/helpers";
import { CosmosDBChatMessageHistory } from "@/features/langchain/memory/cosmosdb/cosmosdb";
import { AI_NAME } from "@/features/theme/customise";
import { LangChainStream, StreamingTextResponse } from "ai";
import { ConversationChain } from "langchain/chains";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { BufferWindowMemory } from "langchain/memory";
import {
  ChatPromptTemplate,
  HumanMessagePromptTemplate,
  MessagesPlaceholder,
  SystemMessagePromptTemplate,
} from "langchain/prompts";
import { initAndGuardChatSession } from "../chat-services/chat-thread-service";
import { PromptGPTProps } from "../chat-services/models";
import { transformConversationStyleToTemperature } from "../chat-services/utils";

export const ChatSimple = async (props: PromptGPTProps) => {
  const { lastHumanMessage, id, chatThread } = await initAndGuardChatSession(
    props
  );

  const { stream, handlers } = LangChainStream();

  const userId = await userHashedId();

  const chat = new ChatOpenAI({
    temperature: transformConversationStyleToTemperature(
      chatThread.conversationStyle
    ),
    streaming: true,
  });

  const memory = new BufferWindowMemory({
    k: 100,
    returnMessages: true,
    memoryKey: "history",
    chatHistory: new CosmosDBChatMessageHistory({
      sessionId: id,
      userId: userId,
    }),
  });

  let systemTemplate = "";

  switch (chatThread.persona) {
    case "expert":
      systemTemplate = `-You are ${AI_NAME} who is a helpful AI Assistant.
                  - You will provide clear and concise queries, and you will respond with polite and professional answers.
                  - You will answer questions truthfully and accurately.
                  - You are an expert in the domain of the conversation and will use jargon and technical language.`;
      break;
    case "normal":
      systemTemplate = `-You are ${AI_NAME} who is a helpful AI Assistant.
                  - You will provide clear and concise queries, and you will respond with polite and professional answers.
                  - You will answer questions truthfully and accurately.`;
      break;
    case "simple":
      systemTemplate = `-You are ${AI_NAME} who is a helpful AI Assistant.
                  - You will provide clear and concise queries, and you will respond with polite and professional answers.
                  - You will answer questions truthfully and accurately.
                  - You will use very simple language and avoid jargon to make things easy to understand.`;
      break;
  }

  const chatPrompt = ChatPromptTemplate.fromPromptMessages([
    SystemMessagePromptTemplate.fromTemplate(systemTemplate),
    new MessagesPlaceholder("history"),
    HumanMessagePromptTemplate.fromTemplate("{input}"),
  ]);

  const chain = new ConversationChain({
    llm: chat,
    memory,
    prompt: chatPrompt,
  });

  chain.call({ input: lastHumanMessage.content }, [handlers]);

  return new StreamingTextResponse(stream);
};
