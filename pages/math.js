import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Math</title>
            </Head>
            <div className="subject">
                <h1>Mathematics</h1>
                
                <div className="cardsbox">
                    <Link href="/mathnotes">
                        <div className="card">
                            <h2>Notes</h2>
                            <Image alt="icon" className="cardimg" src="/notes.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link href="/mathbooks">
                        <div className="card">
                            <h2>Reference Books</h2>
                            <Image alt="icon" className="cardimg" src="/information.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link href="/mathpractice">
                        <div className="card">
                            <h2>Practice</h2>
                            <Image alt="icon" className="cardimg" src="/practice.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link href="/mathmodelpapers">
                        <div className="card">
                            <h2>Model Papers</h2>
                            <Image alt="icon" className="cardimg" src="/exam.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
