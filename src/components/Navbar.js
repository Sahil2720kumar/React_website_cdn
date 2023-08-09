//import styled from "./styled-components"
const { NavLink }=ReactRouterDOM

let template = `
  <>
	<Nav>
		<figure className="img_container">
		  <img src="images/logo.webp" />
		</figure>
		
		{/* //nav icon */}
		<div className="mobile-navbar-btn">
			 <span onClick={()=>setOpenMenu(true)}  class={openMenu ? "menu-btn nav-btn hide" : "menu-btn nav-btn"}>
			 	<i className="bi bi-list" ></i>
			 </span>
			 <span onClick={()=>setOpenMenu(false)} className={openMenu ? "close-btn nav-btn cross" :"close-btn nav-btn cross hide"}>
			 	<i className="bi bi-x-lg" ></i>
			 </span>
		</div>
		
		<div className={openMenu ? "ul-container active" : "ul-container" }>
		  <ul className="list-container">
		    <li onClick={()=>setOpenMenu(false)} >
		      <NavLink exact className="navbar-link" activeClassName="active_class" to="/">Home</NavLink>
		    </li>
		    
		    <li onClick={()=>setOpenMenu(false)} >
		      <NavLink exact className="navbar-link" activeClassName="active_class" to="/about">About</NavLink>
		    </li>
		    
		    <li onClick={()=>setOpenMenu(false)} >
		      <NavLink exact className="navbar-link" activeClassName="active_class" to="/service">Service</NavLink>
		    </li>
		    
		    <li onClick={()=>setOpenMenu(false)} >
		      <NavLink exact className="navbar-link" activeClassName="active_class" to="/contact">Contact</NavLink>
		    </li>
		    <li onClick={()=>setOpenMenu(false)} >
		      <NavLink exact className="navbar-link" activeClassName="active_class" to="/error">Error</NavLink>
		    </li>
		  </ul>
		</div>
				  
	</Nav>
  </>
`;

const Navbar = () => {
	const [openMenu,setOpenMenu]=React.useState(false)
	console.log(openMenu)
	const Nav=styled.nav`
		display:flex;
		align-items:center;
		justify-content:space-between;
		height:100px;
		padding:5px 15px;
		background:rgb(249 249 255);
		width:100%;
		.img_container{
			height:100%;
			display:flex;
			align-items:center;
			justify-content:center;
			img{
				width:;
				height:60%;
			}
		}
		
		.mobile-navbar-btn{
			display:none;
		}
		
		.ul-container{
		    transition:all linear 0.5s;
			width:auto;
		
			.list-container{
				display:flex;
				align-items:center;
				justify-content:space-around;

				li{
					list-style: none;
					margin:0px 4px;
					a{
						text-decoration:none;
						color:black;
						font-size:1.5rem;
					}
					
					a.active_class{
						border-bottom:2px solid blue;
					}
				}
			}
		}
		
		@media (max-width: ${({ theme }) => theme.media.mobile}) {
			transition:all linear 0.5s;
			.hide{
				display:none;
			}
			
			height:70px;
			position:relative;
			.img_container{
				img{
					width:170px;
				}
			}
			
			.ul-container{
				width: 100vw;
				height: 100vh;
				position: absolute;
				top: 0;
				left: 0;
				background:${({ theme }) => theme.colors.btn};
			    transform: translateX(100%);
				
				visibility:hidden;
				opacity:0;
			    
			    z-index:999;
				transition:all linear 0.5s;
			    
				display: flex;
				justify-content:center;
				align-items:center;
				color:white;
				
				&.active{
					visibility: visible;
					position: fixed;
					opacity: 1;
					transition:all linear 0.5s;
					transform: translateX(0);
					z-index: 999;
				}
				
				.list-container{
					height:50%;
					flex-direction: column;
					
					li{
					   a{
					  	font-size:2.5rem;
					  	color:white;
					   }
					}
				}
				
		     	margin:0;
		     	padding:0;
			}
			
	
			
			.mobile-navbar-btn{
				display:block;
				position:absolute;
				right:10px;
				z-index:9999;
				.nav-btn{		
					&.cross{
						
						top:10px;
						right:20px;
						position:fixed;
						z-index:9999;
						i{
							color: white;
							font-size:2.7rem;
						}
					}
					
					i{
						font-size:3rem;
					}
				}
				
				.close-btn{
					display:;
					
				}
								
			}
			
			
		}
		
		
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default Navbar