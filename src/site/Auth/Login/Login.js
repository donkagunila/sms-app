import React , { useState } from "react";
import { useHistory } from "react-router-dom";



function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const history = useHistory();



  const handleChange = (e) => {
    setEmail(e.target.value);
    setError();
    console.log(e.target.value);
  }


  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError();
    console.log(e.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }

    if(email === 'amos@gmail.com'){

      // create user object
      localStorage.setItem('user', email);
      history.push("/");
    } else {
      // return error
      setError("Invalid Credentials");
    }
    
  }
  return(
    <div className="d-flex align-items-center bg-auth border-top border-top-2 border-primary h-full">
      <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 col-xl-4 my-5">
          
          
          <h1 className="display-4 text-center mb-3">
            Sign in
          </h1>
          
          
          <p className="text-muted text-center mb-5">
            Administration Dashboard.
          </p>
          
        
          <form onSubmit={handleSubmit}>

            
            <div className="form-group">

              
              <label>Email Address</label>

              
              <input type="email" 
                     className="form-control" 
                     placeholder="name@address.com"
                     value={email}
                     onChange={handleChange}
                     name="email"
                     required
                      />

              <span className="error text-danger small">{ error }</span>
                

            </div>

            
            <div className="form-group">

              <div className="row">
                <div className="col">
                      
                  
                  <label>Password</label>

                </div>
            
              </div> 

             
              <div className="input-group input-group-merge">

                
                <input type="password" 
                       className="form-control form-control-appended" 
                       placeholder="Enter your password" 
                       value={password}
                       onChange={handlePasswordChange}
                       required/>

                
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fe fe-eye"></i>
                  </span>
                </div>

              </div>
            </div>

            
            <button className="btn btn-lg btn-block btn-primary mb-3" type="submit">
              Sign in
            </button>

            
            <div className="text-center">
              <small className="text-muted text-center">
                Forgot your password? <a href="/">Reset password</a>.
              </small>
            </div>
            
          </form>

        </div>
      </div> 
    </div>
    </div>
  )

}


export default Login;