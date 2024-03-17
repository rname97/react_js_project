import jumbotron_image from '../assets/WesternMan.png';
import Twitter from '../assets/Twitter.png';
import facebook from '../assets/facebook.png';
import Youtube from '../assets/Youtube.png';
import linkedin from '../assets/linkedin.png';

const JumbotronComponent = () => {
  return (
    <div style={{backgroundColor: "#0F172A"}}>
        <div className="container">
                <div className="row">
                    <div className="col-sm-7 text-white mt-5 pt-5">
                        <h1>Hi there, I’m R Ardan</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                        <div className='row'>
                        <div className="col-sm-12">
                            <div className='row'>
                                <div className='col-sm-2'>
                                    <img src={Twitter} alt="" style={{height:150, width:150}}/>
                                </div>
                                <div className='col-sm-2'>
                                    <img src={facebook} alt="" style={{height:150, width:150}}/>
                                </div>
                                <div className='col-sm-2'>
                                    <img src={Youtube} alt="" style={{height:150, width:150}}/>
                                </div>
                                <div className='col-sm-2'>
                                    <img src={linkedin} alt="" style={{height:150, width:150}}/>
                                </div>
                            </div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-sm-5 text-end">
                        <img src={jumbotron_image} alt="" />
                    </div>
            </div>
        </div>
    </div>
  )
}

export default JumbotronComponent
