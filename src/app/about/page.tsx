// @/src/app/page.tsx

import {Profile} from "@/app/about/Profile";

export default function Page() {
    return (
        <div className={"my-10 flex-col items-center gap-20"}>
            <div id={"about"} className={"my-12 w-9/10 bg-background bg-opacity-70 p-10 lg:my-48 lg:w-3/5 xl:w-1/2"}>
                <h2 className={"w-fit border-b-2 border-b-emerald-400 text-2xl"}>
                    About
                </h2>
                <div className={"my-5 flex flex-col items-center justify-between md:flex-row md:gap-20"}>
                    <Profile />
                </div>
            </div>
        </div>
    )
}