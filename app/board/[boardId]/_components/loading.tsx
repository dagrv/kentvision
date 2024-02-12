import { Loader } from "lucide-react";

import { InfoSkeleton } from "./info";
import { ParticipantsSkeleton } from "./participants";
import { ToolbarSkeleton } from "./toolbar";

export const Loading = () => {
    return (
        <main className="h-full w-full relative bg-neutral-100 touch-none flex items-center justify-center">
            <Loader className="h-12 w-12 text-muted-foreground animate-spin" />  
            <p className="ml-2 text-gray-700">Loading...</p>

            <InfoSkeleton />
            <ParticipantsSkeleton />
            <ToolbarSkeleton />
        </main>
    )
}