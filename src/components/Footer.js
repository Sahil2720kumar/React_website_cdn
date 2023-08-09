import { Button } from "./../styles/GlobalStyle.js"
const {NavLink} = ReactRouterDOM

let template = `
  <>
	<Wrapper>
		<div className="contact-short">
			<div className="content-short--heading">
				<h3>Ready to get started?</h3>
				<h3>Talk to us today</h3>
			</div>
			<div className="contact-short-btn">
				<NavLink to="/">
					<Button className="btn">Get Started</Button>
				</NavLink>
			</div>
		</div>
		
		<footer className="footer_container">
			<div className="main-container">
				<div className="footer-about">
					<h3>Footer About</h3>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
				</div>
				
				{/* 2nd column */}
				<div className="footer-subscribe">
				  <h3>Subscribe to get important updates</h3>
				  <form action="#">
				    <input
				      type="email"
				      required
				      autoComplete="off"
				      placeholder="Email"
				    />
					<Button className="btn">Subscribe</Button>
				  </form>
				</div>
				
				{/* 3rd column */}
				<div className="footer-social">
				  <h3>Follows Us</h3>
				  <div className="footer-social--icons">
				    <div className="icons">
						<i class="bi bi-discord"></i>
				    </div>
				    <div className="icons">
						<i class="bi bi-instagram"></i>
				    </div>
				    <div className="icons">
						<i class="bi bi-youtube"></i>
				    </div>
				  </div>
				</div>
				
				{/* 4th column  */}
				<div className="footer-contact">
				  <h3>Call Us</h3>
				  <h3>+91 12345678978</h3>
				</div>
			</div>		
				
			{/* bottom section  */}
			<div className="footer-bottom--section">
			  <hr />
			  <div className="footer-bottom_container">
			    <p>
			      @{new Date().getFullYear()} Sahil Kumar. All Rights Reserved
			    </p>
			    <div>
			      <p>PRIVACY POLICY</p>
			      <p>TERMS & CONDITIONS</p>
			    </div>
			  </div>
			</div>
		</footer>
	</Wrapper>
  </>
`;

const Footer = () => {
	const Wrapper=styled.section`
		width:100%;
		position: absolute;

		bottom: 0;
		width: 100%;
		height: 400px;
		.contact-short {
			max-width: 70vw;
			margin: auto;
		    padding: 2rem 3rem;
			background-color: ${({ theme }) => theme.colors.bg};
			border-radius: 20px;
			box-shadow: ${({ theme }) => theme.colors.shadowSupport};
			display:flex;
			align-items:center;
			justify-content:space-between;
		    transform: translateY(50%);
			.content-short--heading{
				h3{
					font-size:1rem;
					margin:0;
				}
			}
		}
		
		.footer_container{
			width:100%;

		    background-color: ${({ theme }) => theme.colors.footer_bg};	
		    
		    .main-container{
		    	max-width: 100%;
		    	height:90%;
		   		margin: auto;
		   		color:white;
				display:flex;
				padding:6rem 2rem;
				padding-bottom:2rem;
				justify-content:space-between;
				
				.footer-about{
					width:22%;
				}
				
				.footer-subscribe{
					width:25%;
					h3{
						font-size:1rem;
						margin:0;
						margin-bottom:5px;
					}
					
					input{
						outline:none;
						border: 0.1rem solid rgb(170 170 170 / 40%);
						height:3.5rem;
						width:14rem;
						padding:3px 7px;
					}
					
					.btn{
						margin-top:10px;
						width:7rem;
						height:3rem;
						display:flex;
						align-items: center;
						justify-content: center;
					}
				}
				
				.footer-social{
					width:20%;					
					.footer-social--icons{
						display:flex;
						.icons{
							padding: 0.5rem 0.7rem;
							border-radius: 50%;
							border: 2px solid ${({ theme }) => theme.colors.white};
							margin:0px 5px;
							i{
								color: ${({ theme }) => theme.colors.white};
								font-size: 1rem;
								position: relative;
								cursor: pointer;
							}
							&:hover{
								background:${({theme})=>theme.colors.btn};
								color:white;
							}
							&:first-child{
								margin-left:0px;
							}
						}
					}
				}
				
				.footer-contact{
					width:20%;	
					h3{
						font-size:1rem;
					}				
				}				
		    }
		    
			.footer-bottom--section {
			  width:100%;
			  padding:0rem 2rem;
			  padding-top: 4rem;
			  color:white;
			  display:flex;
			  hr {
			    margin-bottom: 1rem;
			    color: ${({ theme }) => theme.colors.hr};
			    height: 0.1px;
			  }
			  
			  .footer-bottom_container{
			  	width:90%;
			  	display:flex;
			  	align-items:center;
			  	justify-content:space-between;
			  }
			}		    
		}
		
		@media (max-width: ${({ theme }) => theme.media.mobile}) {

			.contact-short {
				max-width: 90vw;
				width:90%;
			}
			
			.footer_container{
			  .main-container{
			  	flex-direction: column;
			  	align-items:center;
			  	justify-content:center;
			  	
			  	
				.footer-about{
					width:100%;
					margin:5px 0px;
					h3{
						font-size:2rem;
					}
					
					p{
						font-size:1.3rem;
					}
				}
			  	
				.footer-subscribe{
					width:100%;
					margin:5px 0px;
					
					h3{
						font-size:1.3rem;
					}
					
					input{
						width:100%;
					}
				}
				
				.footer-social{
					width:100%;			
					margin:5px 0px;
					margin-bottom:10px;
					h3{
						font-size:1.5rem;
					}
					.footer-social--icons{
						.icons{
							padding: 1rem 1.4rem;
							i{
								font-size:1.3rem;
							}
						}
					}					
				}
				
				.footer-contact{
					width:100%;
					margin:5px 0px;
					h3{
						font-size:1.5rem;
					}
				}
			  }
			  
			  .footer-bottom--section {
				  padding-top: 2rem;
				  .footer-bottom_container{
				  	width:100%;
					justify-content:space-between;
				  }
			  }
			  
			}
		
		}
		
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Footer
