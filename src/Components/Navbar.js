import '../Assets/Css/nav.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
    <nav className="navbar">
       
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">HOME</Link>
        </li>
        <li className="nav-item">
          <Link to="/Log" className="nav-link">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link to="/Register" className="nav-link">REGISTER</Link>
        </li>
       
      </ul>
    </nav>
  <div>
   <div class="area"></div><nav class="main-menu">
              <ul>
                  <li>
                      <span class="https://jbfarrow.com">
                          <i class="fa fa-home fa-2x"></i>
                          <span class="nav-text">
                             Community Dashboard
                          </span>
                      </span>
                    
                  </li>
                  <li class="has-subnav">
                      <span class="#">
                          <i class="fa fa-globe fa-2x"></i>
                          <span class="nav-text">
                              Global Surveyors
                          </span>
                      </span>
                  </li>
                  <li class="has-subnav">
                      <span class="#">
                         <i class="fa fa-comments fa-2x"></i>
                          <span class="nav-text">
                              Group Hub Forums
                          </span>
                      </span>
                  </li>
                  <li class="has-subnav">
                      <span class="#">
                         <i class="fa fa-camera-retro fa-2x"></i>
                          <span class="nav-text">
                              Survey Photos
                          </span>
                      </span>
                     
                  </li>
                  <li>
                      <span class="#">
                          <i class="fa fa-film fa-2x"></i>
                          <span class="nav-text">
                              Surveying Tutorials
                          </span>
                      </span>
                  </li>
                  <li>
                      <span class="#">
                          <i class="fa fa-book fa-2x"></i>
                          <span class="nav-text">
                             Surveying Jobs
                          </span>
                      </span>
                  </li>
                  <li>
                     <span class="#">
                         <i class="fa fa-cogs fa-2x"></i>
                          <span class="nav-text">
                              Tools & Resources
                          </span>
                      </span>
                  </li>
                  <li>
                     <span class="#">
                          <i class="fa fa-map-marker fa-2x"></i>
                          <span class="nav-text">
                              Member Map
                          </span>
                      </span>
                  </li>
                  <li>
                      <span class="#">
                         <i class="fa fa-info fa-2x"></i>
                          <span class="nav-text">
                              Documentation
                          </span>
                      </span>
                  </li>
              </ul>
  
              <ul class="logout">
                  <li>
                     <span class="#">
                           <i class="fa fa-power-off fa-2x"></i>
                          <span class="nav-text">
                              Logout
                          </span>
                      </span>
                  </li>  
              </ul>
          </nav>
   </div>
    
    <header>
        <div className='image'>

        </div>
    </header>
    </>
  );
}

export default Navbar;