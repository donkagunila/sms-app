import React from 'react';
import { FiMessageCircle, FiPieChart, FiRadio } from 'react-icons/fi';


export default function Dashboard() {
  return (
    <div className="main-content">
      
      <div class="header">
        <div class="container-fluid">

          
          <div class="header-body">
            <div class="row align-items-end">
              <div class="col">

                
                <h6 class="header-pretitle">
                  Overview
                </h6>

               
                <h1 class="header-title">
                  Dashboard
                </h1>

              </div>
              <div class="col-auto">

               
                <a href="#!" class="btn btn-primary lift">
                  Schedule  Campaign
                </a>

              </div>
            </div> 
          </div> 

        </div>
      </div> 
    
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-6 col-xl">


    
            <div class="card bg-dark">
              <div class="card-body">
                <div class="row align-items-center">
                  <div class="col">

                   
                    <h6 class="text-uppercase text-white mb-2">
                      Campaigns
                    </h6>

                    <span class="h2 mb-0 text-white">
                      24
                    </span>

                    
                  

                   
                    <span class="badge badge-soft-light mt-n1 text-dark ml-2">
                      +3.5%
                    </span>
                  </div>
                  <div class="col-auto">

                  
                    <span class="h2 fe fe-dollar-sign text-muted mb-0">
                      <FiRadio className="text-white"/>
                    </span>

                  </div>
                </div> 
              </div>
            </div>


          </div>


          <div class="col-12 col-lg-6 col-xl">


    
          <div class="card bg-warning">
  <div class="card-body">
    <div class="row align-items-center">
      <div class="col">

       
        <h6 class="text-uppercase text-white mb-2">
          SMS OUT
        </h6>

        
        <span class="h2 mb-0 text-white">
          24,720,123
        </span>

       
       
      </div>
      <div class="col-auto">

      
        <span class="h2 fe fe-dollar-sign text-muted mb-0">
          <FiMessageCircle className="text-white"/>
        </span>

      </div>
    </div> 
  </div>
</div>


</div>


<div class="col-12 col-lg-6 col-xl">


    
<div class="card bg-info">
  <div class="card-body">
    <div class="row align-items-center">
      <div class="col">

       
        <h6 class="text-uppercase text-white mb-2">
          Total income
        </h6>

        
        <span class="h2 mb-0 text-white">
          24,720 <small>(Tsh)</small>
        </span>

       
       
      </div>
      <div class="col-auto">

      
        <span class="h2 fe fe-dollar-sign text-muted mb-0">
          <FiPieChart className="text-white"/>
        </span>

      </div>
    </div> 
  </div>
</div>



</div>

<div class="col-12 col-lg-6 col-xl">


    
<div class="card bg-success">
  <div class="card-body">
    <div class="row align-items-center">
      <div class="col">

       
        <h6 class="text-uppercase text-white mb-2">
          Total income
        </h6>

        
        <span class="h2 mb-0 text-white">
          24,720 <small>(Tsh)</small>
        </span>

       
       
      </div>
      <div class="col-auto">

      
        <span class="h2 fe fe-dollar-sign text-muted mb-0">
          <FiPieChart className="text-white"/>
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
