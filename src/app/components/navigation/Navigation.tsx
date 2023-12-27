export const Navigation = () => {
    return(
        <aside className={"fixed bottom-0 z-50 h-full"}>
            <nav className={"flex items-center h-full p-3"}>
                <ul className={"grid justify-center gap-4"}>
                    <div
                        title={"Home"}
                        className={"shadow-lg border-gray-800 text-gray-800 dark:border-gray-300 dark:text-gray-300 p-1 cursor-pointer relative rounded-md transition duration-300 ease-in-out transform hover:text-gray-800 border hover:border-gray-800 dark:hover:border-gray-100 dark:hover:text-gray-100 hover:scale-105"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                        </svg>
                    </div>
                </ul>
            </nav>
        </aside>
    )
}