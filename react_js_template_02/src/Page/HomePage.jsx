import BlogComponent from "../Component/BlogComponent"
import FooterComponent from "../Component/FooterComponent"
import JumbotronComponent from "../Component/JumbotronComponent"
import NavbarComponent from "../Component/NavbarComponent"
import ProjectsComponent from "../Component/ProjectsComponent"
import SubsicribeCOmponent from "../Component/SubsicribeCOmponent"




const HomePage = () => {
  return (
    <div>
        <NavbarComponent />
        <JumbotronComponent />
        <ProjectsComponent />
        <BlogComponent />
        <SubsicribeCOmponent />
        <FooterComponent />
        
        
    </div>
  )
}

export default HomePage
