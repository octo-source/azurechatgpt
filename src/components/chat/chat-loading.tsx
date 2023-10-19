import { Loader } from "lucide-react";
import { FC } from "react";

interface Props {}

// A loading indicator for the chat.
const ChatLoading: FC<Props> = (props) => {
  return (
    <div className="container mx-auto max-w-4xl py-6">
      <Loader className="animate-spin" />
    </div>
  );
};

export default ChatLoading;
