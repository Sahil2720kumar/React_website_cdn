import { Button } from "./../styles/GlobalStyle.js"

let template = `
  <>
  	<Wrapper>
		<span onClick={scrollTopEvent} className="icon_container">
			<i className="bi bi-arrow-up" ></i>
		</span>
	</Wrapper>
  </>
`;

const ScrollTop = () => {
	const scrollTopEvent=()=>{
	    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	}

	const Wrapper=styled.div`
		position:fixed;
		bottom:10px;
		right:10px;		
		color:white;
		
		.icon_container{
			background-color: ${({ theme }) => theme.colors.btn};
			padding:1rem 1.5rem;
			border-radius:50%;
			display:flex;
			justify-content:center;
			align-items: center;
			transition:all linear 0.5s;
			i{
				color:white;
				font-weight:bolder;
				font-size:2rem;
				&:hover{
					color:${({ theme }) => theme.colors.bg};
				}
			}
			
			&:hover{
				box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
				box-shadow: ${({ theme }) => theme.colors.shadowSupport};
				transform: scale(0.96);
				color:black;
			}
		}
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default ScrollTop