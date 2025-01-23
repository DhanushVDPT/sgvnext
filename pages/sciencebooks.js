import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Science | Books</title>
            </Head>
            <div className="subject">
                <h1>Science | Reference Books</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Textbook</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ebooks.ebalbharati.in/pdfs/903020456.pdf">Maharashtra SSC Grade 9 Science</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Heredity & Variation</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?jesc1=8-13">NCERT: Heredity</a>
                            <a target="#" href="https://drive.google.com/file/d/15elK-_29PfG1jw4LYnvNuGLk3VJkd1SM/view?usp=sharing">Genetics: A Conceptual Approach - Benjamin Pierce</a>
                            <a target="#" href="https://www.youtube.com/playlist?list=PL5xvztUyPgDoQOnuWsLbrlqShE27M9PQD">Lectures - Thomas Mennella</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Reflection Of Light</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?jesc1=9-13">NCERT: Light</a>
                            <a target="#" href="https://drive.google.com/file/d/1bAIg6HTAxLX4o4MbsQuAO67VERndJjzc/view?usp=sharing">ICSE Reflection Of Light</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fourth"></input>
                        <label for="fourth"><h2 className="subjecth2">Carbon: An Important Element</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?jesc1=4-13">NCERT: Carbon and its compounds</a>
                            <a target="#" href="https://drive.google.com/file/d/1HAk4MQhqR2sjmXyxnE-LJa2T1_reHsJQ/view?usp=sharing">ICSE Carbon</a>
                            <a target="#" href="https://drive.google.com/file/d/1AnUTrKSYwWXkJeruIh6_X827H29eEUCz/view?usp=sharing">ICSE Carbon And It's Compounds</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
