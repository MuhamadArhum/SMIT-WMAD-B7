import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
          <img src="/images/4db59a2a-8d11-476e-824a-f188819fdc21-fotor-2024090151512.png" alt="Muhamad Arhum" />

          </div>
          <div className="banner-content">
            <h6>Hello, I'm Muhamad Arhum</h6>
            <h3>Front-End Developer</h3>
            <p>
              Hello! I'm Muhamad Arhum, A passionate and dedicated Front-End
              Developer with 01 year of experience crafting engaging and
              intuitive user interfaces. I specialize in translating design
              concepts into interactive, responsive, and high-performance web
              applications that provide seamless user experiences across all
              devices and browsers.
            </p>
            <div className="banner-buttons">
              <a className="btn" href="https://www.linkedin.com/in/muhamad-arhum-5423aa198/">
                About Me
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
