const {createGlobalStyle}=styled



export const GlobalStyle=createGlobalStyle`
	*{
		margin:0;
		padding:0;
		box-sizing:border-box;
	}
	html,body{
		overflow-x:hidden;
	}
	
	body{ min-height:100vh; margin:0; position:relative; }
	
	/* Trick: */
	body {
	position: relative;
	}
	
	body::after {
	content: '';
	display: block;
	height:400px;
	}
	
	
	body {
		overflow-x:hidden;
		overflow-y:hidden:
	   scrollbar-color: rgb(98 84 243);
	    scrollbar-width: thin;
	}
	
	body::-webkit-scrollbar {
	  width: 1rem;
	}
	
	body::-webkit-scrollbar-track {
	   background-color: rgb(24 24 29);
	}
	
	body::-webkit-scrollbar-thumb {
	 
	  background: ${({theme})=>theme.colors.btn};
	    border: 5px solid transparent;
	    border-radius: 9px;
	    background-clip: content-box;
	}

	
	@media (max-width: ${({ theme }) => theme.media.mobile}) {
		html{
			font-size:62.5%
		}
		
		body::after {
			content: '';
			display: block;
			height:400px;
		}
		
		body::-webkit-scrollbar {
			width: 0.5rem;
		}
		
		
		body::-webkit-scrollbar-thumb {		
			background: ${({theme})=>theme.colors.btn};
			border: 2px solid transparent;
			border-radius: 9px;
			background-clip: content-box;
		}
		
		
	}

`;

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: rgb(98 84 243);
  color: rgb(255 255 255);
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;

  &:hover,
  &:active {
    box-shadow: 0 2rem 2rem 0 rgb(132 144 255 / 30%);
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }

  a {
    text-decoration: none;
    color: rgb(255 255 255);
    font-size: 1.8rem;
  }
`;