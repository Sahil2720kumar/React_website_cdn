//styles
import { Button } from "./../styles/GlobalStyle.js"
import {AppContext} from "./../App.js"

const {NavLink}=ReactRouterDOM


let template = `
  <>
	<Wrapper>
	  <div className="container">
	  	<div className="section-hero-data" >
	  	  <p className="hero-top-data">THIS IS ME</p>
	  	  <h1 className="hero-heading">{name}</h1>
	  	  <p className="hero-para">
		  	  I'm {name} A Full stack Developer, youtuber and freelancer. A Full
		  	  stack Developer, youtuber and freelancer.
	  	  </p>
		  <Button className="btn" >Hire Me</Button>
	  	</div>
		<figure className="section-img_container">
			<img src={image} />
		</figure>
	  </div>
    </Wrapper>
  </>
`;

const HeroSection = (props) => {
	const {name,image}=React.useContext(AppContext)
	const Wrapper=styled.section`
		width:100%;
		display:flex;
		align-items:center;
		justify-content:center;
		padding: 5rem 0;
		.container{
			width:90%;
			max-width:100rem;
			height:90%;
			display:flex;
			align-items:center;
			justify-content: center;
			.section-hero-data{
				width:50%;
				height:100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.hero-top-data {
					text-transform: uppercase;
					font-weight: 500;
					font-size:1.5rem;
				}
				.hero-heading {
					text-transform: uppercase;
					font-size:4.5rem;
				}
				
				.hero-para {
					margin-top: 0.5rem;
					max-width: 60rem;
					font-size:1.6rem;
				}
				.btn{
					width:12rem;
					height:3rem;
					display:flex;
					align-items: center;
					justify-content: center;
					font-size:1.5rem;
				}
			}
			
			.section-img_container{
				width:50%;
				overflow:hidden;
				display: flex;
				justify-content: center;
				align-items: center;
				padding:10px;
				img{
					max-height:400px;
					width:100%;
				}
			}
		}
		
		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			.container{
				flex-direction:column;

				
				.section-hero-data{
					width:100%;
				}
				
				.section-img_container{
					margin-top:4rem;
					width:100%;
				}
				
				.
			}
		}
	`
	
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default HeroSection