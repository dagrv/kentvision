"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";

import { Footer } from "./footer";
import { Overlay } from './overlay';


interface BoardCardProps {
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    createdAt: number;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
}

export const BoardCard = ({
    id,
    title,
    authorId,
    authorName,
    createdAt,
    imageUrl,
    orgId,
    isFavorite,
}: BoardCardProps) => {
    const { userId } = useAuth();
    const authorLabel = userId === authorId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true
    });

    return (
        <Link href={`/board/${id}`}>
            <div className="group aspect-[100/127] rounded-lg flex flex-col justify-between overflow-hidden">
                <div className="relative flex-1 bg-white">
                    <Image src={imageUrl} alt={title} fill className="object-fit p-2 border-teal-500 hover:border-teal-500 border-3 rounded-lg" />
                    <Overlay />
                </div>
                
                <Footer
                        isFavorite={isFavorite} 
                        title={title}
                        authorLabel={authorLabel}
                        createdAtLabel={createdAtLabel}
                        onClick={() => {}}
                        disabled={false} 
                    />
            </div>
        </Link>
    )
}