import icon_github from '../assets/icon_github.png';
import icon_fb from '../assets/icon_fb.png';
import icon_twiter from '../assets/icon_twiter.png';
import icon_linked from '../assets/icon_linked.png';

const FooterComponent = () => {
  return (
    <div style={{backgroundColor: "#0F172A"}}>
        <div className="container">
           
            <div className="row py-5 text-white">
            <hr />
                <div className="col-sm-6">© Copyright 2022 by R Ardan blog</div>
                <div className="col-sm-6 text-end">
                    <img src={icon_github} alt="" style={{height:25, width:25}} className='mx-2'/>
                    <img src={icon_fb} alt="" style={{height:30, width:30}} className='mx-2'/>
                    <img src={icon_twiter} alt="" style={{height:30, width:30}} className='mx-2'/>
                    <img src={icon_linked} alt="" style={{height:30, width:30}} className='mx-2'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterComponent
