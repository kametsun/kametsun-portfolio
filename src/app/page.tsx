import Image from 'next/image'
import Link from "next/link";
import {Links} from "@/app/components/Links";

export default function Home() {
    return (
        <main className={"flex flex-col items-center justify-center py-52"}>
            <div >
                <Image className={"my-pic my-5"} src={"/images/my-pic.jpg"} alt={"my-pic"} width={100} height={100}/>
            </div>
            <div className={"my-5"}>
                <h1 className={"text-2xl"}>Hi✨</h1>
                <p>
                    I am Kametsn, college student majoring in computer science.
                </p>
            </div>
            <Links />
        </main>
    )
}
