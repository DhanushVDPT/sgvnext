import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Previous Years'</title>
            </Head>
            <div className="cardsbox">
                <Link target="_blank" href="https://docs.google.com/spreadsheets/d/1qpTTqhT5XkvE87VVQf2lHZwnaFg98c0exjhEA5mw5EA/edit?usp=sharing">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/trend.png" width={512} height={512}></Image>
                        <h2>Trends</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/engprev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/english.png" width={512} height={512}></Image>
                        <h2>English</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/hindiprev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/hindi.png" width={512} height={512}></Image>
                        <h2>Hindi</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/marathiprev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/marathi.png" width={512} height={512}></Image>
                        <h2>Marathi</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/algebraprev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/algebra.png" width={512} height={512}></Image>
                        <h2>Algebra</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/geometryprev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/geometry.png" width={512} height={512}></Image>
                        <h2>Geometry</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/science1prev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/science1.png" width={512} height={512}></Image>
                        <h2>Science I</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/science2prev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/biology.png" width={512} height={512}></Image>
                        <h2>Science II</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/histprev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/axis.png" width={512} height={512}></Image>
                        <h2>History & Civics</h2>
                    </div>
                </Link>
                <Link target="_blank" href="/geoprev">
                    <div className="card">
                        <Image alt="icon" className="cardimg" src="/geography.png" width={512} height={512}></Image>
                        <h2>Geography</h2>
                    </div>
                </Link>
            </div>
        </>
    )
}
