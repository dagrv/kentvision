import Image from "next/image";

export const EmptySearch = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center mt-28">
            <Image src="/catherine.svg" alt="Empty Search" height={340} width={340} />

            <h2 className="font-semibold mt-6">No results found !</h2>

            <p className="text-muted-foreground mt-2">Try with another search query</p>
        </div>
    )
}