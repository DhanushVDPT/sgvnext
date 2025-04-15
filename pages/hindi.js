import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Hindi | Notes</title>
            </Head>
            <div className="subject">
                <h1>Hindi | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">अपराजेय</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1I61Tr7Hgemv0Lf6k9jwejO8xU8EZx1aF/view?usp=sharing">Chapter Notes</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">स्वतंत्रता गान</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1_lSx8wm9mnqEHtoRupWBIKiB3KwGvFqO/view?usp=sharing">Chapter Notes</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}