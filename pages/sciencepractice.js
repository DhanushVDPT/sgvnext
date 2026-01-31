import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Science | Practice</title>
            </Head>
            <div className="subject">
                <h1>Science | Practice</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="fourth"></input>
                        <label for="fourth"><h2 className="subjecth2">Focus Areas</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/1XrjgX1lF-AotlyRreFworG00rqh5tVG9hQDbf0NlcBs/edit?usp=sharing">Science I</a>
                            <a target="#" href="https://docs.google.com/document/d/1CMhlXt725BKK3LymAoTakpHgoRWPaXhQodtz6QCNw2M/edit?usp=sharing">Science II</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Science I Board Exam Questions</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/1H5AfZMhET70_lTbhsvELDunefiSdLyV41ZZksMFmpWc/edit?tab=t.91jq5xx29jzg">Gravitation</a>
                            <a target="#" href="https://docs.google.com/document/d/1289PS03dqSraeMtHv0wXwfrtosaikGNrPKZJsacZb88/edit?tab=t.91jq5xx29jzg">Space Missions</a>
                            <a target="#" href="https://docs.google.com/document/d/1wXOe3WL-iUoU8CSxve7LEK8rR1suXDiEXMIT1evm80g/edit?tab=t.91jq5xx29jzg">Refraction</a>
                            <a target="#" href="https://docs.google.com/document/d/1Vsp39imU_pIPZplL0zxFgac_mhre38-g1xPO4yML5EE/edit?tab=t.91jq5xx29jzg">Lenses</a>
                            <a target="#" href="https://docs.google.com/document/d/1hGraFgqtdfUz6VTDAR0UueNz1wvSAhcuGyGwNageKaY/edit?tab=t.91jq5xx29jzg">Periodic Classification</a>
                            <a target="#" href="https://docs.google.com/document/d/1MGsgnplseC0TxJhKE73BjuqBBVyzBDOQRNfUdkhTYno/edit?tab=t.91jq5xx29jzg">Chemical Reactions</a>
                            <a target="#" href="https://docs.google.com/document/d/1iEG6CC-UEM1ZTwImSgRokywwtq1ME2LvYDsBqT3Q4dc/edit?tab=t.91jq5xx29jzg">Carbon</a>
                            <a target="#" href="https://docs.google.com/document/d/1h1GrZ8dONIka7JJIgFDfm5gj-HG1-8PXyKfgndCjVdc/edit?tab=t.91jq5xx29jzg">Metallurgy</a>
                            <a target="#" href="https://docs.google.com/document/d/1ayty3R5zsynHhyJ81175GdDViAyGZUN_z8tGr0blnic/edit?tab=t.91jq5xx29jzg">Electricity</a>
                            <a target="#" href="https://docs.google.com/document/d/1ZQIP7DZQzzfnlJ5V2Ix21J9CoDpnEbvcwK9ycMK8Q6I/edit?tab=t.91jq5xx29jzg">Heat</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Science II Board Exam Questions</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/1BSbtKrb8ZACktnETgMY_8H4vhVaEBfluTg4Tv2L-R4Q/edit?tab=t.91jq5xx29jzg">Microbiology</a>
                            <a target="#" href="https://docs.google.com/document/d/1s457jTADE6uNQ3t9nUf1E1yLClU00fIf1nR6d7cPWQ4/edit?tab=t.91jq5xx29jzg">Animal Classification</a>
                            <a target="#" href="https://docs.google.com/document/d/16GJmkSbI3mLSJ88Ft_9RABUWkODoWDCM2_dhMfz7Xr8/edit?tab=t.91jq5xx29jzg">Heredity and Evolution</a>
                            <a target="#" href="https://docs.google.com/document/d/1T-NaGMXJTQUsrc0Yv9fGJOf73LLIyZ8TIAzgnsI6SjY/edit?tab=t.91jq5xx29jzg">Life Processes Part 1</a>
                            <a target="#" href="https://docs.google.com/document/d/1WWfQFu8m1ETof_i_E6YlL-pgiOHrtgK1ss58qxlfKxI/edit?tab=t.91jq5xx29jzg">Life Processes Part 2</a>
                            <a target="#" href="https://docs.google.com/document/d/1oErYxNx3yjx4CM6RXEeV011RtB44pvZQbroNadeR4D8/edit?tab=t.7pji34nfietr">Towards Green Energy</a>
                            <a target="#" href="https://docs.google.com/document/d/1musP8M0Mg3DLP5Kz6BUNvhjTUYYvEz435y4MD_K0Qbo/edit?tab=t.7pji34nfietr">Cell Biology</a>
                            <a target="#" href="https://docs.google.com/document/d/1FTcT2CPMJHJJQdwOwgmvFk_PyQpjxLWELAt0eujETHg/edit?usp=sharing">Social Health</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
