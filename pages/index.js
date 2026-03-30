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
                    <Link target="_blank" href="https://docs.google.com/document/d/1LhsiN-GPnQ5SMhV3CGNZd_EYZ6MTKtNJ4erepQwSXl0/edit?usp=sharing">
                        <div className="card">
                            <h2>Diwali Homework</h2>
                        </div>
                    </Link>
            </div>
        </>
    )
}
