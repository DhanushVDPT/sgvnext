import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Home</title>
            </Head>
            <h1 className="heading">Unit II Question Papers</h1>
            <div className="cardsbox">
                    <Link target="#" href="https://drive.google.com/file/d/1GUK0xIH_Gyape0tz5lYjuAc1Crdfcrm9/view?usp=sharing">
                        <div className="card">
                            <h2>Math I</h2>
                            <Image alt="icon" className="cardimg" src="/algebra.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://drive.google.com/file/d/1TBmfCYjD0CXrV_nlyf5R2WdEBd5O9g7o/view?usp=sharing">
                        <div className="card">
                            <h2>Math II</h2>
                            <Image alt="icon" className="cardimg" src="/geometry.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://drive.google.com/file/d/1BdKAuHZQM9OTulNDErIFIHw43LvFr5_c/view?usp=sharing">
                        <div className="card">
                            <h2>Science I</h2>
                            <Image alt="icon" className="cardimg" src="/science1.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://drive.google.com/file/d/15l0Hyh1IlL8WohEaROZzHzyYIZfDmaY5/view?usp=sharing">
                        <div className="card">
                            <h2>Science II</h2>
                            <Image alt="icon" className="cardimg" src="/biology.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                </div>
        </>
    )
}
