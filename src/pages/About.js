import HeroSection from "./../components/HeroSection.js"
import {AppContext} from "./../App.js"
import Footer from "./../components/Footer.js"


let template = `
  <>
	<HeroSection  />
	<Footer />
  </>
`;

const About = () => {
	const {name,image,updateHomePage,updateAboutPage}=React.useContext(AppContext)

	React.useEffect(()=>{
		updateAboutPage()
	},[])
	
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default About