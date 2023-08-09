import HeroSection from "./../components/HeroSection.js"
import {AppContext} from "./../App.js"
import Cards from "./../components/Cards.js"
import ContactCom from "./../components/ContactCom.js"
import Footer from "./../components/Footer.js"
import ScrollTop from "./../components/ScrollTop.js"

let template = `
  <>
	<HeroSection  />
	<Cards/>
	<ContactCom/>
	<Footer />
	<ScrollTop />
  </>
`;

const Home = () => {
	const {name,image,updateHomePage,updateAboutPage}=React.useContext(AppContext)

	React.useEffect(()=>{
		updateHomePage()
	},[])

    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Home