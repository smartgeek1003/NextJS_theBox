import Achievement from "../components/home/achievement";
import Service from "../components/home/service";
import AboutUs from "../components/home/aboutUs";
import Header from "../components/home/header";
import Support from './../components/home/support';
import Experience from './../components/home/experience';
import AfterExperience from './../components/home/afterExperience';
import Projects from './../components/home/projects';
import Footer from './../components/home/footer';
export default function IndexPage() {
  return (
    <>
      <Header/>
      <Achievement/>
      <AboutUs/>
      <Service/>
      <Experience/>
      <AfterExperience/>
      <Projects/>
      <Support/>
      <Footer/>
    </>
  )
}
