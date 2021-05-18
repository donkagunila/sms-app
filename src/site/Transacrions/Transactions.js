import React from 'react';


export default function Transactions() {
  return (
    <div className="main-content">
          
          <div class="header">
        <div class="container-fluid">

          
          <div class="header-body">
            <div class="row align-items-end">
              <div class="col">

                
                <h6 class="header-pretitle">
                  Home
                </h6>

               
                <h1 class="header-title">
                  Transactions
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
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-12">
              <div className="card">
                <div className="card-body">
                <table class="table table-sm table-nowrap">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                </div>
              </div>
          </div>
        </div>
    </div>
    </div>
  )
}
