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
                            <a target="_blank" href="https://drive.google.com/file/d/1cRTZUTZaWMtTWRKuWEREZ1vcfekQvAW1/view?usp=drive_link">Textbook</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Helpful Resources</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/1RkJGU8ALI_FZDBTfICdUAYjPHFcANAeJ/view?usp=drive_link">Question Bank</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1m5taRkZZ1W1SbleSMoF9v5vjGRnjXj6L/view?usp=drive_link">SSC Answer Key</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1JIVXmVGw0cWA8hFwCDzPJj7IYwE4g40a/view?usp=drive_link">21 Set 2026</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1gWO750EN--kTAR3N4Qn01ffo5JBGbY1y/view?usp=drive_link">21 Set 2025</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1qZWB9sgCjPmenPqIF5EsVo5wh08oQ8CT/view?usp=drive_link">Mission 35</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Previous Years' Board Exams</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/1EQ-bMDQ39948Gg57ADp36YZ1mKMq0KQV/view?usp=drive_link">2026</a>
                            <a target="_blank" href="">2026 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1oAav_Wq45XRwrAW65tBkUNBIPLsmT0zA/view?usp=drive_link">2025</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1vDA-KyTA8k5-f3H_6aF1wKh4yTpi-mEi/view?usp=drive_link">2025 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1KfWyAmbifr2hUauHqdcgOVm2MhlPaJXS/view?usp=drive_link">2024</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1v3zNd0qmrcXm6Yj-zQRA_VGR-dNxA3IG/view?usp=drive_link">2024 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1tIVWVl15DE_eCjDjFCbu8OnJ_0G24luB/view?usp=drive_link">2023</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1YKU-kN-Rbt_sKRGRnx-4sECJWGx3THRM/view?usp=drive_link">2023 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1hgyifprpCyrV8gP4SCBjtwq5CwVZpeC9/view?usp=drive_link">2022</a>
                            <a target="_blank" href="https://drive.google.com/file/d/182se-1Jk-Bq40O6u-M2s6E8eYSWhpuQP/view?usp=drive_link">2022 Suppli</a>
                            <a target="_blank" href="https://drive.google.com/file/d/1XEvYvK9aDB0baFBghkCXzRFCsMrFKdDw/view?usp=drive_link">2020</a>
                            <a target="_blank" href="https://drive.google.com/file/d/109I96leOoL8KiDuiluMQrPpoAEn7ysCr/view?usp=drive_link">2020 Suppli</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
