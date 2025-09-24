import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Science | Notes</title>
            </Head>
            <div className="subject">
                <h1>Science | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Lecture Notes</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/1T-NaGMXJTQUsrc0Yv9fGJOf73LLIyZ8TIAzgnsI6SjY/edit?tab=t.0">Life Processes Part 1</a>
                            <a target="#" href="https://docs.google.com/document/d/16GJmkSbI3mLSJ88Ft_9RABUWkODoWDCM2_dhMfz7Xr8/edit?tab=t.0">Heredity and Evolution</a>
                            <a target="#" href="https://docs.google.com/document/d/1BSbtKrb8ZACktnETgMY_8H4vhVaEBfluTg4Tv2L-R4Q/edit?tab=t.0">Microbiology</a>
                            <a target="#" href="https://www.canva.com/design/DAGkGcJQQ1M/dLGFtbrHdGZyoNCPgonIJQ/view?utm_content=DAGkGcJQQ1M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hba1c7d8ba8">Gravitation</a>
                            <a target="#" href="https://docs.google.com/document/d/1289PS03dqSraeMtHv0wXwfrtosaikGNrPKZJsacZb88/edit?tab=t.pdx545xqyx5w">Space Missions</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Questions & Answers</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/1ZQIP7DZQzzfnlJ5V2Ix21J9CoDpnEbvcwK9ycMK8Q6I/edit?tab=t.ij22i6arhfzd">Heat</a>
                            <a target="#" href="https://docs.google.com/document/d/1MGsgnplseC0TxJhKE73BjuqBBVyzBDOQRNfUdkhTYno/edit?usp=sharing">Chemical Reactions</a>
                            <a target="#" href="https://docs.google.com/document/d/1hGraFgqtdfUz6VTDAR0UueNz1wvSAhcuGyGwNageKaY/edit?usp=sharing">Periodic Classification</a>
                            <a target="#" href="https://docs.google.com/document/d/1oErYxNx3yjx4CM6RXEeV011RtB44pvZQbroNadeR4D8/edit?usp=sharing">Green Energy</a>
                            <a target="#" href="https://docs.google.com/document/d/1ayty3R5zsynHhyJ81175GdDViAyGZUN_z8tGr0blnic/edit?tab=t.mgtuakqtcb4b">Current Electricity</a>
                            <a target="#" href="https://docs.google.com/document/d/1h1GrZ8dONIka7JJIgFDfm5gj-HG1-8PXyKfgndCjVdc/edit?usp=sharing">Metallurgy</a>
                            <a target="#" href="https://docs.google.com/document/u/0/d/1musP8M0Mg3DLP5Kz6BUNvhjTUYYvEz435y4MD_K0Qbo/edit">Cell Biology</a>
                            <a target="#" href="https://docs.google.com/document/d/1WWfQFu8m1ETof_i_E6YlL-pgiOHrtgK1ss58qxlfKxI/edit?tab=t.ha1s3a3joyac">Life Processes Part 2</a>
                            <a target="#" href="https://docs.google.com/document/d/1T-NaGMXJTQUsrc0Yv9fGJOf73LLIyZ8TIAzgnsI6SjY/edit?tab=t.ha1s3a3joyac">Life Processes Part 1</a>
                            <a target="#" href="https://docs.google.com/document/d/16GJmkSbI3mLSJ88Ft_9RABUWkODoWDCM2_dhMfz7Xr8/edit?tab=t.ha1s3a3joyac">Heredity and Evolution</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
