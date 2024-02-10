import Image from "next/image";

export const EmptyFavorites = () => {
    return (
        <div className="h-full flex flex-col items-center mb-10">
            <Image src="/world.svg" alt="Empty Search" height={340} width={340} />

            <h2 className="font-semibold mt-6">No Favorites found</h2>

            <p className="text-muted-foreground mt-2">Try first adding boards to your <span className="bg-yellow-100 text-yellow-600 p-1 text-sm rounded-md">favorites</span></p>
        </div>
    )
}