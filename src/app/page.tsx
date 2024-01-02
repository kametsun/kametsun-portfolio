import Image from 'next/image'
import Link from "next/link";
import {Links} from "@/app/components/Links";
import {Navigation} from "@/app/components/Navigation/Navigation";

export default function Home() {
    return (
        <main className={"flex flex-col items-center justify-center py-52"}>
            <div>
                <Image className={"my-pic my-5"} src={"/images/my-pic.jpg"} alt={"my-pic"} width={100} height={100}/>
            </div>
            <div className={"my-5"}>
                <h1 className={"text-2xl"}>Hi✨</h1>
                <p>
                    I am kametsn, a computer science major in college.
                </p>
            </div>
            <Links />
        </main>
    )
}
