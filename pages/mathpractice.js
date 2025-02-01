import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Math | Practice</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Practice</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Chapter Tests</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1OEPYyTa145yJbeao5GlOqYuOp8XbjG8b/view?usp=sharing">Circles Test - Misari didi</a>
                            <a target="#" href="https://docs.google.com/document/d/1Io-ISBzv4EBWI2IKJ6Q2X5ggkL8ncWL7SHi78Z6Ovlo/edit?usp=sharing">Linear Equations - Misari didi</a>
                            <a target="#" href="https://drive.google.com/file/d/1dNHUcCZlqrdzH3DDbAW9P_u_hw17c3JO/view?usp=sharing">Simultaneous Linear Equations Test</a>
                            <a target="#" href="https://drive.google.com/file/d/1aCJ2Kg-9tJVFQ5zLxSs-nCyXgxmoEObl/view?usp=sharing">Coordinate Geometry - Misari didi</a>
                            <a target="#" href="https://drive.google.com/file/d/1YDOAk5ZbHnmIJuNPbgFZBn_jqFNXIrIA/view?usp=sharing">Coordinate Geometry - Santoshi didi</a>
                            <a target="#" href="https://drive.google.com/file/d/1LG1H7BJjFJy2d9F_FK9bq0D5ONVlp_Rz/view?usp=sharing">Coordinate Geometry Mini Test</a>
                            <a target="#" href="https://docs.google.com/document/d/104iiaAwerpE27KyCVkrhgGlKcEchqSAKqspjiVIOGx0/edit?usp=sharing">Coordinate Geometry Test</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Practice Problems</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/1K7Yx9tnqdB3m0XzlOMB4Bx2ZoWzwYCN4VKk_QVuvEeg/edit?usp=sharing">Trigonometry</a>
                            <a target="#" href="https://drive.google.com/file/d/1pUEGz4ebrpkvDzc8xtDbvKj6DPu_mWSZ/view?usp=sharing">Mensuration - Santoshi Didi</a>
                            <a target="#" href="https://docs.google.com/document/d/1QZGlCiBOThTmcAEsDI0tQyQYGfShmzn-c2NgDoXoOH4/edit?usp=sharing">Coordinate Geometry</a>
                            <a target="#" href="https://docs.google.com/document/d/132hAS7ZLpRtj0vT0--1-d4A-KcTVSunKxyDcTCAvnXE/edit?usp=sharing">Simultaneous Linear Equations</a>
                            <a target="#" href="https://drive.google.com/file/d/1nqFRBjXo5yvfDm_ojT_8Za_I1A-TSV55/view?usp=sharing">Linear Equations - Santoshi Didi</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
