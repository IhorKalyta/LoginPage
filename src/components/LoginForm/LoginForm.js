import React, {useState} from 'react';
import './LoginForm.css';

function LoginForm(props) {
	const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
	}
	const handleSubmitClick = (e) => {
		e.preventDefault();
		if(state.email!=='' && state.password !==''){
			alert(`Email: ${state.email} Password: ${state.password}`);
		}
	}
	return(
		  <div className="card">
			  <div className="form">
				  <h1>LOGIN</h1>
				  
				  <input type="email" 
						 className="form-control" 
						 id="email" 
						 aria-describedby="emailHelp" 
						 placeholder="Email address"
						 value={state.email}
						 onChange={handleChange}
				  />
				  
				  
				  
					  <input type="password" 
						  className="form-control" 
						  id="password" 
						  placeholder="Password"
						  value={state.password}
						  onChange={handleChange}
					  />
				  			 
				  <button 
					  type="submit" 
					  className="btn"
					  onClick={handleSubmitClick}
				  >
					  LOG IN
				  </button>

				  <div className="link"><a href="/">Forgot your password?</a></div>
				  <div className="link"><label>Don't have an account yet? <a className="register" href="/">Register</a></label></div>
			  </div>
		  </div>
	  )
  }

  export default LoginForm;