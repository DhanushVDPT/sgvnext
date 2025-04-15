import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Science | Books</title>
            </Head>
            <div className="subject">
                <h1>Science | Reference Books</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Textbook</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ebooks.ebalbharati.in/pdfs/1003000265.pdf">Maharashtra SSC Grade 10 Science I</a>
                            <a target="#" href="https://ebooks.ebalbharati.in/pdfs/1003000270.pdf">Maharashtra SSC Grade 10 Science II</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="sixth"></input>
                        <label for="sixth"><h2 className="subjecth2">Gravitation</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1hOpvY8SJM-De6XXepnXPyT7PTVOUCxCj/view?usp=sharing">NCERT: Gravitation</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
