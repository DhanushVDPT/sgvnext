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
                            <a target="_blank" href="https://drive.google.com/file/d/1Ianl_8PNHE-DMAC3NXMkz8XnTf4F4oRL/view?usp=drive_link">Maharashtra SSC Grade 10 Science I</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1yY1y3ZRov7kD4Ufvl2PrLXWo0dOF77HD/view?usp=drive_link">Maharashtra SSC Grade 10 Science II</a>
                            <a target="_blank" href="https://drive.google.com/file/d/12o4V63ZIwOQ59GcUrGSCZE5c02vfzUkS/view?usp=sharing">NCERT Grade 10 Science</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Gravitation</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/1ssbS_HjeT2w8K5LyGQcR6A6MHyg1Bsm5/view?usp=drive_link">NCERT</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
