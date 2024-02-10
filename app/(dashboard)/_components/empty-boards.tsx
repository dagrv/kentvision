"use client";

import Image from "next/image";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { Button } from '@/components/ui/button';
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
    const router = useRouter();
    const { organization } = useOrganization();
    const { mutate, pending } = useApiMutation(api.board.create);

    const onClick = () => {
        if (!organization) return;

        mutate({
            orgId: organization.id,
            title: "Untitled"
        })
        .then((id) => {
            toast.success("Board created");
            router.push(`/board/${id}`)
        })
        .catch(() => toast.error("Board creation failed"));
    }

    return (
        <div className="h-full flex flex-col items-center mb-10">
            <Image src="/apps.svg" alt="Empty Search" height={340} width={340} />

            <h2 className="font-semibold mt-6">Create your first Board</h2>

            <p className="text-muted-foreground mt-2">Start by creating a board for your organization</p>

            <div>
                <Button disabled={pending} onClick={onClick} size="lg" className="mt-6">
                    Create Board
                </Button>
            </div>
        </div>
    )
}