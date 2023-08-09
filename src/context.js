const {useContext,createContext}=React

const AppContext=createContext({name:"hello"})

let template=`
	<AppProvider.Provider value={{data}}>
		{children}
	</AppProvider.Provider>
`

const AppProvider=({ children })=>{
	const data={
		name:"sahil"
	}
	console.log(children)
	console.log(data)
	return eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
}

export {AppProvider,AppContext}