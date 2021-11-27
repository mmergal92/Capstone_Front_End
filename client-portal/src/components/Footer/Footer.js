import React from "react";

function Footer() {
  return (
    <section className="footer">
      <hr className="footer-seperator" />
      <section className="footer-top">
      </section>
      <section className="footer-middle">
        <div className ="left-footer">
        <a href ="https://www.itsproof.co/" target="_blank" rel="noopener noreferrer">Proof Agency</a>
          <a href ="https://www.instagram.com/pillsmergs/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div className ="center-footer">
        <a href ="/about">About Us</a>
          maria@itsproof.co
        </div>
        <div className ="right-footer">
        <a href ="/form">Inquiry Form</a>
          Terms + Conditions
        </div>
      </section>
      <section className="footer-bottom">
        <h6>&copy; Maria Mergal. 2021</h6>
      </section>
    </section>
  );
}

export default Footer;
