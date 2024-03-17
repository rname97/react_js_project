import project_1 from '../assets/project_1.png';
import project_2 from '../assets/project_2.png';
import project_3 from '../assets/project_3.png';

const ProjectsComponent = () => {
  return (
    <div className='m-0' style={{backgroundColor: "#0F172A"}}>
        <div className="container">
            <div className='py-4'>
            <h1 className='text-white'>Recent Projects</h1>
                <div className='text-white'>
                    <div className="card mb-3 " style={{maxWidth: "100%", backgroundColor:"#1E293B"}}>
                        <div className="row g-0 py-4">
                            <div className="col-md-3 ">
                                <img src={project_1} className="img-fluid rounded-start px-4" alt="..." />
                            </div>
                            <div className="col-md-9 text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Project 1    <button className='btn btn-success mx-4'>Web Design</button></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
                                    <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth: "100%", backgroundColor:"#1E293B"}}>
                        <div className="row g-0 py-4">
                            <div className="col-md-3">
                                <img src={project_2} className="img-fluid rounded-start px-4" alt="..." />
                            </div>
                            <div className="col-md-9 text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Project 2 <button className='btn btn-warning mx-4'>Next.js</button></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
                                    <p className="card-text">Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3" style={{maxWidth: "100%", backgroundColor:"#1E293B"}}>
                        <div className="row g-0 py-4">
                            <div className="col-md-3">
                                <img src={project_3} className="img-fluid rounded-start px-4" alt="..." />
                            </div>
                            <div className="col-md-9 text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Project 3 <button className='btn btn-primary mx-4'>Awesome feature</button></h5>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
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

export default ProjectsComponent
