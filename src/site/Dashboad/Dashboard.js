import React from 'react';
import { FiCreditCard, FiMessageCircle, FiRadio } from 'react-icons/fi';
import { Bar, PolarArea } from 'react-chartjs-2';


export default function Dashboard() {


  const dataPolar = {
    labels: ['Read', 'Received', 'Pending'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3],
        backgroundColor: [
          '#a6c5f7',
          '#2c7be5',
          '#d2ddec',
        ],
        borderWidth: 1,
      },
    ],
  };


  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'sms Out',
        data: [12, 19, 3, 5, 2, 3, 13],
        backgroundColor: '#d2ddec',
      },
      {
        label: 'Sms In',
        data: [2, 13, 12, 15, 1, 4, 16],
        backgroundColor: '#2c7be5',
      },
     
    ],
  };



  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };



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



        <div className="row">
          <div className="col-md-8">
            <div className="card">
            <div class="card-header">


              <h4 class="card-header-title">
                Transactionns
              </h4>


              </div>
              <div className="card-body">
              <Bar data={data} options={options} />
              </div>
            </div>
          </div>
        
          <div className="col-md-4">
          <div class="card">
              <div class="card-header">

            
                <h4 class="card-header-title">
                  Traffic Channels
                </h4>

       
                <ul class="nav nav-tabs nav-tabs-sm card-header-tabs">
                  <li class="nav-item" >
                    <a href="#" class="nav-link active">
                      Sms In
                    </a>
                  </li>
                  <li class="nav-item" >
                    <a href="#" class="nav-link" >
                      Sms Out
                    </a>
                  </li>
                </ul>

              </div>
              <div class="card-body">
              <PolarArea data={dataPolar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
