import Logo from '../../assets/icons/logo'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo />{' '}
              <a>
                <div style={{ fontSize: '18px' }}>
                  <span>Sole</span>Authenticity
                </div>
                <br />
                <div style={{ fontSize: '10px' }}>
                  Identity - Responsibility - Prestige
                </div>
              </a>
            </h6>
            <p>
              SoleAuthenticity cung cấp cho khách hàng những mặt hàng chất lượng và tốt nhất từ những cửa hàng đã liên kết với chung 
              - quan trọng nhất là hàng chính hãng
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="https://www.facebook.com/soleAuthenticity">
                <img
                    src="/images/icons/fb.png"
                    alt="FaceBook"
                    className="icon-tiktok"
                    style={{width: '40px', height: '30px'}}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@soleauthenticity">
                  <img
                    src="/images/icons/tiktok.png"
                    alt="TikTok"
                    className="icon-tiktok"
                    style={{width: '30px', height: '30px'}}
                  />
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <i className="icon-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play"></i>
                </a>
              </li> */}
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Shopping online</li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shipping and Delivery</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Payment options</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>Information</li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
              <li>
                <a href="#">Find a store</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Bacome a member</a>
              </li>
              <li>
                <a href="#">Site feedback</a>
              </li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>
                <a href="#">soleauthenticity.sa@gmail.com</a>
              </li>
              <li>
                <a href="#">Hotline: 077 916 0158</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
