import React from 'react'

export default function About() {
  return (

    <React.Fragment>
       <div>
        <div> 
          <h2 style={{marginTop: '10px',  textAlign: 'center', fontWeight: 'bold'}}> ABOUT US</h2>
        </div>
        <div className="container mt-2">
          <div className="row text-center">
            <div className>
              <h3 style={{background: 'linear-gradient(to right,#203376,  #864ddf)', color: 'white', borderRadius: '15%'}}>Who We Are</h3>
              <p className="pt-3"><span className="font-weight-bold">DIGSOL Business Solution </span>is a leading Web Development and Designing organization situated in India, the USA, and Australia. We are always there for individuals to make them the best engineer according to the worldwide IT organization’s prerequisites. DIGSOL Business Solution was set up in 1997, and now it’s growing amongst the country’s leading web development companies. We incorporate your thoughts with the splendid sites.</p>
            </div>
          </div>
        </div>
        <div className="container px-lg-5 mt-3">
          <h3 className="text-center" style={{background: 'linear-gradient(to right,#203376,  #864ddf)', color: 'white', borderRadius: '15%'}}>Our Experience</h3>
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5 border bg-light">
              Design - 8 years
            </div>
            <div className="col py-3 px-lg-5 border bg-light">
              <div className="progress">
                <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}} />
              </div>
            </div>
          </div>
          {/* ------------- */}
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5 border bg-light">
              Development - 6 years
            </div>
            <div className="col py-3 px-lg-5 border bg-light">
              <div className="progress">
                <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
              </div>
            </div>
          </div>
          {/* -------------------- */}
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5 border bg-light">
              Web Hosting - 8 years
            </div>
            <div className="col py-3 px-lg-5 border bg-light">
              <div className="progress">
                <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}} />
              </div>
            </div>
          </div>
          {/* ----------------------- */}
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5 border bg-light">
              Search Engine Optimization - 8 years
            </div>
            <div className="col py-3 px-lg-5 border bg-light">
              <div className="progress">
                <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '75%'}} />
              </div>
            </div>
          </div>
          {/* --------------------------- */}
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5 border bg-light">
              E-Commerce Solutions - 7 years
            </div>
            <div className="col py-3 px-lg-5 border bg-light">
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '82%', backgroundColor: 'red'}} />
              </div>
            </div>
          </div>
          {/* ----------------------- */}
          <div className="row mx-lg-n5">
            <div className="col py-3 px-lg-5 border bg-light">
              MLM Portal Development - 5 years
            </div>
            <div className="col py-3 px-lg-5 border bg-light">
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: '87%'}} />
              </div>
            </div>
          </div>
        </div>
        <h2 style={{marginTop: '10px', color: '#0078ae', textAlign: 'center', fontWeight: 'bold'}}>Our Services</h2>
      </div>
      <div>
        <div className="container bootstrap snippets bootdeys">
          <div className="row">
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="blue" data-radius="none">
                  <div className="content">
                    <h4 className="title">Website Development</h4>
                    <p className="description">Web development is a significant term for developing a website for the Internet (World Wide Web). </p>
                  </div>
                </div> {/* end card */}
              </div>
            </div>
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="green" data-radius="none">
                  <div className="content">
                    <h4 className="title">Website Designing</h4>
                    <p className="description">vaptech is a firm that offers professional website design services to its customers and clients Abroad. </p>
                  </div>
                </div> {/* end card */}
              </div>
            </div>
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="yellow" data-radius="none">
                  <div className="content">
                    <h4 className="title">Website Maintenance</h4>
                    <p className="description">Website Maintenance Services are also necessary, which help to make your website attractive for visitors. </p>
                  </div>
                </div> {/* end card */}
              </div>
            </div>
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="brown" data-radius="none">
                  <div className="content">
                    <h4 className="title">Web Hosting</h4>
                    <p className="description">Avaptech provides extremely reliable Windows Hosting and Linux Hosting.</p>
                  </div>
                </div> {/* end card */}
              </div>
            </div>
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="purple" data-radius="none">
                  <div className="content">
                    <h4 className="title">SEO Services</h4>
                    <p className="description">Search Engine Optimization (SEO) makes your website work best with different search engines. </p>
                  </div>
                </div> {/* end card */}
              </div>
            </div>
            <div className="col-md-4 col-sm-6 content-card">
              <div className="card-big-shadow">
                <div className="card card-just-text" data-background="color" data-color="orange" data-radius="none">
                  <div className="content">
                    <h4 className="title">Digital Marketing</h4>
                    <p className="description">What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. </p>
                  </div>
                </div> {/* end card */}
              </div>
            </div>
          </div>
        </div>
        1
        {/* ---------------contact section----------------- */}
        <div className="main-comtent" style={{background: 'linear-gradient(to right,#203376,  #864ddf)'}}>
          <div className="container">
            <div className="row text-light">
              <div className="col">
                <div className="text-center" style={{width: '18rem'}}>
                  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                  <span className="material-symbols-outlined text-center mt-2 text-warning" style={{fontSize: '50px'}}>
                    map
                  </span>
                  <div className="card-body">
                    <p className="card-text">Office No -2, First Floor, Chandermal Complex, Dharamveer Market, Badarpur, New Delhi-110076,India</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-center" style={{width: '18rem'}}>
                  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                  <span className="material-symbols-outlined text-center mt-2 text-warning" style={{fontSize: '50px'}}>
                    headphones
                  </span>
                  <div className="card-body">
                    <p className="card-text text-center">+91 7011101967  <br />Connect us anytime<br />
                      Mon-Sat 9:30am-6:30pm</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="text-center" style={{width: '18rem'}}>
                  {/* <img class="card-img-top" src="..." alt="Card image cap"> */}
                  <span className="material-symbols-outlined text-center mt-2 text-warning" style={{fontSize: '50px'}}>
                    contact_mail
                  </span>
                  <div className="card-body">
                    <p className="card-text"> 
                      digsolinfotech@gmail.com
                      Connect us anytime us</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div /></div>
      </div>
    </React.Fragment>
  );
}
  