import BlogListComponent from "../Component/BlogListComponent"
import FooterComponent from "../Component/FooterComponent"
import NavbarComponent from "../Component/NavbarComponent"
import SubsicribeCOmponent from "../Component/SubsicribeCOmponent"

const BlogPage = () => {
  return (
    <div>
        <NavbarComponent />
        <BlogListComponent />
        <SubsicribeCOmponent />
        <FooterComponent />
      
    </div>
  )
}

export default BlogPage
