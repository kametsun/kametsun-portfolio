import {Typing} from "@/app/components/Typing";

export const Profile = () => {
    const name :string = "Tsubasa Kamekubo"
    return (
        <div id={"profile"}>
            <div className={"flex items-center gap-5"}>
                <div className={"flex text-3xl"}>
                    <p><Typing text={name}/></p>
                </div>
                <div className={"flex gap-2"}>
                    <a href={"https://twitter.com/_kametsun_"} target={"_blank"} rel={"noopener noreferrer"}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24"
                             className="text-xl text-emerald-400 transition-all hover:text-emerald-300" height="1em"
                             width="1em" xmlns="http://www.w3.org/2000/svg"><title></title>
                            <path
                                d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                        </svg>
                    </a>
                    <a href={"https://github.com/kametsun"} target={"_blank"} rel={"noopener noreferrer"}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24"
                             className="text-xl text-emerald-400 transition-all hover:text-emerald-300" height="1em"
                             width="1em" xmlns="http://www.w3.org/2000/svg"><title></title>
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                        </svg>
                    </a>
                </div>
            </div>
            <p className={"text-gray-400"}>帝京大学 理工学部 情報科学科 2年</p>
            <p className={"text-gray-400"}>静岡産業技術専門学校 みらい情報科 2年</p>
            <div className={"my-3"}>
                <div className={"flex items-center gap-3"}>
                    <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 448 512" height="1em"
                         width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path>
                    </svg>
                    <p>2003/07/13</p></div>
                <div className={"flex items-center gap-3"}>
                    <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 512 512" height="1em"
                         width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M54.438 29.794a23.808 23.808 0 0 0-1.204.01c-4.688.157-7.914 1.736-10.113 3.935-2.932 2.932-4.761 7.689-3.588 15.305 1.174 7.616 5.683 17.754 15.272 28.941 67.894 79.21 132.935 155.56 183.703 211.969 12.273 13.637 23.693 26.08 34.125 37.135 12.095-31.902 34.57-54.144 62.902-64.715-10.825-10.199-22.936-21.313-36.197-33.248C242.93 178.358 166.578 113.314 87.369 45.42c-11.186-9.589-21.325-14.098-28.941-15.272a29.555 29.555 0 0 0-3.99-.355zm295.783 246.64c-30.461 7.627-53.241 29.185-63.608 65.219 5.652 5.785 10.956 11.085 15.78 15.707 7.58 7.264 14.095 13.007 19.21 16.957 1.776-17.225 10.045-33.062 21.645-44.691 10.601-10.628 24.496-18.006 39.125-19.092-3.871-4.836-9.14-10.751-15.63-17.524-4.838-5.047-10.415-10.623-16.522-16.576zm35.351 51.95c-10.397.137-20.929 5.28-29.582 13.955-11.537 11.565-18.674 28.85-16.267 45.7 5.334 37.342 23.749 65.81 49.46 81.237 22.727 13.636 51.452 17.35 83.643 6.983-24.222-4.01-46.475-30.706-48.197-50.65 10.63 12.814 23.94 24.547 38.426 31.75-9.881-22.578-9.201-45.452-11.088-64.321-1.352-13.522-3.891-24.982-11.377-35.162-7.486-10.18-20.423-19.8-44.74-27.907a31.062 31.062 0 0 0-10.278-1.585z"></path>
                    </svg>
                    <p>散歩・韓国ドラマ鑑賞</p></div>
            </div>
        </div>
    )
}