import Cards from "./../components/Cards.js"
import {AppContext} from "./../App.js"
import Footer from "./../components/Footer.js"


let template = `
  <>
	<Cards/>
	<Footer />
  </>
`;

const Service = () => {
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Service