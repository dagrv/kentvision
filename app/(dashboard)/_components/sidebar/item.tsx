"use client";

import Image from "next/image";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Hint } from "../hint";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

export const Item = ({
    id,
    name,
    imageUrl,
}: ItemProps) => {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if (!setActive) return;

        setActive({ organization: id });
    };

    return (
        <div className="aspect-square relative">
            <Hint label={name} side="right">
            <Image
                alt={name}
                src={imageUrl}
                onClick={onClick}
                width={100}
                height={100} 
                className={cn("rounded-md cursor-pointer opacity-10 hover:opacity-100 transition",
                    isActive && "opacity-100"
                )}
            />
            </Hint>
        </div>
    );
};