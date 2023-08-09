import Card from "./Card.js"
import { servicesArr } from "./../data/servicesArr.js"

let template = `
  <>
  	<Wrapper>
  		<h2>services section</h2>
  		<hr/>
  		<div className="cards_container">
			{servicesArr.map((curElement,index)=>{
				return <Card key={index} name={curElement.name} desc={curElement.description} iconClass={curElement.iconClass}  />
			})}
		</div>
	</Wrapper>
  </>
`;

const Cards = () => {
	const Wrapper=styled.section`
		width:100%;
		text-align:center;
		display:flex;
		flex-direction: column;
		justify-content:center;
		padding:2rem 3rem;
		align-items: center;
		h2{
			font-size:3rem;
		}
		hr{
			width:100px;
			background:rgba(98, 84, 243);
			outline:none;
			height:3px;
			border:2px solid rgba(98, 84, 243, 0.5);
		}
		
		.cards_container{
			height:80%;
			width:100%;
			max-width:100rem;
			background: none;
			width:90%;
			display:flex;
			align-items: center;
			justify-content: center;
			flex-wrap:wrap;
			
		}
		
	`
	
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Cards