import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Math | Notes</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Lecture Notes</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/12L2qqd9M4eFK3Ua-en7Uy5B4D_qZJpCrok02GayHxeM/edit?tab=t.0">Statistics</a>
                            <a target="#" href="https://docs.google.com/document/d/1OXG-pClqaF0_ogcLrazFB0uunArEWg0x5tzR9qTiEZo/edit?usp=sharing">Trigonometry</a>
                            <a target="#" href="https://drive.google.com/file/d/1XJseoJxCJIJduBGtqxFgdcVmyVyKmvjl/view?usp=sharing">Simultaneous Linear Equations</a>
                            <a target="#" href="https://drive.google.com/file/d/1zcCFO7SROC6SdJZktHUAscSwHTpX7efT/view?usp=sharing">Coordinate Geometry</a>
                            <a target="#" href="https://drive.google.com/file/d/17_YQJrUdraLYd-937mCSmILd3F48S8-T/view?usp=sharing">Financial Planning</a>
                            <a target="#" href="https://drive.google.com/file/d/1QP5z06GaP9K80wk7fznHMhI9-t78mupz/view?usp=sharing">Circles</a>
                            <a target="#" href="https://drive.google.com/file/d/1sbaqqsdD--i284Hz4XKeWs1PPe6Jd4ia/view?usp=sharing">Quadrilaterals - Misari Didi</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
