import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Home</title>
            </Head>
            <h1 className="heading">Unit II Answer Keys</h1>
            <div className="cardsbox">
                    <Link target="#" href="https://drive.google.com/file/d/1vzLmNU5xKquLNpztRes4lYiVqQtE7N25/view?usp=sharing">
                        <div className="card">
                            <h2>Math I</h2>
                            <Image alt="icon" className="cardimg" src="/algebra.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://drive.google.com/file/d/110CrQ4B9lYEMJD0TyRGRVLLZSe9apXtN/view?usp=sharing">
                        <div className="card">
                            <h2>Math II</h2>
                            <Image alt="icon" className="cardimg" src="/geometry.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://drive.google.com/file/d/1FK07gkZcZg5sphSyobeSzu1K9RkelPtV/view?usp=sharing">
                        <div className="card">
                            <h2>Science I</h2>
                            <Image alt="icon" className="cardimg" src="/science1.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://drive.google.com/file/d/17FpiWTPRd5W_-6kOR8Iznutvo8OpRDqV/view?usp=sharing">
                        <div className="card">
                            <h2>Science II</h2>
                            <Image alt="icon" className="cardimg" src="/biology.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://drive.google.com/file/d/142tdfEzkrEPDhc8XmaaCCdZ2vjnEjvj0/view?usp=sharing">
                        <div className="card">
                            <h2>History</h2>
                            <Image alt="icon" className="cardimg" src="/axis.png" width={512} height={512}></Image>
                        </div>
                    </Link>
            </div>
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
                    <Link target="#" href="https://docs.google.com/document/d/10KEKf9uWVkzHIvY4OVxbw0vkEAPbxn5ECoPEiJVyzp4/edit?usp=sharing">
                        <div className="card">
                            <h2>English</h2>
                            <Image alt="icon" className="cardimg" src="/eng.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://docs.google.com/document/d/1dresyusKzuqfO8wzNvPEr_eySjtba9S_/edit?usp=sharing&ouid=103475778307044104461&rtpof=true&sd=true">
                        <div className="card">
                            <h2>History</h2>
                            <Image alt="icon" className="cardimg" src="/axis.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link target="#" href="https://docs.google.com/document/d/1IwqQhWxjjv6ElE1L_cs9bfL0xCqUYN4b/edit?usp=sharing&ouid=103475778307044104461&rtpof=true&sd=true">
                        <div className="card">
                            <h2>Geography</h2>
                            <Image alt="icon" className="cardimg" src="/geography.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                </div>
        </>
    )
}
