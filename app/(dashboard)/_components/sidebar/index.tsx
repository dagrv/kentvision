import { List } from "./list";
import { NewButton } from "./new-button";

export const Sidebar = () => {
    return (
        <aside className="fixed z-[1] left-0 bg-gray-900 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white items-center">
            <List />
            <NewButton />
        </aside>
    )
}