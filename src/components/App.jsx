import "./App.css";
import ChatApp from "./ChatApp";

const App = () => {
  return (
    <div className="container">
      <header className="header">
        <div className="header-container">
          <img
            className="header-logo"
            src="./assets/images/logo_netconomy_neu_weisz.png"
            alt="Welcome to Netconomy"
          ></img>
        </div>
      </header>

      <div className="main">
        <ChatApp />
      </div>

      <div className="footer">
        <div className="footer-container">
          <img
            src="./assets/images/logo_netconomy_neu_weisz.png"
            alt="Fylo logo"
            class="footer-logo"
          />
          <div className="footer-box">
            <div className="footer-links-box">
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-box">
              <ul className="footer-links">
                <li>
                  <a href="#">Industries</a>
                </li>
                <li>
                  <a href="#">References</a>
                </li>
                <li>
                  <a href="#">Partnerships</a>
                </li>
              </ul>
            </div>
            <div className="footer-links-box">
              <ul className="footer-links">
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Locations</a>
                </li>
                <li>
                  <a href="#">imprint</a>
                </li>
              </ul>
            </div>
            <div className="social-media-box">
              <a href="https://www.facebook.com/" className="facebook-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/?lang=en">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
