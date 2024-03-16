import icon_teamspeak from '../assets/icon_teamspeak.png';
import icon_hp from '../assets/icon_hp.png';
import icon_unilever from '../assets/icon_unilever.png';
import icon_notion from '../assets/icon_notion.png';

const PartnerComponent = () => {
  return (
    <div>
         <div className="container text-center ">
            <div className="py-5 my-5">
                <h2 className="mx-3 display-6">You’re in good company</h2>
                <p className="mx-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>

                <div className="d-flex justify-content-center px-5 my-5">
                    <img src={icon_teamspeak} className="img-fluid rounded-start mx-3" alt="..." style={{height:70, width:70}} />
                    <img src={icon_hp} className="img-fluid rounded-start mx-3" alt="..." style={{height:70, width:70}} />
                    <img src={icon_unilever} className="img-fluid rounded-start mx-3" alt="..." style={{height:70, width:70}} />
                    <img src={icon_notion} className="img-fluid rounded-start mx-3" alt="..." style={{height:70, width:70}} />
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default PartnerComponent
