import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Hindi</title>
            </Head>
            <div className="subject">
                <h1>Hindi</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Books</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1utPux8hz4DbDwvfYYauaVsXSO0JYTziU/view?usp=sharing">Textbook</a>
                            <a target="#" href="https://drive.google.com/file/d/1A_3wYUe0qU2Ai2qqQOXyG5DEdS6V-TRR/view?usp=sharing">21 Set</a>
                            <a target="#" href="https://drive.google.com/file/d/161yMGmfUxqMErT9KD0rUQ_8aJbWCJvPn/view?usp=sharing">Mission 35</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}