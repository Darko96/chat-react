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
          <div className="logo-box">
            <img
              src="./assets/images/logo_netconomy_neu_weisz.png"
              alt="Fylo logo"
              class="footer-logo"
            />
          </div>

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
          </div>
          <div className="copyright-social-media-box">
            <p className="copyright">© 2022 NETCONOMY</p>
            <div className="social-media-box">
              <a href="#" className="facebook-icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-xing"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
<i class="fa-brands fa-linkedin-in"></i>;
