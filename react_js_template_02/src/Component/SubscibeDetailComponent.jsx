

const SubscibeDetailComponent = () => {
  return (
    <div>
        <div className="py-5" style={{backgroundColor: "#0F172A"}}>
            <div className="container">
                <div className="row py-5 text-white d-flex justify-content-center">
                    <div className="col-sm-8">
                        <div className="py-5 text-white">
                            <h1 className="py-5">Subscribe to my Newsletters</h1>
                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</h4>
                            <br />
                            <ul>
                                <li> Lorem ipsum dolor sit amet</li>
                                <li>Lorem ipsum </li>
                                <li>Lorem ipsum dolor sit</li>
                            </ul>

                        </div>
                        <div className="input-group py-5">
                            <input type="text" aria-label="Last name" className="form-control" placeholder="Enter your Email"/>
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscibeDetailComponent
