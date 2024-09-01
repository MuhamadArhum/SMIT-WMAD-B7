import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Muhamad Arhum</span>
        <div className="links">
          <a href="https://www.instagram.com/muhamad_arhum/">
          <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhamad-arhum-5423aa198/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          
        </div>
        <p className="copyright">
        <i class="fa-brands fa-pagelines"></i>
          Created By Muhamad Arhum
        </p>
      </div>
    </footer>
  );
}

export default Footer;