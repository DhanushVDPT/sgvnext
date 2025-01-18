import Head from "next/head"

export default function Page() {
    return (
        <>
            <Head>
                <title>SGV 9th | Home</title>
            </Head>
            <div className="ut2table">
                <h1>Unit Test II Timetable</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Time</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>20/01/2025</td>
                            <td>Monday</td>
                            <td>07:20 am to 08:20 am</td>
                            <td>Geometry</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h1>WELCOME</h1>
                <h2>This page is created to serve as a common place for all necessary academic resources.</h2>
                <h2>Do check out the notes and additional resources sections for now, everything else is a work in progress</h2>
            </div>
        </>
    )
}
