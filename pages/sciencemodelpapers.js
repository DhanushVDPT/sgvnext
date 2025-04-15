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
                        <label for="first"><h2 className="subjecth2">Semester Exam II</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1je7FumjCQ4S4X0wqUbTr24zR_VaSwLih/view?usp=sharing">Science I</a>
                            <a target="#" href="https://drive.google.com/file/d/1Vsdce5rok4xQtrhiopqv1KXp5R6eVIf1/view?usp=sharing">Science II</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Unit Test II</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1PDeGThastWv7_ASnmIzjloLPhGo3E543/view?usp=drivesdk">Science I</a>
                            <a target="#" href="https://drive.google.com/file/d/1Ok3yCIZdvR-FWtIPx1lvTw0f1cEfNdLM/view?usp=sharing">Science II</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
