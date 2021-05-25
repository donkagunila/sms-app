import React from 'react';
import { FiEdit, FiEye, FiGrid, FiPieChart, FiTrash } from 'react-icons/fi';


export default function ManageContacts () {
  return (
    <div className="main-content">
      <div class="header">
        <div class="container-fluid">

          
          <div class="header-body">
            <div class="row align-items-end">
              <div class="col">

                
                <h6 class="header-pretitle">
                  Contacts
                </h6>

               
                <h1 class="header-title">
                  Manage Contacts
                </h1>

              </div>
              <div class="col-auto">

               
                <a href="#!" class="btn btn-primary lift">
                 Add Contact
                </a>

              </div>
            </div> 
          </div> 

        </div>
      </div> 




      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
              <table class="table table-sm table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Group name</th>
                    <th scope="col">contacts</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className="text-left">
                    <button class="btn btn-white btn-sm">
                      <FiEye className="text-info" />
                    </button>
                    <button class="btn btn-white btn-sm ml-2">
                      <FiEdit className="text-warning" />
                    </button>

                    <button class="btn btn-white btn-sm ml-2">
                      <FiTrash className="text-danger" />
                    </button>
                    </td>
                  </tr>
                  

                 
                </tbody>
              </table>
              </div>
            </div>
          </div>

          <div className="col-md-4">
          <div class="card mb-3">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col">

                       
                        <h6 class="text-uppercase text-muted mb-2">
                          Contact Groups
                        </h6>

                      
                        <span class="h2 mb-0">
                          24
                        </span>

              

                      </div>
                      <div class="col-auto">

                     
                        <span class="h2 fe fe-dollar-sign text-muted mb-0">
                          <FiGrid />
                        </span>

                      </div>
                    </div> 
                  </div>
                </div>



                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row align-items-center">
                      <div class="col">

                  
                        <h6 class="text-uppercase text-muted mb-2">
                          total Contacts
                        </h6>

                        
                        <span class="h2 mb-0">
                          24,531
                        </span>

                    

                      </div>
                      <div class="col-auto">

                      
                        <span class="h2 fe fe-dollar-sign text-muted mb-0">
                          <FiPieChart />
                        </span>

                      </div>
                    </div> 

                  </div>
                </div>
         
            

            <div className="card">


            <div class="card-header">

            <h4 class="card-header-title mr-auto">
              Create Contact Group
            </h4>
            </div>


              <div className="card-body">
                <form>
                  <div className="form-group">
                  <label for="exampleInputEmail1">Group Name</label>
                    <input type="text" className="form-control" placeholder="Group Name" />
                  </div>

                  <div className="form-group">
                  <label for="exampleInputEmail1">Group Description</label>
                    <input type="text" className="form-control" placeholder="Group Description" />
                  </div>

                  <div className="form-group">
                    <input type="reset" className="btn btn-secondary" value="Clear" />
                    <input type="submit" className="btn btn-primary ml-2" value="save" />
                  </div>

                </form>
              </div>
            </div>
         
          </div>
         
        </div>
      </div>
    </div>
  )
}