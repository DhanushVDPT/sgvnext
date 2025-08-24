import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Marathi</title>
            </Head>
            <div className="subject">
                <h1>Marathi</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Books</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/19sS0v8DgBQ17i7d0Lkj4_DvX9BtQ_HJC/view?usp=sharing">Textbook</a>
                            <a target="#" href="https://drive.google.com/file/d/1nNcdYFisrloz7kU0Wwn0psVXdPzaCX30/view?usp=drive_link">21 Set</a>
                            <a target="#" href="https://drive.google.com/file/d/1FdpOBqQ9Q3vZ2xInEPDG2WHIw3Y6b-dA/view?usp=drive_link">Mission 35</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
