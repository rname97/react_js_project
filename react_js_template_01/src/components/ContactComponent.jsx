
const ContactComponent = () => {
  return (
    <div>
        <div style={{backgroundColor:"#F5F5F5"}}>
            <div className="container py-5" >
                <div className="">
                    <div className="card border-0" style={{maxWidth: "100%", backgroundColor:"#F5F5F5"}}>
                        <div className="row g-0">
                            <div className="col-md-8">
                                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h4>
                            </div>
                            <div className="col-md-4">
                                <a className="btn btn-primary px-5" aria-current="page" href="/login">Contact Us</a>
                                <a className="btn btn-outline-primary mx-2 px-5" aria-current="page" href="/login">Join Today</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactComponent
