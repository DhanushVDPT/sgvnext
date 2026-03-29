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
                            <a target="_blank" href="https://drive.google.com/file/d/1GBma7_VYVYmS-l9drHP84nqdnTjgrRQ9/view?usp=sharing">Maharashtra SSC Grade 10 Algebra</a>
                            <a target="_blank" href="https://drive.google.com/file/d/14xgrrYe6zAj-GMgbwYxnHMRiwGPXOqgI/view?usp=sharing">Maharashtra SSC Grade 10 Geometry</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1CL_eS43v6kUvVbS1WIkP53jXs3uyAl8q/view?usp=sharing">RD Sharma Class 10</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Helpful Resources</h2></label>
                        <div className="lists accordioncontent">
                        <a target="_blank" href="https://docs.google.com/presentation/d/1eQDNjj_2Y90mnE-4APwYM6usdbFfXXqY/edit?usp=sharing&ouid=115433806560716319748&rtpof=true&sd=true">SSC Answer Key Booklet</a>
                        <a target="_blank" href="https://drive.google.com/file/d/1tXUUYdo3SGScOqxyvqeo0_fUMitz2WDn/view?usp=sharing">Algebra Digest</a>
                        <a target="_blank" href="https://drive.google.com/file/d/1QICksvUJai7pYdmvp8jD01BrNVrqdEww/view?usp=drive_link">Geometry Digest</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Arithmetic Progressions</h2></label>
                        <div className="lists accordioncontent">
                        <a target="_blank" href="https://drive.google.com/file/d/19sypqn9C4eGyu_y-NAZ3qAA-NkM_nddw/view?usp=drive_link">NCERT</a>
                        <a target="_blank" href="https://drive.google.com/file/d/1ZU0tauLtsuRTIrh0aX6FJC2FioAymVql/view?usp=drive_link">ICSE</a>
                        <a target="_blank" href="https://drive.google.com/file/d/1kZAjGZE7ugeLfI6RLZ0R0PgsH8UmkOWb/view?usp=drive_link">NCERT Exemplar</a>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}
