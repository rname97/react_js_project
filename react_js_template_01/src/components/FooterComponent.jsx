import Logo from '../assets/Logo.png';

const FooterComponent = () => {
  return (
    <div>
        <div>
            <div className="container">
                <div className="py-5">
                    <div className='d-flex justify-content-around py-4'>
                        <p className="">Mobile app</p>          
                        <p className="">Community</p>     
                        <p className="">Company</p>     
                        <a className="navbar-brand" href="/"><img src={Logo} alt="" /></a>  
                        <p className="">Help desk</p>     
                        <p className="">Blog</p>     
                        <p className="">Resources</p>  
                    </div>   
                    <hr />

                    <div className='text-center py-5 my-5'>
                        <p>© R ARDAN, Inc. 2024</p>    
                    </div>      
                </div>
            </div>
        </div>
         
    </div>
  )
}

export default FooterComponent
