import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Math | Notes</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Lecture Notes</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/14vLnIx-TQNxQhL7sjkANJGVX3-m-h3Wrc2RtzbosYas/edit?usp=sharing">Arithmetic Progression</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
