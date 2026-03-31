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
                            <a target="_blank" href="https://drive.google.com/file/d/1Oczc2Jzy0_uSx1PdcMqVeYyIoQwF_Ipb/view?usp=drive_link">Textbook</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1nhw8AVQRtC9BHDl3hgwtFv_E5NczHZG_/view?usp=drive_link">Digest</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Helpful Resources</h2></label>
                        <div className="lists accordioncontent">
                            
                            <a target="_blank" href="https://drive.google.com/file/d/1i1vsXr5XTijbc80L0vlHl8fBvPJNHmpT/view?usp=drive_link">21 Set 2026</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1ZM6uiNTKe3QDenxhAK9l_KufrBxrbxN9/view?usp=drive_link">Mission 35</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1Y8tIulZDH0UzDf6MVtl_UHBKvrdUu8qW/view?usp=drive_link">21 Set 2025</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}