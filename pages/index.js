import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Home</title>
            </Head>
            <div className="cardsbox">
                    <Link target="_blank" href="/previousyear">
                        <div className="card">
                            <h2>Previous Years' Board Papers</h2>
                        </div>
                    </Link>
                    <Link target="_blank" href="/21set">
                        <div className="card">
                            <h2>21 Set</h2>
                        </div>
                    </Link>
                    <Link target="_blank" href="/mission35">
                        <div className="card">
                            <h2>Mission 35</h2>
                        </div>
                    </Link>
                    <Link target="_blank" href="https://docs.google.com/document/d/1jsMmbgw3weDcbsF_GsZYiZ-J4P5sS0Y1P7fR3xNWkBk/edit?tab=t.0">
                        <div className="card">
                            <h2>Diwali Homework</h2>
                        </div>
                    </Link>
            </div>
        </>
    )
}
