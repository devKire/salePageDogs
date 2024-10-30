import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* <div className="footer-section">
          <h3 className="footer-title">Links rápidos</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div> */}

        <div className="footer-section">
          <h3 className="footer-title">Contato</h3>
          <p>Email: amantesdedogs2024@gmail.com</p>
          <p>Whatsapp: +55 47 99953-5245</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Nos siga nas redes sociais</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61567718978193" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Amantes de Dogs. Todos os direitos Reservados.</p>
      </div>
    </footer>
  );
}
