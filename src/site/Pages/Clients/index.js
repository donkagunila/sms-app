import React, { useEffect,useState }  from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "../../../redux/Actions/ClientActions";
import PageLoader from "../../../components/PageLoader/index";
import { FiDelete, FiEdit, FiEye, FiPlusCircle, FiTrash } from 'react-icons/fi';



function Client() {



  const dispatch = useDispatch();

  const { clients, isLoading } = useSelector(
    (state) => state.clients
  );

  useEffect(() => {
    dispatch(fetchClients());

  }, [dispatch]);

  return (
    <div className="main-content">
      <div className="header">
        <div className="container-fluid">

       
       <div className="header-body">
         <div className="row align-items-end">
           <div className="col">

             
             <h6 className="header-pretitle">
               Clients
             </h6>

            
             <h1 className="header-title">
               Manage Clients
             </h1>

           </div>
           <div className="col-auto">

            
             <a href="#!" className="btn btn-primary btn-icon lift">  
               <FiPlusCircle className="pt-0" />
               <span className="link-text">Register Client</span>
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

            <div className="card-header">
    
              <h4 className="card-header-title">
                All Clients
              </h4>
              
            </div>

              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">


                    <table className="table table-sm table-nowrap">
                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>Client Name</th>
                          <th>Client Email</th>
                          <th>Client Phone</th>
                          <th>Client Address</th>
                          <th>Action</th>
                        </tr>
                      </thead>


                     

                       <tbody>
                         { clients.map((client, index) => (
                             <tr key={index}>
                               <td>
                                 { client.id }
                               </td>
                               <td>
                                 { client.client_name }
                               </td>

                               <td>
                                 { client.email }
                               </td>

                               <td>
                                 { client.office_phone }
                               </td>

                               <td>
                                 { client.address }
                               </td>


                               <td>
                                <button class="btn btn-sm btn-rounded-circle text-info mr-2">
                                  <FiEdit />
                                </button>
                                <button class="btn btn-sm btn-rounded-circle text-success">
                                  <FiEye />
                                </button>
                                <button class="btn btn-sm btn-rounded-circle text-danger ml-2">
                                  <FiTrash />
                                </button>
                               </td>


                             </tr>
                           ))}
                       </tbody>

                   

                    </table>

                    <div>
                      {isLoading && <PageLoader />}
                    </div>
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

export default Client
