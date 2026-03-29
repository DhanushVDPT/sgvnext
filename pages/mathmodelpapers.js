import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Math | Model Papers</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Model Papers</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Algebra</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/1XWWF82dSg7yOspnLItMNsdA_SgyaDC_f/view?usp=sharing">Prelim I</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1sB4y4RqdgO9bsIf0W9PV8_R86HBI8KB9/view?usp=sharing">Prelim II</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Geometry</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/1FdFdNvHYyZiFR9If6hZ4mzYU5jMfJMmx/view?usp=drive_link">Prelim I</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1gMmaoyNeu-x-pKh-0x5AJseXcHcRU4us/view?usp=sharing">Prelim II</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
