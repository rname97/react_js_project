import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';

const FeatureComponent = () => {
  return (
    <div>
        
        <div className='py-5 my-5'>
            <div className="container">
                <div className="card mb-3 my-2 border-0" style={{maxWidth: "100%"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <div className="card-body text-end">
                                <h5 className="card-title">Sed ut perspiciatis unde omnis</h5>
                                <p className="card-text align-middle">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,  sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.</p>
                                <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:"#F5F5F5"}}>
                <div className="container">
                    <div className="card mb-3 my-5 border-0" style={{maxWidth: "100%", backgroundColor:"#F5F5F5"}} >
                        <div className="row g-0">
                            <div className="col-md-8 d-flex align-items-center">
                            <div className="card-body ">
                                    <h5 className="card-title">Sed ut perspiciatis unde omnis</h5>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi  nesciunt. Neque porro quisquam est, qui dolorem.</p>
                                    <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={img2} className="img-fluid rounded-start" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureComponent
