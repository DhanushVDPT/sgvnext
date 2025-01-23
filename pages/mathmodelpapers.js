import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Math | Model Papers</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Model Papers</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Unit Test II</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/18-HE2sjsmDTz5NtxuHA7Xo2-QpzAQLgG/view?usp=sharing">Geometry I</a>
                            <a target="#" href="https://drive.google.com/file/d/1jSNLUcNJpYoV-g8mVoJIJSpcDkxhyxKx/view?usp=sharing">Geometry II</a>
                            <a target="#" href="https://drive.google.com/file/d/1kQXHDIh3BiisB8-LJCpI6AimVnr4OiJf/view?usp=drivesdk">Algebra</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
