import Logo from '../assets/Logo.png';

const NavbarComponent = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
                <a className="navbar-brand" href="/"><img src={Logo} alt="" style={{height:20}} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Feature</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/about">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/contact">Community</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/blog">Support</a>
                </li>
            </ul>
            <a className="btn btn-outline-primary btn-sm mx-2" aria-current="page" href="/login">Login</a>
            <a className="btn btn-primary btn-sm" aria-current="page" href="/login">Register</a>
            
            </div>
        </div>
        </nav>
      
    </div>
  )
}

export default NavbarComponent
