import React from 'react'

export default function Contact() {
  return (
    <div>
       <section className="contact_section layout_padding" id="contact">
    <div className="container contact_heading">
      <h2 className="text-dark" style={{marginTop: '10px',  textAlign: 'center', fontWeight: 'bold'}}>
        Contact Us
      </h2>
      <p>This help us make us sure you get the right as fast as possible</p>
      {/* <p>
    psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  </p> */}
    </div>
    <div className="container">
      <div className="container text-center mt-2 mb-4" style={{backgroundColor: '#C2B280', width: '300px', color: 'white', fontSize: '15px', fontWeight: 'bold'}}>
      </div>
      <form action="backend.php" method="POST">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName4">Name</label>
            <input type="text" className="form-control" id="inputName4" name="name" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" name="email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputNumber4">Phone number</label>
            <input type="tel" className="form-control" id="inputNumber4" name="phone" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputState">Select Service</label>
            <select id="inputState" className="form-control" name="service">
              <option value>Select-Services</option>
              <option value="digital marketing">Digital Marketing</option>
              <option value="website development">Website Development</option>
              <option value="mobile application development">Mobile Application Development</option>
              <option value="software/CRM">Software /CRM</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputMessage">Message</label>
          <input type="text" className="form-control" id="inputMessage" placeholder name="message" />
        </div>
      </form></div>
    <div className="d-flex justify-content-center">
      <button type="submit" className>Send</button>
    </div>
  </section>
    </div>
  )
}
