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
            <div>
                Card
            </div>
        )
    
  };