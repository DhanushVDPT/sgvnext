import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Science | Notes</title>
            </Head>
            <div className="subject">
                <h1>Science | Notes</h1>
                <ul className="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first"></input>
                        <label for="first"><h2 className="subjecth2">Lecture Notes</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://docs.google.com/document/d/1kz8ywf_sioWIeFU23aY99PdHpWE-9LJINNJyBw1hPqA/edit?usp=sharing">Biotechnology</a>
                            <a target="#" href="https://docs.google.com/document/d/1E4Gvqy3iVc8paiQJ3hIriwm_PcmVR5yElTn7AEdSX-8/edit?usp=sharing">Heredity and Variation</a>
                            <a target="#" href="https://drive.google.com/file/d/1IGN4H9DAluH4kIFqpJc8Io_4sA8eRKmf/view?usp=sharing">Reflection of Light</a>
                            <a target="#" href="https://docs.google.com/document/d/1f464V1AyH-uxSncxDu3pgJap6Q64xeskbUrBgNnZ-ww/edit?usp=sharing">Carbon: An Important Element</a>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="accordion" id="second"></input>
                        <label for="second"><h2 className="subjecth2">Questions & Answers</h2></label>
                        <div className="lists accordioncontent">
                            <a target="#" href="https://drive.google.com/file/d/1CQgEKbBK7ib-yCOPQt5-wrV0-gk574gT/view?usp=sharing">Reflection of Light</a>
                            <a target="#" href="https://drive.google.com/file/d/1_z2yKQX7yfK7ORHIMmcQi11pUHgoBfjz/view?usp=sharing">Observing Space: Telescopes</a>
                            <a target="#" href="https://drive.google.com/file/d/1p4Y90zokE8aygHo_-tGEBrYDAamxWRm-/view?usp=sharing">Life Processes</a>
                            <a target="#" href="https://drive.google.com/file/d/1wojbIqts8odmKy4OuCbV0LePKAz02q_r/view?usp=sharing">Carbon: An Important Element</a>
                            <a target="#" href="https://drive.google.com/file/d/13NUsITx7JyKboRjWEM02Nms9o9gSSk8t/view?usp=sharing">Work and Energy</a>
                            <a target="#" href="https://drive.google.com/file/d/1Dfe3oRdCwkOUFdhQGVn0VdSGsgzPVHkd/view?usp=sharing">Current Electricity</a>
                            <a target="#" href="https://drive.google.com/file/d/1DrX73WWu6rVrOEkspJnROWdrL3jfhmGM/view?usp=sharing">Measurement of Matter</a>
                            <a target="#" href="https://drive.google.com/file/d/1K8IP8DrwnvfkB-DJQnsjuruKQHwkORWb/view?usp=sharing">Acids Bases Salts</a>
                            <a target="#" href="https://drive.google.com/file/d/1fe3AfNItNikjHfd3csIPJ60yy0q0-nZJ/view?usp=sharing">Laws Of Motion</a>
                            <a target="#" href="https://drive.google.com/file/d/1EDKAV5PJnKLFut15U1o5HpAFZgUGgseO/view?usp=sharing">Information Communication Technology</a>
                            <a target="#" href="https://drive.google.com/file/d/1v-gr7oUDv2nzntQwdAS6y9F9KAC9ObFy/view?usp=sharing">Energy Flow In An Ecosystem</a>
                            <a target="#" href="https://drive.google.com/file/d/1JnoXoNk3coxr_DwinoeMLpHuvGxm9ofJ/view?usp=sharing">Useful And Harmful Microbes</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
