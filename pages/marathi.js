import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Marathi | Notes</title>
            </Head>
            <div className="subject">
                <h1>Marathi | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">तिफन</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1vS-kHbUbYFXqPbRnnQV7QrjBVY3lNPeh/view?usp=sharing">Chapter Notes</a>
                            <a target="#" href="https://drive.google.com/file/d/1JUjztdi62SmxsqS8Xi7aDsR9OoDrTcGX/view?usp=sharing">Poem Appretiation</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
