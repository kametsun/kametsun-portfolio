"use client"

import React from "react";
import {useRouter} from "next/navigation";

export default function Header() {
    const router = useRouter()

    return (
        <div className={"headerArea"}>
            <h1 className={"headerText"} onClick={() => router.push("/")}>
                kametsun
            </h1>
        </div>
    )
}