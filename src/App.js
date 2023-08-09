import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Service from "./pages/Service.js"
import Contact from "./pages/Contact.js"
import Error from "./pages/Error.js"
const {BrowserRouter,HashRouter,Switch,Route}=ReactRouterDOM
//components
import Navbar from "./components/Navbar.js"
import {reducer} from "./reducer.js"
//styles
import {GlobalStyle} from "./styles/GlobalStyle.js"
const {ThemeProvider}=styled



//=================== Context API =================
const AppContext=React.createContext()

//=================== Context API =================

let template = `
  <>
  <ThemeProvider theme={theme}>
   <AppContext.Provider value={{...state,updateHomePage,updateAboutPage}}>
	<HashRouter>
	  <GlobalStyle/>
	  <Navbar/>
	  <Switch>
	  	<Route exact path="/" component={Home} />
	  	<Route exact path="/about" component={About} />
	  	<Route exact path="/service" component={Service} />
	  	<Route exact path="/contact" component={Contact} />
	  	<Route component={Error} />
	  </Switch>
	</HashRouter>
   </AppContext.Provider>
  </ThemeProvider>
  </>
`;




const App = () => {
	const theme = {
	  colors: {
	    heading: "rgb(24 24 29)",
	    text: "rgb(24 24 29)",
	    white: "#fff",
	    black: " #212529",
	    helper: "#8490ff",
	    bg: "rgb(249 249 255)",
	    footer_bg: "#0a1435",
	    btn: "rgb(98 84 243)",
	    iconColor: "rgba(98,84,243,0.5)",
	    border: "rgba(98, 84, 243, 0.5)",
	    hr: "#ffffff",
	    gradient:
	      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
	    shadow:
	      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
	    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
	  },
	  media: { mobile: "768px", tab: "998px" },
	};
	
	const initial_value={
		name:"",
		image:"",
	}
	const [state, dispatch]=React.useReducer(reducer, initial_value)
	
	const updateHomePage=()=>{
		return dispatch({
			type:"HOME_UPDATE",
			payload:{
				name:"Sahil Kumar",
				image:"images/hero.svg"
			}
		})
	}
	
	const updateAboutPage=()=>{
		return dispatch({
			type:"ABOUT_UPDATE",
			payload:{
				name:"Sahil Sah",
				image:"images/about1.svg"
			}
		})
	}


    return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code);
};
 


export default App
export {AppContext}