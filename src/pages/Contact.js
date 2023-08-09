import HeroSection from "./../components/HeroSection.js"
import {AppContext} from "./../App.js"
import Footer from "./../components/Footer.js"
import ContactCom from "./../components/ContactCom.js"

let template = `
  <>
	<ContactCom/>
	<Footer />
  </>
`;

const Contact = () => {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Contact