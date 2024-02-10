"use client";

import { toast } from "sonner";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

interface NewBoardButtonProps {
    orgId: string;
    disabled?: boolean;
};

export const NewBoardButton = ({
    orgId,
    disabled
}: NewBoardButtonProps) => {
    const router = useRouter();
    
    const { mutate, pending } = useApiMutation(api.board.create);
    
    const onClick = () => {
        mutate({
            orgId,
            title: "Untitled"
        })
        .then((id) => {
            toast.success("Board created");
            router.push(`/board/${id}`)
        })
        .catch(() => toast.error("Board Creation Failed"))
    }
    
    return (
        <button 
            disabled={pending || disabled}
            onClick={onClick}
            className={
                cn(
                    "col-span-1 aspect-[100/127] bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-lg flex flex-col items-center justify-center py-6",
                    (pending || disabled) && "opacity-75 hover:bg-gray-300 cursor-not-allowed"
                )
            }>
            <div />

            <Plus className="h-16 w-16 text-white" />

            <p className="text-md mt-4 text-white font-medium">
                New Board
            </p>
        </button>
    );
};