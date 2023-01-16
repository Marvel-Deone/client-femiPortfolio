import { Link } from "react-router-dom"

const TailNav = () => {
    return (
        <header className="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 p-0">
                        <nav className="navbar navbar-expand-lg justify-content-between navbar-light" id="my-nav1" style={{ paddingLeft: '70px' }}>
                            <Link className="navbar-brand" to="/">
                                <img src="assets/images/gcf2.png" alt="" width={150} />
                            </Link>
                            <div id="mainmenu">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">
                                            <img src="/assets/icon/home.png" alt="HomeIcon" className="w-7 h-7" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <nav className="navbar navbar-expand-lg justify-content-between navbar-light" id="my-nav">
                            <Link className="navbar-brand" to="/">
                                <img src="assets/images/gcf2.png" alt="" width={150} />
                            </Link>
                            <div id="mainmenu">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/">
                                            <img src="/assets/icon/home.png" alt="HomeIcon" className="w-7 h-7" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TailNav