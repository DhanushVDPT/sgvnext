import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Math | Books</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Reference Books</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Text Books</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ebooks.ebalbharati.in/pdfs/1003000608.pdf">Maharashtra SSC Grade 10 Algebra</a>
                            <a target="#" href="https://ebooks.ebalbharati.in/pdfs/1003000609.pdf">Maharashtra SSC Grade 10 Geometry</a>
                            <a target="#" href="https://drive.google.com/file/d/1gjvTHxhkt937GE5xMSZg3zLKmBiX5J_R/view?usp=sharing">RD Sharma Class 10</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Arithmetic Progressions</h2></label>
                        <div className="lists accordioncontent">
                        <a target="#" href="https://drive.google.com/file/d/1tbD7OMrcQ9fF3b5CmHNDoTFXnnKQR_t0/view?usp=sharing">NCERT</a>
                        <a target="#" href="https://drive.google.com/file/d/1y9DfIU2KhcTiow-L4TJZGXjwwt4kSBts/view?usp=sharing">ICSE</a>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}
