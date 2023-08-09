
let template = `
  <>
	<Wrapper>
		<figure>
			<i class={props.iconClass}  ></i>
		</figure>
		<h3>{props.name}</h3>
		<p>{props.desc}</p>
	</Wrapper>
  </>
`;

const Card = (props) => {
	const Wrapper=styled.div`
		margin:15px 15px;
		height:34rem;
		width:20rem;
	    border: 0.1rem solid rgb(170 170 170 / 40%);
		border-radius:20px;
		overflow: hidden;
		padding:5px 7px;
		transition:all linear 0.5s;
		figure{
			width:100%;
			height:40%;
			display:flex;
			align-items:center;
			justify-content:center;
			
			i{
				padding:15px 25px;
				border-radius:50%;
				background:${({ theme }) => theme.colors.iconColor};
				font-size:3.5rem;
				transition:all linear 0.5s;
			}
		}
		h3{
			font-size:2.2rem;
		}
		
		p{
			font-size:1.3rem;
		}
		
		&:hover{
			background:${({ theme }) => theme.colors.iconColor};
			figure{
				i{
					background:${({ theme }) => theme.colors.white};
				}
			}
		}
		
		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			
		}

	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Card