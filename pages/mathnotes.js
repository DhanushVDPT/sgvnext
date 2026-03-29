import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Math | Notes</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Lecture Notes</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://docs.google.com/document/d/1QOHmrr76j8UcyA-WUcPvvFO2K3kjjW2l_N52pVMSZqw/edit?tab=t.0">Arithmetic Progression</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1v-5pgYV6f5ayjfFsEUjFzfxT9Xsl3Z5ytfjjoS9fGvE/edit?tab=t.0">Similarity</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1ZRlsasGOZsA9Et_3L88Ga8-2f-B2mlwXWcE7K6ymlqU/edit?usp=drive_link">Linear Equations</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1SWlbMqubVfbI9WVkEBy5kwb2KJAhoPgfKLBhBIRBaac/edit?usp=drive_link">Quadratic Equations</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1Bx9l1922ZvC-BfwYfTMHgcZB2ZVn2Z_Nvfj-qOM24N0/edit?tab=t.0">Pythagoras Theorem</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1hjEhGEk9jyU4m5DJGDvf2w2Yk-HozNr1q0YNNVJ4hJg/edit?tab=t.0">Coordinate Geometry</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1ZBifK35_9Lw40z_79VZajktEt8BuLTm2lIUe39cmGY8/edit?usp=drive_link">Financial Planning</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1SK_iwJZ_XsjrRaAHPvxcvKAkUiuzgx08tNRIAXI-CLU/edit?tab=t.0">Statistics</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1dnRDhJKu9h7I-K2PhmLBwl8Keg7cAxDuCNLO6VoMAEU/edit?usp=drive_link">Probability</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1TQIEV_84TsNr5vlV6GGiz4XnB2CJVB9vEcE3YrkkJqM/edit?tab=t.0">Mensuration</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1H6RsBb90HQ3feKTSLgfRp5IqdVtEIS6TkzQnEHq5jGQ/edit?tab=t.0">Circles</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1n5ckrOZ6W_N9hcUfXE5nSSKyIQosfDE--6oLe6_PtpU/edit?tab=t.0">Trigonometry</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
