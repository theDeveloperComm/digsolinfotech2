import React from 'react'

export default function Foo() {
  return (
    <div>
      <footer className="footer-section" style={{background: 'linear-gradient(to right, #203376, #864ddf)'}}>
        <div className="container">
          <div className="footer-cta py-5">
            <div className="row">
              <div className="col-sm-6 col-xl-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-map-marker-alt" />
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span className="text-light">Badarpur, New Delhi-110076,India</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-phone" />
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span className="text-light">+91 7011101967</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-4 mb-30">
                <div className="single-cta">
                  <i className="fas fa-envelope-open" />
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span className="text-light">digsolinfotech@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content py-5">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="#"><img src="services/comlogo.png" className="img-fluid" /></a>
                  </div>
                  <div className="footer-text">
                    <p className="text-light"> DIGSOL Business Solution is a leading Web Development and Designing organization situated in India</p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <a href="https://wa.me/+917042386709" target="_blank"><i className="fab fa-whatsapp facebook-bg" /></a>
                    <a href="https://www.facebook.com/DigSolBusinessSolution/" target="_blank"><i className="fab fa-facebook-f facebook-bg" /></a>
                    <a href="https://www.linkedin.com/in/digsol-infotech-3b6886240" target="_blank"><i className="fab fa-linkedin twitter-bg" /></a>
                    <a href="https://instagram.com/digsol_biz_solutions?igshid=YmMyMTA2M2Y" target="_blank"><i className="fab fa-instagram instagram-bg" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul className="text-light">
                    <li><a href="index.php" className="text-light">Home</a></li>
                    <li><a href="about.php" className="text-light">about Us</a></li>
                    <li><a href="whychooseus.php" className="text-light">Why Choose Us</a></li>
                    <li><a href="contact.php" className="text-light">Contact Us</a></li>
                    <li><a href="webdesign.php" className="text-light">Website Designer</a></li>
                    <li><a href="webdevelopment.php" className="text-light">Website Development</a></li>
                    <li className="pl-3"><a href="seo.php" className="text-light">SEO </a></li>
                    <li><a href="#" className="text-light">Wordpress Developer</a></li>
                    <li><a href="#" className="text-light">Digital Marketing</a></li>
                    <li><a href="website-maintenance.php" className="text-light">Website Maintnenance</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text">
                    <p className="text-light">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><i className="fab fa-telegram-plane" /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p className="text-light">Copyright © 2022, All Right Reserved <a href="#">Digsol bussiness solution</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
