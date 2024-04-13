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
                    selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
                    selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
                    disabled && "pointer-events-none hover:bg-white",
                )}
            >
               {imageSrc && (
                    <div className="relative mb-4 aspect-square max-h-[80px] w-full lg:max-h-[150px]">
                    <Image src={imageSrc} fill alt={text} />
                    </div>
                )}
            </div>
        )
    
  };