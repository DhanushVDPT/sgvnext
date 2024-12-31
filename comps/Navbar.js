import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return (
        <nav>
            <div className="sidebar">
                <h2 className="mobiletitle">SGV 9th Grade</h2>
                    <input type="checkbox" id="sidebar-active"></input>
                    <label for="sidebar-active" className="open-sidebar">
                        <Image className="hamburger" src="/icons8-xbox-menu-100.png" width={40} height={40}/>
                    </label>
                    <label id="overlay" for="sidebar-active"></label>
                <nav className="nav-bar">
                    <label for="sidebar-active" className="close-sidebar">
                        <Image className="hamburger" src="/close-icon.svg" width={40} height={40}/>
                    </label>
                    <ul>
                        <li>
                        <Link href="/">Home</Link>
                        </li>
                        <li>
                        <Link target="#" href="https://docs.google.com/document/d/11q9957Te--cAKViEMZMqh_FSGB3wxRLmcb7uawJ-Jc0/edit?usp=sharing">English/SST</Link>
                        </li>
                        <li>
                        <Link href="/notes">Notes</Link>
                        </li>
                        <li>
                        <Link target="#" href="https://docs.google.com/document/d/19COmvU8sWkFJ8HkDNQk2mKFqkHAvKj829Cr4nKtZ3Ls/edit?usp=sharing">Homework</Link>
                        </li>
                        <li>
                        <Link href="/practice">Practice</Link>
                        </li>
                        <li>
                        <Link target="#" href="https://docs.google.com/document/d/1hUVtMP8colMaVbgJOmaxryzKjIiaFUXyEiNWkgRG9Ck/edit?tab=t.0#heading=h.smhguothqycy">Errors</Link>
                        </li>
                        <li>
                        <Link href="/books">Resources</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="navbar">
                <div className="left">
                    <div className="navoptions">
                        <Link href="/">Home</Link>
                    </div>
                </div>
                <div className="right">
                    <div className="navoptions">
                        <Link target="#" href="https://docs.google.com/document/d/11q9957Te--cAKViEMZMqh_FSGB3wxRLmcb7uawJ-Jc0/edit?usp=sharing">English/SST</Link>
                    </div>
                    <div className="navoptions">
                        <Link href="/notes">Notes</Link>
                    </div>
                    <div className="navoptions">
                        <Link target="#" href="https://docs.google.com/document/d/19COmvU8sWkFJ8HkDNQk2mKFqkHAvKj829Cr4nKtZ3Ls/edit?usp=sharing">Homework</Link>
                    </div>
                    <div className="navoptions">
                        <Link href="/practice">Practice</Link>
                    </div>
                    <div className="navoptions">
                        <Link target="#" href="https://docs.google.com/document/d/1hUVtMP8colMaVbgJOmaxryzKjIiaFUXyEiNWkgRG9Ck/edit?tab=t.0#heading=h.smhguothqycy">Errors</Link>
                    </div>
                    <div className="navoptions">
                        <Link href="/books">Resources</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
