import { React, useState, useEffect} from 'react';
import {  FiPlus } from 'react-icons/fi';
import { Bar } from 'react-chartjs-2';


export default function Corporates() {


  const [corporates, setCorporates] = useState(null);


  useEffect(() => {

    getData();

   // we will use async/await to fetch this data
   async function getData() {
    const response = await fetch(process.env.API + "/company");
    const data = await response.json();

    console.log(data)


    setCorporates(data) ;
  }

}, []);


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
                  Corporates
                </h6>

               
                <h1 className="header-title">
                  Manage Corporates
                </h1>

              </div>
              <div className="col-auto">

               
                <a href="#!" className="btn btn-primary btn-icon lift">  
                  <FiPlus />
                  <span className="link-text">Register new Corporate</span>
                  
                </a>

              </div>
            </div> 
          </div> 

        </div>
      </div> 
    
      <div className="container-fluid">
        <div className="row">
         
        <div className="col-12 col-lg-12 col-xl">


            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">

                    <table className="table table-sm table-nowrap">
                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>Company Name</th>
                          <th>Company Email</th>
                          <th>Company Main Address</th>
                          <th>Company Address</th>
                        </tr>
                      </thead>


                     
                      {corporates && (

                        <tbody>

                        
                        
                          {corporates.map((corporates, index) => (
                            <tr>

                            <td key={index}>
                              {corporates.id}
                            </td>

                            <td key={index}>
                              {corporates.name}
                            </td>

                            <td key={index}>
                              {corporates.email}
                            </td>

                            <td key={index}>
                              {corporates.phone}
                            </td>

                            <td key={index}>
                              {corporates.address.street}
                            </td>

                            </tr>
                          ))}

              
                        </tbody>
                  
                      )}
                      

                      </table>
                     
                  
                   
                  
                    
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
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
