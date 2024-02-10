"use client";

import { toast } from "sonner";
import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { Link2, Pencil, Trash2 } from "lucide-react";

import { ConfirmModal } from "@/components/confirm-modal";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";

import { useApiMutation } from "@/hooks/use-api-mutation";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useRenameModal } from "@/store/use-rename-modal";

interface ActionsProps {
    children: React.ReactNode;
    side?: DropdownMenuContentProps["side"];
    sideOffset?: DropdownMenuContentProps["sideOffset"];
    id: string;
    title: string;
}

export const Actions = ({
    children,
    side,
    sideOffset,
    id,
    title
}: ActionsProps) => {
    const { onOpen } = useRenameModal();

    const { mutate, pending } = useApiMutation(api.board.remove);
    
    const onCopyLink = () => {
        navigator.clipboard.writeText(
            `${window.location.origin}/board/${id}`,
        )
        .then(() => toast.success("Board Link copied"))
        .catch(() => toast.error("Failed to copy the link"))
    };

    const onDelete = () => {
        mutate({ id })
            .then(() => toast.success("Board deleted"))
            .catch(() => toast.error("Failed to delete the board"))
    }

    return (
        <div className="absolute z-50 top-1 right-1">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    {children}
                </DropdownMenuTrigger>

                <DropdownMenuContent
                onClick={(e) => e.stopPropagation()}
                side={side}
                sideOffset={sideOffset}
                className="w-60"
            >
                <DropdownMenuItem 
                    onClick={onCopyLink}
                    className="p-3 cursor-pointer">
                    <Link2 className="h-4 w-4 mr-2" />
                    Copy Board link
                </DropdownMenuItem>

                <DropdownMenuItem 
                    onClick={() => onOpen(id, title)}
                    className="p-3 cursor-pointer">
                    <Pencil className="h-4 w-4 mr-2" />
                    Rename
                </DropdownMenuItem>

                <ConfirmModal 
                        header="Delete Board ?"
                        description="This action will permanently delete board and all of its content, no recovery"
                        disabled={pending}
                        onConfirm={onDelete}>
                    <Button
                        variant="ghost"
                        className="p-3 cursor-pointer w-full justify-start font-normal">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                    </Button>
                </ConfirmModal>

                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}