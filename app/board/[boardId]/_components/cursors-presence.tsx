"use client";

import { memo } from "react";
import { useOthersConnectionIds } from "@/liveblocks.config";
import { Cursor } from "./cursor";
import { MousePointer2 } from "lucide-react";
import { connectionIdToColor } from "@/lib/utils";

const Cursors = () => {
    const ids = useOthersConnectionIds();
    return (
        <>
            {ids.map((connectionId) => (
                <Cursor 
                    key={connectionId}
                    connectionId={connectionId} 
                />
            ))}
        </>
    )
}

export const CursorsPresence = memo(() => {
    return (
        <>
            <Cursors />
        </>
    );
});

CursorsPresence.displayName = "CursorsPresence";