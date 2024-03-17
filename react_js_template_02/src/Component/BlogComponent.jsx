import blog_1 from '../assets/blog_1.png';
import blog_2 from '../assets/blog_2.png';
import blog_3 from '../assets/blog_3.png';
import right from '../assets/right.png';

const BlogComponent = () => {
  return (
    <div className='m-0' style={{backgroundColor: "#0F172A"}}>
        <div className="container">
            <div className="text-white">
                <div className='row'>
                    <div className='col-sm-6'><h1>Lates Post</h1></div>
                    <div className='col-sm-6 text-end'><a href="/blog" className='text-white' style={{textDecoration: "none"}}><p>View all Posts <img src={right} alt="" /> </p></a> </div>

                </div>
                <div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100 border-0" style={{backgroundColor:"#1E293B"}}>
                                <img src={blog_1} className="card-img-top" alt="..."/>
                                <div className="card-body text-white text-center">
                                    <h5 className="card-title">Lorem ipsum dolor </h5>
                                    <p className="card-text"><small>April 24, 2022 - 5 min read</small></p>
                                    <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100" style={{backgroundColor:"#1E293B"}}>
                                <img src={blog_2}  className="card-img-top" alt="..."/>
                                <div className="card-body text-white text-center">
                                    <h5 className="card-title">Lorem ipsum dolor </h5>
                                    <p className="card-text"><small>April 24, 2022 - 5 min read</small></p>
                                    <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100" style={{backgroundColor:"#1E293B"}}>
                                <img src={blog_3}  className="card-img-top" alt="..."/>
                                <div className="card-body text-white text-center">
                                    <h5 className="card-title">Lorem ipsum dolor </h5>
                                    <p className="card-text"><small>April 24, 2022 - 5 min read</small></p>
                                    <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default BlogComponent
