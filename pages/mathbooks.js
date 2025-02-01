import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Math | Books</title>
            </Head>
            <div className="subject">
                <h1>Mathematics | Reference Books</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Text Books</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ebooks.ebalbharati.in/pdfs/903000608.pdf">Maharashtra SSC Grade 9 Algebra</a>
                            <a target="#" href="https://ebooks.ebalbharati.in/pdfs/903000609.pdf">Maharashtra SSC Grade 9 Geometry</a>
                            <a target="#" href="https://drive.google.com/file/d/1pvbTKIVzWbQQsA9VQGC8xODRSnhLhWLh/view?usp=sharing">RD Sharma Class 9</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Trigonometry</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1gP7zP3gh7WL_uJEMRJfbtQ5TYuoSbFXM/view?usp=sharing">Trigonometry Formula Sheet</a>
                            <a target="#" href="https://ncert.nic.in/textbook.php?jemh1=8-14">NCERT: Trigonometry</a>
                            <a target="#" href="https://ncert.nic.in/textbook.php?jemh1=9-14">NCERT: Heights And Distances</a>
                            <a target="#" href="https://drive.google.com/file/d/1yzNfMnQPkWjwT-EU0czwvoPnAWq3HCoG/view?usp=sharing">ICSE: Trigonometry</a>
                            <a target="#" href="https://drive.google.com/file/d/1h6VMP5DdUIImNmkfHR5y7rBwXVwW9alz/view?usp=sharing">ICSE: Trigonometric Ratios</a>
                            <a target="#" href="https://drive.google.com/file/d/1OGksXq8IwAZIAMV1s_FogJSsLjdDq7li/view?usp=sharing">ICSE: Trigonometric Ratios Of Standard Angles</a>
                            <a target="#" href="https://drive.google.com/file/d/1oSlcP_Vi0z1sF8hVfAs2RkFRjA80BrNW/view?usp=sharing">ICSE: Complimentary Angles</a>
                            <a target="#" href="https://drive.google.com/file/d/13EYX_7lM6LZ2Du2yzJRvnTkxLCLTMr-P/view?usp=sharing">ICSE: Trigonometric Identities 1</a>
                            <a target="#" href="https://drive.google.com/file/d/1n0MB0N3X4Mrk_TJY1sd0Y1FmMtXbbNOg/view?usp=sharing">ICSE: Trigonometric Identities 2</a>
                            <a target="#" href="https://drive.google.com/file/d/1uwm8PVK1qK-gMJKprcOIDTTntd8CV8Je/view?usp=sharing">ICSE: Heights and Distances</a>
                            <a target="#" href="https://drive.google.com/file/d/1IRh9INyam_RmRmD3lp2AiE481jtE5kKu/view?usp=sharing">ICSE: Heights and Distances 2</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="third"></input>
                        <label for="third"><h2 className="subjecth2">Circles</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?iemh1=9-12">NCERT: Circles</a>
                            <a target="#" href="https://drive.google.com/file/d/16z3lqw4ccAXGAt_ULlIrnartuLRpFHlM/view?usp=sharing">ICSE: Circle</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fourth"></input>
                        <label for="fourth"><h2 className="subjecth2">Coordinate Geometry</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?iemh1=3-12">NCERT: Coordinate Geometry</a>
                            <a target="#" href="https://drive.google.com/file/d/1bccold1ElocEvjjLl-dnGcOvXfS8rWZX/view?usp=sharing">ICSE: Coordinate Geometry</a>
                            <a target="#" href="https://drive.google.com/file/d/1rWC9n-s1WtYGYOflUra-Y2uLnvakdmQ3/view?usp=sharing">ICSE: Co-ordinate Geometry</a>
                            <a target="#" href="https://drive.google.com/file/d/1E3ZJi6mpSNYLW62TAyjitsIAm1Qp_7mY/view?usp=sharing">ICSE: Coordinate System and Graphs</a>
                            <a target="#" href="https://drive.google.com/file/d/1-2d9hhtMWBUbhJrxAHhqsM2am6J4n0Qq/view?usp=sharing">ICSE: Graphs</a>
                            <a target="#" href="https://drive.google.com/file/d/1ohzLGthPuR47D6a2QOls9Co4fryIvUk8/view?usp=sharing">ICSE: Graphs 2</a>
                            <a target="#" href="https://drive.google.com/file/d/1ftcRuogOKeBtEKOx623DriYlxDynKUWb/view?usp=sharing">ICSE: Linear Graphs</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="fifth"></input>
                        <label for="fifth"><h2 className="subjecth2">Financial Planning</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?hemh1=7-13">NCERT: Commerical Math</a>
                            <a target="#" href="https://www.studiestoday.com/sites/default/files/books/icsebooks/ICSE-Class-10-Maths-ad-Chapter-01-Compound-Interest.pdf">ICSE: Compound Interest</a>
                            <a target="#" href="https://www.studiestoday.com/sites/default/files/books/icsebooks/ICSE-Class-9-Maths-Chapter-02-Compound-Interest-Without-Using-Formula.pdf">ICSE: Compound Interest (Without Formula)</a>
                            <a target="#" href="https://www.studiestoday.com/sites/default/files/books/icsebooks/ICSE-Class-10-Maths-ad-Chapter-02-Sales-Tax-Value-Added-Tax-VAT.pdf">ICSE: Tax</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="sixth"></input>
                        <label for="sixth"><h2 className="subjecth2">Simultaneous Linear Equations</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://ncert.nic.in/textbook.php?iemh1=4-12">NCERT: Linear Equations In Two Variables</a>
                            <a target="#" href="https://ncert.nic.in/textbook.php?jemh1=3-14">NCERT: Pair of Linear Equations In Two Variables</a>
                            <a target="#" href="https://drive.google.com/file/d/1wpUtkiwx55N2Une0UtWTN_7Wu_4Abwie/view?usp=sharing">ICSE Linear Equations</a>
                            <a target="#" href="https://drive.google.com/file/d/1GofqW2me_KMR0YtGt2V93vgdGUxbC9c5/view?usp=sharing">ICSE Linear Equations in One Variable</a>
                            <a target="#" href="https://drive.google.com/file/d/1ACeqMbyDqVf5iJaYMB5PQ3mkgG8_E7Q8/view?usp=sharing">ICSE Simple Linear Equations</a>
                            <a target="#" href="https://drive.google.com/file/d/1sXvG-heJyvG38c1WKXALdf0JWFGsRKWT/view?usp=sharing">ICSE Simultaneous Linear Equations 1</a>
                            <a target="#" href="https://drive.google.com/file/d/1XXG7KEccH3XlGdnvlAEzXw89hmKbTJym/view?usp=sharing">ICSE Simultaneous Linear Equations 2</a>
                            <a target="#" href="https://drive.google.com/file/d/1C2eX4rEIjyp3OvNVdbJ36OsuANSwLwRr/view?usp=sharing">ICSE Equations and Inequations</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
