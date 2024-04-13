import { useCallback } from "react";

import Image from "next/image";
//import { useAudio, useKey } from "react-use";

import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";


type CardProps = {
    id: number;
    text: string;
    imageSrc: string | null;
    audioSrc: string | null;
    shortcut: string;
    selected?: boolean;
    onClick: () => void;
    status?: "correct" | "wrong" | "none";
    disabled?: boolean;
    type: (typeof challenges.$inferSelect)["type"];
  };

  export const Card = ({
    text,
    imageSrc,
    audioSrc,
    shortcut,
    selected,
    onClick,
    status,
    disabled,
    type,
  }: CardProps) => {
        return (
            <div
                onClick={() => {}}
                className={cn("h-full border-2 rounded-xl border-b-4 hover:bg-black/5 p-4 lg:p-6 cursor-pointer active:border-b-2",
                    selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
                    selected && status === "correct" && "",
                    selected && status === "wrong" && "",
                    disabled && "",
                )}
            >
                Card
            </div>
        )
    
  };