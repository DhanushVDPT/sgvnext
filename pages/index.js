import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 10th | Home</title>
            </Head>
            {/* <h1 className="heading">Days Left For Board Exam</h1>
            <div className="launch-time">
                <div>
                    <p>00</p>
                    <span>Days</span>
                </div>
                <div>
                    <p>00</p>
                    <span>Hours</span>
                </div>
                <div>
                    <p>00</p>
                    <span>Minutes</span>
                </div>
                <div>
                    <p>00</p>
                    <span>Seconds</span>
                </div>
            </div> */}
            <div className="cardsbox">
                    <Link target="#" href="https://docs.google.com/document/d/1SOwEs_peG82KuqmWuSOxp6jvTKgmH3W_E9ehjhwMENM/edit?usp=sharing">
                        <div className="card">
                            <h2>Homework 2025-26</h2>
                        </div>
                    </Link>
                    <Link target="#" href="https://drive.google.com/drive/folders/19X6wqCJYVMeKimWJyhrJkmrmXyG54l12?usp=drive_link">
                        <div className="card">
                            <h2>Previous Years' Board Papers</h2>
                        </div>
                    </Link>
                    <Link href="/21set">
                        <div className="card">
                            <h2>21 Set</h2>
                        </div>
                    </Link>
                    <Link href="/mission35">
                        <div className="card">
                            <h2>Mission 35</h2>
                        </div>
                    </Link>
            </div>
        </>
    )
}
