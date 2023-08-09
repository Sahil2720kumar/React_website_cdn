import Cards from "./../components/Cards.js"
import { Button } from "./../styles/GlobalStyle.js"
const { NavLink }=ReactRouterDOM
let template = `
  <>
	<Wrapper>
		<figure>
			<img src="images/error.svg" />
		</figure>
		<Button className="btn">
		   <NavLink to="/">GO BACK</NavLink>
		</Button>
	</Wrapper>
  </>
`;

const Error = () => {
	const Wrapper=styled.section`
		padding:0.5rem;
		display:flex;
		align-items:center;
		justify-content:center;
		flex-direction: column;

		figure{
			margin-top:0.9rem;
			overflow: hidden;
			width:100%;
			img{
				width:100%;
			}
		}
		
		.btn{
			margin-top:20px;
			width:15rem;
			height:5rem;
			display:flex;
			align-items: center;
			justify-content: center;
			font-size:1.5rem;
		}
		
		
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Error