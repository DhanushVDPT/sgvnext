import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Science | Model Papers</title>
            </Head>
            <div className="subject">
                <h1>Science | Model Papers</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Science I</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/14UL51IblUA8tY2USZMBrhF7Fr3AMuu1u/view?usp=drive_link">Prelim I</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1hsVblUSWPlo9Et_oMRlr1McLNjr81Ocs/view?usp=drive_link">Prelim II</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Science II</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/1mTizgNt5NfoVFoSYfVOA9_fY09EktA8n/view?usp=drive_link">Prelim I</a>
                            <a target="_blank" href="https://drive.google.com/file/d/18kZbDo5ckHHGvSHr9tZ0TIHmduTDit7U/view?usp=drive_link">Prelim II</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
