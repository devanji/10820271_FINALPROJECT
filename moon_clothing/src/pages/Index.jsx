
import Portfolio from './Portfolio';
import ReactDOM from 'react-dom';
import AllFeatures from '../AllFeatures';
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@mui/material';




const Index = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(true);
  };

  const AllFeaturesDialog = () => (
    <Dialog open={open} fullScreen onClose={handleClose}>
      <DialogContent>
        <AllFeatures />
      </DialogContent>
    </Dialog>
  );
  return(
    <div>

      <header id="header" className="fixed-top d-flex align-items-center">
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet"/>
<link href="/src/assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
<link href="/src/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
<link href="/src/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
<link href="/src/assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
<link href="/src/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
<link href="/src/assets/css/style.css" rel="stylesheet"/>
      <div className="container d-flex align-items-center">
    <div className="logo me-auto">
      <h1><a href=""><img src="/src/assets/img/Beige_Elegant_Aesthetic_Minimalist_Luxury_Brand_Logo__1_-removebg-preview 2.png" alt="" className="img-fluid"/></a></h1>
    </div>

    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
        <li><a className="nav-link scrollto" href="#about">About</a></li>
        <li><a className="nav-link scrollto " href="#portfolio">Shop Latest</a></li>
       
        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle"></i>
    </nav>

    <div className="header-social-links d-flex align-items-center">
      <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
      <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
      <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
    </div>
  </div>

      </header>

        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center text-md-left" data-aos="fade-up">
        <h1>Welcome to <span>MOON CLOTHING </span></h1>
        <h2>A New Way to Experience Digital Fashion</h2>
        <a className="btn-get-started scrollto">Get Started</a>
      </div>
        </section>

      <main id="main">
      <section id="what-we-do" className="what-we-do">
      <div className="container">

        <div className="section-title">
          <h2>What We Do</h2>
          <p>At Moon Clothing Store, we revolutionize the way you shop for clothes online with our state-of-the-art 3D Virtual Fitting Room.</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-bag-heart"></i></div>
              <h4><a href="">Experience Your Perfect Fit</a></h4>
              <p>Our cutting-edge technology allows you to create a personalized 3D modle based on your measurements. Try on garments virtually to see how they look and fit on your own body, from the comfort of your home.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-universal-access"></i></div>
              <h4><a href="">Match with Ease</a></h4>
              <p>Coordinate outfits by matching different pieces. Our virtual fitting room gives you the freedom to experiment with styles and colors, helping you make confident purchasing decisions.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-cart3"></i></div>
              <h4><a href="">Seamless Shopping Experience</a></h4>
              <p>Enjoy a seamless transition from virtual try-on to checkout. Save your favorite looks, share them with friends, or proceed to purchase with just a few clicks.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section id="about" className="about">
      <div className="container">

        <div className="row">
          <div className="col-lg-6">
            <img src="/src/assets/img/about2.png" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <br></br>
            <h3>About Us</h3>
            <p>
            Welcome to Moon Clothing Store, your digital fashion oasis.
            We're revolutionizing the online shopping experience with our cutting-edge 3D Virtual Fitting Room.
            Explore our diverse collection of stylish apparel and accessories, and try them on virtually to ensure the perfect fit. 
            At Moon, we blend innovation with style, offering a seamless, interactive shopping journey. 
            Join us in embracing the future of fashion.
            </p>
         <ul>
              <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
            </ul>
            <div className="row icon-boxes">
              <div className="col-md-6">
                <i className="bx bx-receipt"></i>
                <h4>Corporis voluptates sit</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <i className="bx bx-cube-alt"></i>
                <h4>Ullamco laboris nisi</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    



    <section id="portfolio" className="portfolio">
      <div className="container">

        <div className="section-title">
          <h2>Shop Latest</h2>
          
        </div>

        <div className="row">
          <div className="col-lg-12">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Women's Wear</li>
              <li data-filter=".filter-card">Men's Wear</li>
              <li data-filter=".filter-web">Athletic Wear</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
    
    <div className="col-lg-4 col-md-8 portfolio-item filter-card wow fadeInUp" >
        <div className="portfolio-wrap">
            <figure>
              <img src="/src/assets/img/portfolio/yellow.jpeg" className="img-fluid" alt="Portfolio Image"/>
              <a href="/src/assets/img/portfolio/yellow.jpeg" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview">
                <i className="bx bx-plus"></i>
              </a>
                </figure>
                
            <div  className="portfolio-info">
              <h4 >Classic Canvas Yellow Tee</h4>
              <button onClick={handleOpen}><img width={40} src="https://i.ibb.co/ygJzp5P/Pngtree-try-now-poster-6728160.png" alt=""/></button>
              
              
            </div>
        </div>
    </div>


          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp">
            <div className="portfolio-wrap">
              <figure>
                <img src="/src/assets/img/portfolio/img3.png" className="img-fluid" alt=""/>
                <a href="/src/assets/img/portfolio/img3.png" data-gallery="portfolioGallery" className="link-preview portfolio-lightbox" title="Preview"><i className="bx bx-plus"></i></a>
                <a  className="link-details" title="Try Now"><i className="bi bi-universal-access"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio.tsx">Summer Bloom Button-Up Dress</a></h4>
                <p>Women's Wear</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.1s">
            <div className="portfolio-wrap">
              <figure>
                <img src="/src/assets/img/portfolio/img9.png" className="img-fluid" alt=""/>
                <a href="/src;assets/img/portfolio/img9.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio.tsx" className="link-details" title="Try Now"><i className="bi bi-universal-access"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio-details.html">Crimson Curve Running Top</a></h4>
                <p>Athletic Wear</p>
       
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="/src/assets/img/portfolio/img6.png" className="img-fluid" alt=""/>
                <a href="/src/ssets/img/portfolio/img6.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a  className="link-details" title="Try Now"><i className="bi bi-universal-access"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfolio.tsx">GeoVerve V-Neck Blouse</a></h4>
                <p>Women's Wear</p>
              </div>
            </div>
          </div>

        
         

          <div className="col-lg-4 col-md-6 portfolio-item filter-web wow fadeInUp" data-wow-delay="0.2s">
            <div className="portfolio-wrap">
              <figure>
                <img src="/src/assets/img/portfolio/img10.png" className="img-fluid" alt=""/>
                <a href="/src/assets/img/portfolio/img10.png" className="link-preview portfolio-lightbox" data-gallery="portfolioGallery" title="Preview"><i className="bx bx-plus"></i></a>
                <a href="portfolio.tsx" className="link-details" title="Try Now"><i className="bi bi-universal-access"></i></a>
              </figure>

              <div className="portfolio-info">
                <h4><a href="portfoli.tsx">Women's Gym Outfit</a></h4>
                <p>Athletic Wear</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

<section>
<AllFeaturesDialog />
</section>

    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-5 justify-content-center">

          <div className="col-lg-10">

            <div className="info-wrap">
              <div className="row">
                <div className="col-lg-4 info">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Colombo<br/>Sri Lanka</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>moonclothing@gmail.com<br/>senuridevanji8@gmail.com</p>
                </div>

                <div className="col-lg-4 info mt-4 mt-lg-0">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>011-1234567<br/>076-2345678</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="row mt-5 justify-content-center">
          <div className="col-lg-10">
            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message"  placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    

    <footer id="footer">
        {/* Footer content */}
      </footer>


      </main>

     

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

      <script src="/src/assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="/src/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="/src/assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="/src/assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="/src/assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="/src/assets/vendor/waypoints/noframework.waypoints.js"></script>
  <script src="/src/assets/vendor/php-email-form/validate.js"></script>


  <script src='/src/assets/js/main.js'/>
  
    </div>
  );
};

export default Index;
