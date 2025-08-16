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
                        <label for="second"><h2 className="subjecth2">Helpful Resources</h2></label>
                        <div className="lists accordioncontent">
                        <a target="#" href="https://drive.google.com/file/d/1Agg-iqrRJbZj-Tc-l6_ROgpUpFYejgmd/view?usp=sharing">Algebra 21 Set</a>
                        <a target="#" href="https://drive.google.com/file/d/1bm4b2kXII9GlgclaA1TswEFjunZT3PLB/view?usp=sharing">Algebra Mission 35</a>
                        <a target="#" href="https://drive.google.com/file/d/199ellk_VHJsRdPpIyt3dzXAd17pPkJ_y/view?usp=sharing">Algebra Digest</a>
                        <a target="#" href="https://drive.google.com/file/d/1xIvIrb05zDkk7bMhkynXYUG_UhvH79IN/view?usp=sharing">Geometry 21 Set</a>
                        <a target="#" href="https://drive.google.com/file/d/1BCJxiSpculDjM64n6nKApAIpexlMbRnR/view?usp=sharing">Geometry Mission 35</a>
                        <a target="#" href="https://drive.google.com/file/d/1kUK1Y0B7tZAY02-K-MaiR-nCuicZCbjN/view?usp=sharing">Geometry Digest</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Arithmetic Progressions</h2></label>
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
