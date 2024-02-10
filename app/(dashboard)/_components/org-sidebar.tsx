"use client";

import Link from "next/link";
import Image from "next/image";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useSearchParams } from 'next/navigation';

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
})

export const OrgSidebar = () => {
    const searchParams = useSearchParams();
    const favorites = searchParams.get("favorites")

    return (
        <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
            <Link href="/">
                <Image src="/logo.svg" alt="Logo" height={60} width={100} />
            </Link>

            <OrganizationSwitcher hidePersonal 
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%"
                        },
                        organizationSwitcherTrigger: {
                            padding: "6px",
                            width: "100%",
                            borderRadius: "8px",
                            border: "1px solid #E5EBEB",
                            justifyContent: "space-between",
                            backgroundColor: "white"
                        }
                    }
                }} />

            <div className="space-y-1 w-full">
                <Button asChild size="lg" className="font-normal justify-start px-2 w-full bg-blue-100 hover:bg-blue-200">
                    <Link href="/">
                        <LayoutDashboard className="h-5 w-5 mr-2 text-blue-900" />
                        <span className="text-blue-900">All Boards</span>
                    </Link>
                </Button>

                <Button asChild size="lg" className="font-normal justify-start px-2 w-full bg-yellow-100 hover:bg-yellow-200">
                    <Link href={{ pathname: "/", query: { favorites: true }}}>
                        <Star className="h-5 w-5 mr-2 text-yellow-700" />
                        <span className="text-yellow-700">Favorites</span> 
                    </Link>
                </Button>
            </div>
        </div>
    )
}