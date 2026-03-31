import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Science | Notes</title>
            </Head>
            <div className="subject">
                <h1>Science | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Lecture Notes</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://docs.google.com/document/d/1iOR8VsdbZ3oiIOIce2Cuk1zop_bUZA5V5lO3pPrRjck/edit?tab=t.0">Heat</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1q1ut25qbXPVDYhUt5VJsZCX4LvTkBXLI8ZCOnWN0LR4/edit?tab=t.0">Life Processes Part 1</a>
                            <a target="_blank" href="https://docs.google.com/document/d/10kuFUrNMISPURZch3CBivHkhMGaSNUP-ArO6uhZz8U4/edit?tab=t.0">Heredity and Evolution</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1-aP_RphwpRUhe2wP4lZsqTqPqiZGIrUBig5gszU5xaU/edit?tab=t.0">Microbiology</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1aJ984ApryKQo_PGUmtxeL5zH5hxEIwZrKP5guKEU-GU/edit?tab=t.0">Gravitation</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1bSqbIp0tHaF5-BeqdTF6SFiAsIAN9E87mP7IGR4CR7k/edit?tab=t.0">Space Missions</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Questions & Answers</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://docs.google.com/document/d/1rAyBMbtuygH7w7bfb43FtXYiPvt1MR1yf9D3P_9p2Vs/edit?tab=t.0">Carbon</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1iOR8VsdbZ3oiIOIce2Cuk1zop_bUZA5V5lO3pPrRjck/edit?tab=t.ij22i6arhfzd">Heat</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1wOHeq-zcNurtZAm04sad_MGF1Zr_v0JP04sU4lWy2Q4/edit?tab=t.0">Chemical Reactions</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1N88J3l42EsNm6B0Rdcy8sNpvNnUW-Qbh5XFbDyVKHI0/edit?tab=t.0">Periodic Classification</a>
                            <a target="_blank" href="https://docs.google.com/document/d/15s5cMwf1M-usIZttVFjxIH7oQ5z_vShYuqCLiakQasM/edit?tab=t.0">Green Energy</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1ESgsfZqdQrt43TKCTqOkeJHAB7n2VqqmGhMtLhpFUdU/edit?tab=t.mgtuakqtcb4b">Current Electricity</a>
                            <a target="_blank" href="https://docs.google.com/document/d/14-x5_06TZKNBnUWnCw94HaXQ8yqT7jyv3BXJelIeQMs/edit?tab=t.t0w4mouh6q6k">Metallurgy</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1a0NtxMqoguiezPWPLZ0KYe7_Fblw0_LjxPlpMOZzf1A/edit?tab=t.0">Cell Biology</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1q1ut25qbXPVDYhUt5VJsZCX4LvTkBXLI8ZCOnWN0LR4/edit?tab=t.ha1s3a3joyac">Life Processes Part 2</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1PaGk9M0YwjXpSG7l7_uYKTkpodr3VLtnYNGsrzBQGHw/edit?tab=t.ha1s3a3joyac">Life Processes Part 1</a>
                            <a target="_blank" href="https://docs.google.com/document/d/10kuFUrNMISPURZch3CBivHkhMGaSNUP-ArO6uhZz8U4/edit?tab=t.ha1s3a3joyac">Heredity and Evolution</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Slides</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://canva.link/tyvmtcqi7euu3a5">Gravitation</a>
                            <a target="_blank" href="https://canva.link/i0cki3tkitf6c59">Space Missions</a>
                            <a target="_blank" href="https://canva.link/yva0niqxlb3c5bw">Life Processes II</a>
                            <a target="_blank" href="https://canva.link/5hobs5fwt43sgth">Human Reproduction</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
