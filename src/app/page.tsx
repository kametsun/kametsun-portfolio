import Image from 'next/image'
import Link from "next/link";

export default function Home() {
    return (
        <main className={"flex flex-col items-center justify-center"}>
            <div >
                <Image className={"my-pic my-5"} src={"/images/my-pic.jpg"} alt={"my-pic"} width={100} height={100}/>
            </div>
            <div className={"my-5"}>
                <h1 className={"text-2xl"}>Hi✨</h1>
                <p>
                    I am Kametsn, college student majoring in computer science.
                </p>
            </div>
            <div className={"connect"}>
                <Link href={"https://twitter.com/2__ba__3"}>
                    <button
                        className={"my-0 mx-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"}
                    >
                        X
                    </button>
                </Link>
                <Link href={"https://github.com/kametsun"}>
                    <button
                        className={"my-0 mx-2 bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 border-b-4 border-b-pink-700 hover:border-pink-500 rounded"}
                    >
                        Github
                    </button>
                </Link>
            </div>
        </main>
    )
}
