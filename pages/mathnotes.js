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
                            <a target="#" href="https://docs.google.com/document/d/13kaE6fCfqX822gPxqzgHYWA7cn-Ddc7cZI_Ho1NU4Ck/edit?tab=t.0">Linear Equations</a>
                            <a target="#" href="https://docs.google.com/document/d/1L4pIFaWE1QFPK9cLiqhGyiDsdrTtCi30h01xS0U5pKo/edit?tab=t.0">Quadratic Equations</a>
                            <a target="#" href="https://docs.google.com/document/d/1KaEIsZHdhdHXr03NIEXCg1Gbh3zsnOp-2WgIrVaZNyc/edit?usp=sharing">Pythagoras Theorem</a>
                            <a target="#" href="https://docs.google.com/document/d/1N7LL7eViRJuZlpuqqTZNonSuB5AwRoXQySIYXrdGIw0/edit?usp=sharing">Coordinate Geometry</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
