import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";

export const EmptyOrg = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center">
            <h3 className="text-3xl font-semibold">Welcome to</h3>
            <h1 className="text-6xl font-semibold mb-30">KentVision</h1><br />
            <Image src="/hand.svg" alt="Hand" height={400} width={400} />

            <h5 className="text-md text-muted-foreground font-normal mt-10">To get started, create your first organization</h5>

            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button size="lg" className="mt-5">Create Organization</Button>
                    </DialogTrigger>

                    <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
                        <CreateOrganization />
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}

export default EmptyOrg;