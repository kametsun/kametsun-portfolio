export const Footer = () => {
    // 現在の西暦を取得
    const year = new Date().getFullYear()

    return (
        <div className={"footer flex flex-col items-end justify-center my-5 mr-5"}>
            <p>{year} kametsun</p>
        </div>
    )
}