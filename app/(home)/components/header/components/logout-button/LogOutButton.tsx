"use client"

import {LogOutIcon} from "lucide-react";
import {APP_CONFIG} from "@/lavka.config";
import Link from "next/link";

export function LogOutButton() {
    return (
        <Link href={APP_CONFIG.API_URL + "/api/v1/logout"} target="_self">
            <LogOutIcon size={26}/>
        </Link>
    )
}