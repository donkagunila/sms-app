import React  from "react";


function Login() {
  return(
    <div className="d-flex align-items-center bg-auth border-top border-top-2 border-primary h-full">
      <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-5 col-xl-4 my-5">
          
          
          <h1 class="display-4 text-center mb-3">
            Sign in
          </h1>
          
          
          <p class="text-muted text-center mb-5">
            Administration Dashboard.
          </p>
          
        
          <form>

            
            <div class="form-group">

              
              <label>Email Address</label>

              
              <input type="email" class="form-control" placeholder="name@address.com" />

            </div>

            
            <div class="form-group">

              <div class="row">
                <div class="col">
                      
                  
                  <label>Password</label>

                </div>
                <div class="col-auto">
                  
                  
                  {/* <a href="password-reset.html" class="form-text small text-muted">
                    Forgot password?
                  </a> */}

                </div>
              </div> 

             
              <div class="input-group input-group-merge">

                
                <input type="password" class="form-control form-control-appended" placeholder="Enter your password" />

                
                <div class="input-group-append">
                  <span class="input-group-text">
                    <i class="fe fe-eye"></i>
                  </span>
                </div>

              </div>
            </div>

            
            <button class="btn btn-lg btn-block btn-primary mb-3">
              Sign in
            </button>

            
            <div class="text-center">
              <small class="text-muted text-center">
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