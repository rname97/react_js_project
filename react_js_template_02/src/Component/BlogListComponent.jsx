import blog_1 from '../assets/blog_1.png';
import blog_2 from '../assets/blog_2.png';
import blog_3 from '../assets/blog_3.png';
import blog_4 from '../assets/blog_4.png';
import blog_5 from '../assets/blog_5.png';
import blog_6 from '../assets/blog_6.png';

const BlogListComponent = () => {
  return (
    <div style={{backgroundColor: "#0F172A"}}>
        <div className="container">
            <div className="text-center text-white py-5">
                <h1>Posts Examples</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
            </div>
            <div className="py-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 border-0" style={{backgroundColor:"#1E293B"}}>
                            <img src={blog_1} className="card-img-top" alt="..."/>
                            <div className="card-body text-white text-center">
                                <h5 className="card-title">Lorem ipsum dolor </h5>
                                <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                            <div className="card-footer text-center">
                                <small className="text-white ">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{backgroundColor:"#1E293B"}}>
                        <img src={blog_2} className="card-img-top" alt="..."/>
                        <div className="card-body text-white text-center">
                                <h5 className="card-title">Lorem ipsum dolor </h5>
                                <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                            <div className="card-footer text-center">
                                <small className="text-white ">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{backgroundColor:"#1E293B"}}>
                        <img src={blog_3} className="card-img-top" alt="..."/>
                        <div className="card-body text-white text-center">
                                <h5 className="card-title">Lorem ipsum dolor </h5>
                                <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                            <div className="card-footer text-center">
                                <small className="text-white ">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{backgroundColor:"#1E293B"}}>
                        <img src={blog_4} className="card-img-top" alt="..."/>
                        <div className="card-body text-white text-center">
                                <h5 className="card-title">Lorem ipsum dolor </h5>
                                <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                            <div className="card-footer text-center">
                                <small className="text-white ">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{backgroundColor:"#1E293B"}}>
                        <img src={blog_5} className="card-img-top" alt="..."/>
                        <div className="card-body text-white text-center">
                                <h5 className="card-title">Lorem ipsum dolor </h5>
                                <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                            <div className="card-footer text-center">
                                <small className="text-white ">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 border-0" style={{backgroundColor:"#1E293B"}}>
                        <img src={blog_6} className="card-img-top" alt="..."/>
                        <div className="card-body text-white text-center">
                                <h5 className="card-title">Lorem ipsum dolor </h5>
                                <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                            </div>
                            <div className="card-footer text-center">
                                <small className="text-white ">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            

        </div>
        
    </div>
  )
}

export default BlogListComponent
