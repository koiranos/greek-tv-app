import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">Greek Tv </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <Link href=""><a className="nav-link">|</a></Link>
                    <li className="nav-item active">
                        <Link href="/"><a className="nav-link">Home <span className="sr-only">(current)</span></a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="about"><a className="nav-link">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href=""><a className="nav-link">|</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/ch1'><a className="nav-link">Ant1</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/ch2'><a className="nav-link">Alpha</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/ch3'><a className="nav-link">Mega</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/ch4'><a className="nav-link">Star</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/ch5'><a className="nav-link">Skai</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/ch6'><a className="nav-link">Ert1</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/ch7'><a className="nav-link">Ert2</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/ch8'><a className="nav-link">Ert Sports</a></Link>
                    </li>
                        <Link href=""><a className="nav-link">|</a></Link>
                    <li className="nav-item">
                        <Link href='/Channels'><a className="nav-link">Channels</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;