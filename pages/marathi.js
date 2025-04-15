import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Marathi | Notes</title>
            </Head>
            <div className="subject">
                <h1>Marathi | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">विश्वकोश</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1uR_ZwLby659dgPm15eIxDefeT3IQlzMJ/view?usp=sharing">Chapter Notes</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">माझे शिक्षक व संस्कार​</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1BR_bNau8SkLJJKuizhOX6ObKThRZsxPI/view?usp=sharing">Chapter Notes</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">ते जीवनदायी झाड</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1YyV-E9EmgrDAOU0E1BdKsHm6ew4gDgCF/view?usp=sharing">Chapter Notes</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">तिफन</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1vS-kHbUbYFXqPbRnnQV7QrjBVY3lNPeh/view?usp=sharing">Chapter Notes</a>
                            <a target="#" href="https://drive.google.com/file/d/1JUjztdi62SmxsqS8Xi7aDsR9OoDrTcGX/view?usp=sharing">Poem Appretiation</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
