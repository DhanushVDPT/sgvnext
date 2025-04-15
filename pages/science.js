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
                <h1>Science</h1>
                <div className="cardsbox">
                    <Link href="/sciencenotes">
                        <div className="card">
                            <h2>Notes</h2>
                            <Image alt="icon" className="cardimg" src="/notes.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link href="/sciencebooks">
                        <div className="card">
                            <h2>Reference Books</h2>
                            <Image alt="icon" className="cardimg" src="/information.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link href="/sciencepractice">
                        <div className="card">
                            <h2>Practice</h2>
                            <Image alt="icon" className="cardimg" src="/practice.png" width={512} height={512}></Image>
                        </div>
                    </Link>
                    <Link href="/sciencemodelpapers">
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
