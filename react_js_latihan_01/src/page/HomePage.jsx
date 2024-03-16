import ContactComponent from "../components/ContactComponent"
import FeatureComponent from "../components/FeatureComponent"
import FooterComponent from "../components/FooterComponent"
import JumbotronComponent from "../components/JumbotronComponent"
import NavbarComponent from "../components/NavbarComponent"
import PartnerComponent from "../components/PartnerComponent"
import ServiceComponent from "../components/ServiceComponent"


const HomePage = () => {
  return (
    <div>
        <NavbarComponent />
        <JumbotronComponent />
        <ServiceComponent />
        <FeatureComponent />
        <PartnerComponent />
        <ContactComponent />
        <FooterComponent />
      
    </div>
  )
}

export default HomePage
