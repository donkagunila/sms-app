import React, { useState } from 'react';
import { Button, Modal }  from 'react-bootstrap';
import { FiCreditCard, FiInfo, FiMessageCircle, FiPieChart, FiPlus, FiPlusCircle, FiRadio } from 'react-icons/fi';


export default function Senders() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="main-content">
      
      <div className="header">
        <div className="container-fluid">

          
          <div className="header-body">
            <div className="row align-items-end">
              <div className="col">

                
                <h6 className="header-pretitle">
                  Senders
                </h6>

               
                <h1 className="header-title">
                  Sender Names
                </h1>

              </div>
              <div className="col-auto">

              <Button variant="primary" className="btn btn-primary lift" onClick={handleShow}>
                <span className="mr-2"><i><FiPlusCircle /></i></span>
                <span className="d-b pt-10">Create New</span>
              </Button>


              <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              centered
            >
               <form>
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"> Create Sender Name</Modal.Title>
              </Modal.Header>
              <Modal.Body>
               
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="senderName">
                          Sender Name
                        </label>
                        <input type="text" className="form-control " placeholder="Sender Name"/>
                      </div>

                      <div className="form-group">
                      <label htmlFor="senderDesc">
                          Sample Description
                        </label>
                        <textarea name="" id="" className="form-control" placeholder="Sample Content"></textarea>
                      </div>


        
                    </div>
                  </div>
               
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary">Save</Button>
              </Modal.Footer>
              </form>
            </Modal>



              </div>
            </div> 
          </div> 

        </div>
      </div> 
    
      <div className="container-fluid">
        <div className="row">

        <div className="col-12 col-lg-12 col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-12 col-lg-12 px-4 py-3 order-lg-1">
                  <p className="text-muted">
                  The Sender Name can be used to impersonate another person, organisation, brand etc. 
                  (ex computer shop sends sms with the sender name 'DELL'). We strive to prevent individuals and organisations from misusing this capability and thus require approval.
                  </p>
                  <Button variant="link" className="btn btn-outline lift">
                    <span className="d-b pt-10">Learn More</span>
                  </Button>
                  
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
                      Registered Senders
                    </h6>

                  
                    <span className="h2 mb-0">
                      4
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
                    Active Senders
                  </h6>

                
                  <span className="h2 mb-0">
                    2
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
                    Pending Senders
                  </h6>

                
                  <span className="h2 mb-0">
                    1
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




         
        <div className="col-12 col-lg-12 col-xl-12">


            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                <table class="table table-sm table-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">S/N</th>
                      <th scope="col">Sender Name</th>
                      <th scope="col">Sample Content</th>
                      <th scope="col">Networks</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>HARUSI</td>
                      <td>Habari amos, Unakumbushwa kutoa mchango wa harusi ya Mussa</td>
                      <td>All</td>
                      <td>
                      <span class="badge badge-soft-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </div> 
              </div>
            </div>

            </div> 
        


        </div>
      </div>
    </div>
  )
}
