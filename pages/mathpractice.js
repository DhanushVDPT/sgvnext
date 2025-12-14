import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Math | Practice</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Practice</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Algebra Previous Years' Questions</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/14vLnIx-TQNxQhL7sjkANJGVX3-m-h3Wrc2RtzbosYas/edit?tab=t.91jq5xx29jzg">Arithmetic Progressions</a>
                            <a target="#" href="https://docs.google.com/document/d/13kaE6fCfqX822gPxqzgHYWA7cn-Ddc7cZI_Ho1NU4Ck/edit?tab=t.91jq5xx29jzg">Linear Equations</a>
                            <a target="#" href="https://docs.google.com/document/d/1L4pIFaWE1QFPK9cLiqhGyiDsdrTtCi30h01xS0U5pKo/edit?tab=t.91jq5xx29jzg">Quadratic Equations</a>
                            <a target="#" href="https://docs.google.com/document/d/1lsy2DruLCvlDzkW-gWLLpK_zok8jKksf_jjANl88hZQ/edit?tab=t.91jq5xx29jzg">Probability</a>
                            <a target="#" href="https://docs.google.com/document/d/1n-Yub9j8otv8GAOympzeyeKc05dBrDLZVubU_bqyFJY/edit?tab=t.91jq5xx29jzg">Statistics</a>
                            <a target="#" href="https://docs.google.com/document/d/1pwqMecf72d2hQ2iRpMfGgE_P2I58jwIEFb-nKQxYYqU/edit?tab=t.91jq5xx29jzg">Financial Planning</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Geometry Previous Years' Questions</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1bFN2q97a9JeQEyEGH0G3ftERlE6eKg9c/view?usp=drive_link">Similarity</a>
                            <a target="#" href="https://docs.google.com/document/d/1KaEIsZHdhdHXr03NIEXCg1Gbh3zsnOp-2WgIrVaZNyc/edit?tab=t.91jq5xx29jzg">Pythagoras Theorem</a>
                            <a target="#" href="https://docs.google.com/document/d/1N7LL7eViRJuZlpuqqTZNonSuB5AwRoXQySIYXrdGIw0/edit?tab=t.91jq5xx29jzg">Coordinate Geometry</a>
                            <a target="#" href="https://docs.google.com/document/d/1tKYgYNBoXwvhsijCGYUaQ-M-4lA8uise7t89jJSOz8A/edit?tab=t.91jq5xx29jzg">Mensuration</a>
                            <a target="#" href="https://docs.google.com/document/d/114DGg1RRbJhYPGsVR2c3NSKSjYuAWsy6Wg-quGm06Xk/edit?tab=t.91jq5xx29jzg">Trigonometry</a>
                            <a target="#" href="https://docs.google.com/document/d/1sf_MFIb0f9YkZA0-ae_EijHIyHK9nHPPPYUtKR9Mf_0/edit?tab=t.91jq5xx29jzg#heading=h.u7mu04g96hnz">Circles</a>
                            <a target="#" href="https://docs.google.com/document/d/1N4IhQXFb4MhwDWf4nL4O7ZKngBmA8-uxypMIwCRui-U/edit?tab=t.91jq5xx29jzg">Construction</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Q4 and Q5</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/1CoyXcB1zbjTFXgsAlJaWH3flcyj5ixhtkvYUj0MVprU/edit?tab=t.0">Algebra</a>
                            <a target="#" href="https://docs.google.com/document/d/1CoyXcB1zbjTFXgsAlJaWH3flcyj5ixhtkvYUj0MVprU/edit?tab=t.hblusckskeg6">Geometry</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
