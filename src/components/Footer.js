import React from 'react';

const Footer = () => (
    <div className="footer">
      <div id="button"></div>
      <div id="container">
        <div id="cont">
          <div className="footer_center">
            <div className="footer-social-icons">
              <ul className="social-icons">
                  <li><a href="http://glympero-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-globe"></i></a></li>
                  <li><a href="https://twitter.com/lympero" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                  <li><a href="https://github.com/glympero" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-github"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/george-lymperopoulos-398a6551" target="_blank" rel="noopener noreferrer" className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Footer;
