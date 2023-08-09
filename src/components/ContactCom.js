
let template = `
  <>
	<Wrapper>
		<h2>Feel Free to Contact us</h2>
  		<hr/>
  		<div className="map_container">
  			<iframe 
  				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.6685497722456!2d94.90011050000003!3d27.47957639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3740981bbfcc9fe7%3A0x69479a4da307f69a!2sM.F.%20Hospital%20%26%20Research%20Centre!5e0!3m2!1sen!2sin!4v1691485311077!5m2!1sen!2sin"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
	  			 referrerpolicy="no-referrer-when-downgrade">
	  		 </iframe>
  		</div>
 
		<div className="contact_container">
		  <div className="contact-form">
		    <form
		      action="https://formspree.io/f/mjvqygzp"
		      method="POST"
		      className="contact-inputs">
		      <input
		        type="text"
		        name="username"
		        placeholder="username"
		        autoComplete="off"
		        required
		      />
		
		      <input
		        type="email"
		        name="Email"
		        placeholder="Email"
		        autoComplete="off"
		        required
		      />
		
		      <textarea
		        name="message"
		        cols="30"
		        rows="6"
		        placeholder="Enter your message here"
		        autoComplete="off"
		        required></textarea>
		
		      <input type="submit" value="send" />
		    </form>
		  </div>
		</div>
	</Wrapper>
  </>
`;

const ContactCom = () => {
	const Wrapper=styled.section`
		width:100%;
		text-align:center;
		display:flex;
		flex-direction: column;
		justify-content:center;
		padding:2rem 0rem;
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
		
		.map_container{
			width:100%;
			height:250px;

			
			iframe{
				height:100%;
				width:100%;
			}
		}
		
		.contact_container{
			margin-top: 4rem;
			text-align: center;
			width:40%;
			
			.contact-form {
			  max-width: 35rem;
			  margin: auto;
			
			  .contact-inputs {
			    display: flex;
			    flex-direction: column;
			    
			    input{
			    	margin:8px 0px;
			    	outline:none;
				    border: 0.1rem solid rgb(170 170 170 / 40%);
				    height:3rem;

				    padding:3px 7px;
			    }
			    
			    textarea{
			    	outline:none;
			    	border: 0.1rem solid rgb(170 170 170 / 40%);
				    padding:3px 7px;
			    }
			
			    input[type="submit"] {
				  width:10rem;
				  height:3rem;
			      cursor: pointer;
			      color:white;
			      transition: all 0.2s;
				  background:${({ theme }) => theme.colors.btn};
			      &:hover {
			        background-color: ${({ theme }) => theme.colors.white};
			        border: 1px solid ${({ theme }) => theme.colors.btn};
			        color: ${({ theme }) => theme.colors.btn};
			        transform: scale(0.9);
			      }
			    }
			  }
			}
		}
		
	   @media (max-width: ${({ theme }) => theme.media.mobile}) {
		   .contact_container{
		   		width:70%;
		   }
	   }
	`
    return (
        eval(Babel.transform(template, { presets: ['es2017', 'react'] }).code)
    );
};
 
export default ContactCom
