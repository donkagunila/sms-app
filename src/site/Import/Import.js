import React from 'react';
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'

export default function ImportContacts() {

   // specify upload params and url for your files
   const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  
   // called every time a file's `status` changes
   const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
   
   // receives array of files that are done uploading when submit button is clicked
   const handleSubmit = (files, allFiles) => {
     console.log(files.map(f => f.meta))
     allFiles.forEach(f => f.remove())
   }


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
                  Import Contacts
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
          <div className="col-12">

            <div className="card">
              <div className="card-body">
              <Dropzone
                className="dropzone dropzone-single mb-3"
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept={[".csv, .xlsx"]}
                inputContent="Drag and drop some files here, or click to select files"
                acceptedFiles={[".csv, text/csv, application/vnd.ms-excel, application/csv, text/x-csv, application/x-csv"]}
              />


              <div className="d-flex justify-content-center my-3">
                <button className="btn btn-danger">Cancel</button>
              </div>


              
              </div>
            </div>
            
          </div>
        </div>  
      </div> 
    </div>
  )
}