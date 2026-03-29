import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Math | Practice</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Practice</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Algebra Chapter-wise Previous Years' Questions</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://docs.google.com/document/d/1QOHmrr76j8UcyA-WUcPvvFO2K3kjjW2l_N52pVMSZqw/edit?tab=t.91jq5xx29jzg">Arithmetic Progressions</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1ZRlsasGOZsA9Et_3L88Ga8-2f-B2mlwXWcE7K6ymlqU/edit?tab=t.91jq5xx29jzg">Linear Equations</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1SWlbMqubVfbI9WVkEBy5kwb2KJAhoPgfKLBhBIRBaac/edit?tab=t.91jq5xx29jzg">Quadratic Equations</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1dnRDhJKu9h7I-K2PhmLBwl8Keg7cAxDuCNLO6VoMAEU/edit?tab=t.91jq5xx29jzg">Probability</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1SK_iwJZ_XsjrRaAHPvxcvKAkUiuzgx08tNRIAXI-CLU/edit?tab=t.91jq5xx29jzg">Statistics</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1ZBifK35_9Lw40z_79VZajktEt8BuLTm2lIUe39cmGY8/edit?tab=t.91jq5xx29jzg">Financial Planning</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Geometry Chapter-wise Previous Years' Questions</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://docs.google.com/document/d/1v-5pgYV6f5ayjfFsEUjFzfxT9Xsl3Z5ytfjjoS9fGvE/edit?tab=t.91jq5xx29jzg">Similarity</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1Bx9l1922ZvC-BfwYfTMHgcZB2ZVn2Z_Nvfj-qOM24N0/edit?tab=t.91jq5xx29jzg">Pythagoras Theorem</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1hjEhGEk9jyU4m5DJGDvf2w2Yk-HozNr1q0YNNVJ4hJg/edit?tab=t.91jq5xx29jzg">Coordinate Geometry</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1TQIEV_84TsNr5vlV6GGiz4XnB2CJVB9vEcE3YrkkJqM/edit?tab=t.91jq5xx29jzg">Mensuration</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1n5ckrOZ6W_N9hcUfXE5nSSKyIQosfDE--6oLe6_PtpU/edit?tab=t.91jq5xx29jzg">Trigonometry</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1H6RsBb90HQ3feKTSLgfRp5IqdVtEIS6TkzQnEHq5jGQ/edit?tab=t.91jq5xx29jzg">Circles</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1i8FB7CI9kvY-lxt4Cs-M7iOAU_9C6kd1cYY3qVH9Iwk/edit?tab=t.91jq5xx29jzg">Construction</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Practice Questions for sections Q4 and Q5</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://docs.google.com/document/d/1VITOyM2teTJ9a3wcXxhCER4HmUVYctr_GbFQUBBVC7E/edit?tab=t.0">Algebra</a>
                            <a target="_blank" href="https://docs.google.com/document/d/1VITOyM2teTJ9a3wcXxhCER4HmUVYctr_GbFQUBBVC7E/edit?tab=t.hblusckskeg6">Geometry</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fourth"></input>
                        <label for="fourth"><h2 className="subjecth2">Worksheets</h2></label>
                        <div className="lists accordioncontent">
                            <a target="_blank" href="https://drive.google.com/file/d/1x2syVRg5Q5coM_NteHoirNku9vX8vyU-/view?usp=drive_link">Arithmetic Progressions</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
