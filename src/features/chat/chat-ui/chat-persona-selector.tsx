import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rabbit, Bird, Turtle } from "lucide-react";
import { FC } from "react";
import { Persona } from "../chat-services/models";

interface Prop {
    disable: boolean;
    persona: Persona;
    onPersonaChange?: (value: Persona) => void;
}

export const ChatPersonaSelector: FC<Prop> = (props) => {
    return (
        <Tabs
            defaultValue={props.persona}
            onValueChange={(value) =>
                props.onPersonaChange
                    ? props.onPersonaChange(value as Persona)
                    : null
            }
        >
            <TabsList className="grid w-full grid-cols-3 h-12 items-stretch">
                <TabsTrigger
                    value="expert"
                    className="flex gap-2"
                    disabled={props.disable}
                >
                    <Rabbit size={20} /> Expert
                </TabsTrigger>
                <TabsTrigger
                    value="normal"
                    className="flex gap-2"
                    disabled={props.disable}
                >
                    <Bird size={20} /> Normal
                </TabsTrigger>
                <TabsTrigger
                    value="simple"
                    className="flex gap-2"
                    disabled={props.disable}
                >
                    <Turtle size={20} /> Simplified
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
};
