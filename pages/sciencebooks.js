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
                        <input type="radio" name="accordion" id="sixth"></input>
                        <label for="sixth"><h2 className="subjecth2">Sound</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?iesc1=11-12">NCERT: Sound</a>
                            <a target="#" href="https://drive.google.com/file/d/1eeHkDUnztrQz2C0AK-lAKxADCBCO_gNS/view?usp=sharing">ICSE: Sound Propogation</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Biotechnology</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?iesc1=6-12">NCERT: Tissues</a>
                            <a target="#" href="https://drive.google.com/file/d/1HTdElxjGOsutDU2fhtl39L9pXKr4pnZF/view?usp=sharing">ICSE: Tissues</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Heredity & Variation</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://www.canva.com/design/DAGc9YT7B7c/AlOVTSCFLYsacIn-o6Nylg/view?utm_content=DAGc9YT7B7c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4956fb47b5">Lectures Slides</a>
                            <a target="#" href="https://drive.google.com/file/d/15elK-_29PfG1jw4LYnvNuGLk3VJkd1SM/view?usp=sharing">Genetics: A Conceptual Approach - Benjamin Pierce</a>
                            <a target="#" href="https://ncert.nic.in/textbook.php?jesc1=8-13">NCERT: Heredity</a>
                            <a target="#" href="https://www.youtube.com/playlist?list=PL5xvztUyPgDoQOnuWsLbrlqShE27M9PQD">Lectures - Thomas Mennella</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fourth"></input>
                        <label for="fourth"><h2 className="subjecth2">Reflection Of Light</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?jesc1=9-13">NCERT: Light</a>
                            <a target="#" href="https://drive.google.com/file/d/1bAIg6HTAxLX4o4MbsQuAO67VERndJjzc/view?usp=sharing">ICSE Reflection Of Light</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fifth"></input>
                        <label for="fifth"><h2 className="subjecth2">Carbon: An Important Element</h2></label>
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
