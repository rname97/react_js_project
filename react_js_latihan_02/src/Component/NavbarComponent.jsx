import Logo from '../assets/Logo.png';

const NavbarComponent = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src={Logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/"><strong>Home</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/blog"><strong>Blog</strong></a>
                        </li>		
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/newsletter"><strong>NewsLetter</strong></a>
                        </li>
                </ul>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default NavbarComponent
