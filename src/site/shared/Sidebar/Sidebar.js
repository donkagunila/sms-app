import React from 'react';
import logo from '../../../img/logo.png';
import pic from '../../../img/pic.jpeg';
import { useHistory, 
         BrowserRouter as Router, 
         Link,
         NavLink,
        Switch,
      Route } from "react-router-dom";



import { FiClipboard, FiCreditCard, FiGrid, FiHome, FiInbox, FiPieChart, FiUsers } from "react-icons/fi";
import Home from '../../Home/Home';
import Transactions from '../../Transacrions/Transactions';
import Dashboard from '../../Dashboad/Dashboard';


function Sidebar(){

  const history = useHistory();

  const handleLogout = () => {
     // create user object
     localStorage.removeItem('user');
     history.push("/login");
  }

  return(
    <Router>
      <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light " id="sidebar">
      
      
      <div class="container-fluid">

      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidebarCollapse" aria-controls="sidebarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

      
        <a class="navbar-brand" href="/">
          <img src={logo} className="navbar-brand-img 
          mx-auto" alt="..." />
        </a>

      
        <div class="navbar-user d-md-none">

        
          <div class="dropdown">

          
            <a href="#" id="sidebarIcon" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="avatar avatar-sm avatar-online">
                <img src="assets/img/avatars/profiles/avatar-1.jpg" class="avatar-img rounded-circle" alt="..." />
              </div>
            </a>

        
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="sidebarIcon">
              <a href="profile-posts.html" class="dropdown-item">Profile</a>
              <a href="account-general.html" class="dropdown-item">Settings</a>
              <hr class="dropdown-divider" />
              <a href="sign-in.html" class="dropdown-item">Logout</a>
            </div>

          </div>

        </div>

      
        <div class="collapse navbar-collapse" id="sidebarCollapse">

      
      
      

        
        
          <ul class="navbar-nav">

            <li className="nav-item">
              <NavLink exact to="/" className="nav-link" activeClassName="active">
                    <i className="fe"> <FiHome/></i>
                    Dashboard
              </NavLink>
            </li>

           

          <li className="nav-item ">
            <NavLink to="/transactions" className="nav-link" activeClassName="active">
                <i className="fe"> <FiInbox/></i> Transactions
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink to="/campaigns" className="nav-link" activeClassName="active">
                <i className="fe"> <FiGrid/></i> Campaigns
            </NavLink>
          </li>

            <li class="nav-item">
              <a class="nav-link " href="docs/changelog.html">
              <i className="fe"> <FiUsers/></i> Sender Names
              </a>
          </li>

        

            <li class="nav-item">
              <a class="nav-link " href="docs/changelog.html">
              <i className="fe"> <FiClipboard/></i> Contacts
              </a>
            </li>


          
            <li class="nav-item">
              <a class="nav-link " href="docs/changelog.html">
              <i className="fe"> <FiUsers/></i> Clients
              </a>
            </li>

          </ul>




          <hr class="navbar-divider my-3" />

        
          <h6 class="navbar-heading">
            Reports
          </h6>

          <ul class="navbar-nav mb-md-4">

          <li class="nav-item">
              <a class="nav-link " href="docs/changelog.html">
              <i className="fe"> <FiPieChart/></i> Transaction Reports
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="docs/changelog.html">
              <i className="fe"> <FiCreditCard/></i> Billing reports
              </a>
            </li>

            </ul>


        
          <div class="mt-auto"></div>

          
        
          <div id="popoverDemo" data-toggle="popover" data-trigger="manual" title="Make Dashkit Your Own!" data-content="Switch the demo to Dark Mode or adjust the navigation layout, icons, and colors!">
            <a href="#modalDemo" class="btn btn-block btn-primary mb-4" data-toggle="modal">
              <i class="fe fe-sliders mr-2"></i> Customize
            </a>
          </div>
          

          
        
          <div class="navbar-user d-none d-md-flex" id="sidebarUser">

          
            <a href="#sidebarModalActivity" class="navbar-user-link" data-toggle="modal">
              <span class="icon">
                <i class="fe fe-bell"></i>
              </span>
            </a>

          
            <div class="dropup">

              
              <a href="#" id="sidebarIconCopy" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div class="avatar avatar-sm avatar-online">
                  <img src={pic} class="avatar-img rounded-circle" alt="..." />
                </div>
              </a>

          
              <div class="dropdown-menu" aria-labelledby="sidebarIconCopy">
                <a href="#" class="dropdown-item">Profile</a>
                <a href="#" class="dropdown-item">Settings</a>
                <hr class="dropdown-divider" />
                <button class="dropdown-item" onClick={handleLogout}>Logout</button>
              </div>

            </div>

          
            <a href="#sidebarModalSearch" class="navbar-user-link" data-toggle="modal">
              <span class="icon">
                <i class="fe fe-search"></i>
              </span>
            </a>

          </div>
          

        </div> 

      </div>


     
            
    </nav>


    <Switch>
        <Route path="/transactions">
          <Transactions />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
          
      </Switch>

    </Router>
  )
}


export default Sidebar;