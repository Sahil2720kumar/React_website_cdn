import App from "./App.js";

// Obtain the root 
const rootElement = document.getElementById('root')


let template=`
	<App/>
`

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
  eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code),
  rootElement
)