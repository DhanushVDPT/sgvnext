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
                    <Link target="#" href="https://docs.google.com/spreadsheets/d/1Fb0ugQukttfpNGN_EwT55_Nrjtj2RmyB-LKg3JFrIDo/edit?usp=sharing">
                        <div className="card">
                            <h2>Board Question Paper's History</h2>
                        </div>
                    </Link>
            </div>
        </>
    )
}
