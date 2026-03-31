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
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Previous Years' Board Exams</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/10jRZ7VifHawpQzcSVQ1urxAVgMybrB31/view?usp=drive_link">2026</a>
                            <a target="_blank" href="">2026 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1EWIR-7gEaHlrTzUtFa5nnezI4cN1L6aM/view?usp=drive_link">2025</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1uEhalXNwtPrkqowCwWoaby9UJsO9EmPF/view?usp=drive_link">2025 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1MPWLHxcEOySeWZG03B-0tmtQteqd7Re-/view?usp=drive_link">2024</a>
                            <a target="_blank" href="https://drive.google.com/file/d/167k2kk3r6KUugDqhnbxdYQaiLROLf4RH/view?usp=drive_link">2024 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1O0_UNQVfL2l2JoggdOfYRY3nwCIDWJyq/view?usp=drive_link">2023</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1VUBZZAUREXdsvDMl2dtu_YbiCe7CGuix/view?usp=drive_link">2023 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/13wpbz_PGpFJVTDUJtcoQ21k2M8-vpMju/view?usp=drive_link">2022</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1bixa7tcfFJ-d0noOap9RCf37lcDQh1oR/view?usp=drive_link">2022 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1ZgsH0GBpoCm_m09qEIgWbCBQiYiOW831/view?usp=drive_link">2020</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1fELcJM7QIM04dA-Tz3PQHLAFlR3voFFr/view?usp=drive_link">2020 Suppli</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}