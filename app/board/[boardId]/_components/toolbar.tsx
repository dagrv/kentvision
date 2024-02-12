import { Circle, MousePointer2, Pencil, Redo2, Square, StickyNote, Type, Undo2 } from "lucide-react"
import { ToolButton } from "./tool-button"

export const Toolbar = () => {
    return (
        <div className="absolute top-[70%] -translate-y-[70%] left-2 flex flex-col gap-y-4">
            <div className="bg-white rounded-md p-1.5 flex gap-y-1 flex-col items-center shadow-lg">
                <ToolButton 
                    label="Select"
                    icon={MousePointer2}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Text"
                    icon={Type}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Sticky Note"
                    icon={StickyNote}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Rectangle"
                    icon={Square}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Circle"
                    icon={Circle}
                    onClick={() => {}}
                    isActive={false}
                />
                <ToolButton 
                    label="Pencil"
                    icon={Pencil}
                    onClick={() => {}}
                    isActive={false}
                />
            </div>

            <div className="bg-white rounded-md p-1.5 flex flex-col items-center shadow-lg">
                <ToolButton 
                    label="Undo"
                    icon={Undo2}
                    onClick={() => {}}
                    isDisabled={false}
                />
                <ToolButton
                    label="Redo"
                    icon={Redo2}
                    onClick={() => {}}
                    isDisabled={true}
                />
            </div>
        </div>
    )
}

export const ToolbarSkeleton = () => {
    return (
        <div className="absolute top-[70%] -translate-y-[70%] left-2 flex flex-col gap-y-4 bg-white h-[360px] w-[52px] shadow-lg rounded-md"/>
    )
}