import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Science | Practice</title>
            </Head>
            <div className="subject">
                <h1>Science | Practice</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Revision</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://www.canva.com/design/DAGbzfRc3Ak/zCpcOwl-sM536tr0PaZO6A/edit?utm_content=DAGbzfRc3Ak&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Misari Didi's Ultimate Revision of Reflection</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Chapter Tests</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1_xytv-SbjUYj3DxWSt2dByiL2k4qGTFn/view?usp=sharing">Ray Diagrams - Misari didi</a>
                            <a target="#" href="https://docs.google.com/document/d/16twJtlNz6oUCL4kFh77MR5PQwG2UYqSWkRtGFr15ZPc/edit?usp=sharing">Observing Space MCQ - Misari didi</a>
                            <a target="#" href="https://docs.google.com/document/d/1gw2uvQfK9trresu3SVVqU5m2b0p62FfDc-jLL234OeY/edit?usp=sharing">Observing Space Test - Misari didi</a>
                            <a target="#" href="https://drive.google.com/file/d/1cF-8D8KAUbBBcVTGV3z9jF_AvqA7QUUD/view?usp=sharing">Observing Space: Telescopes Test</a>
                            <a target="#" href="https://docs.google.com/document/d/1DzoUXP11t_5lw2NGUIXengSppQ6p288CMQLaYd3K4RE/edit?usp=sharing">Reflection Of Light Test - Srishti Didi</a>
                            <a target="#" href="https://drive.google.com/file/d/1rbW1vxQpqAqd-8kZWGpVfL21iXbo3iGZ/view?usp=sharing">Reflection Of Light Test</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
