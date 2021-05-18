import React from 'react';
import { FiCreditCard, FiMessageCircle, FiPieChart, FiRadio } from 'react-icons/fi';


export default function Dashboard() {
  return (
    <div className="main-content">
      
      <div className="header">
        <div className="container-fluid">

          
          <div className="header-body">
            <div className="row align-items-end">
              <div className="col">

                
                <h6 className="header-pretitle">
                  Overview
                </h6>

               
                <h1 className="header-title">
                  Dashboard
                </h1>

              </div>
              <div className="col-auto">

               
                <a href="#!" className="btn btn-primary lift">
                  Schedule  Campaign
                </a>

              </div>
            </div> 
          </div> 

        </div>
      </div> 
    
      <div className="container-fluid">
        <div className="row">
         
        <div className="col-12 col-lg-6 col-xl">


            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">

                  
                    <h6 className="text-uppercase text-muted mb-2">
                      Campaigns
                    </h6>

                  
                    <span className="h2 mb-0">
                      45
                    </span>

                  
                    
                  </div>
                  <div className="col-auto">

                  
                    <span className="h2 fe fe-dollar-sign text-muted mb-0">
                      <FiRadio />
                    </span>

                  </div>
                </div> 
              </div>
            </div>

            </div> 
        
           
        <div className="col-12 col-lg-6 col-xl">


          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col">

                
                  <h6 className="text-uppercase text-muted mb-2">
                    Total Cost
                  </h6>

                
                  <span className="h2 mb-0">
                     24,500 <small>tsh</small>
                  </span>

                
                  <span className="badge badge-soft-success mt-n1 ml-2">
                    +3.5%
                  </span>
                </div>
                <div className="col-auto">

                
                  <span className="h2 fe fe-dollar-sign text-muted mb-0">
                    <FiCreditCard />
                  </span>

                </div>
              </div> 
            </div>
          </div>

        </div> 


        <div className="col-12 col-lg-6 col-xl">


          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col">

                
                  <h6 className="text-uppercase text-muted mb-2">
                    SMS IN
                  </h6>

                
                  <span className="h2 mb-0">
                    224,500
                  </span>

                
                  <span className="badge badge-soft-success mt-n1 ml-2">
                    +7.5%
                  </span>
                </div>
                <div className="col-auto">

                
                  <span className="h2 fe fe-dollar-sign text-muted mb-0">
                    <FiMessageCircle />
                  </span>

                </div>
              </div> 
            </div>
          </div>

          </div> 


        <div className="col-12 col-lg-6 col-xl">


          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col">

                
                  <h6 className="text-uppercase text-muted mb-2">
                    SMS OUT
                  </h6>

                
                  <span className="h2 mb-0">
                    47,561
                  </span>

                
                  <span className="badge badge-soft-danger mt-n1 ml-2">
                    -3.5%
                  </span>
                </div>
                <div className="col-auto">

                
                  <span className="h2 fe fe-dollar-sign text-muted mb-0">
                  <FiMessageCircle />
                  </span>

                </div>
              </div> 
            </div>
          </div>

          </div> 



        </div>
      </div>
    </div>
  )
}
