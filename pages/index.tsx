import Layout from '../layouts/Main'
import PageIntro from '../components/page-intro'
import ProductsFeatured from '../components/products-featured'
import Footer from '../components/footer'
import Subscribe from '../components/subscribe'
import ReviewsFeatured from './../components/reviews-featured/index'
import CheckFeatured from './../components/check-featured/index'
import Download from './../components/download-banner/index'

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: 'url(/images/fbposter.jpg)' }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Fanpage SoleAuthenticity</h3>
              <a href="https://www.facebook.com/soleAuthenticity" className="btn btn--rounded">
                Tham Gia ngay
              </a>
            </div>
          </article>

          <article
            // style={{ backgroundImage: 'url(/images/featured-2.jpg)' }}
            style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/soleauthenticity-8f48f.appspot.com/o/images%2F2b37efd73ccb223ba692ecee8106a259.jpg?alt=media&token=b17576d9-9611-48a4-991b-c0e4b8d5374d)'}}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>New Balance 530 1.850.000đ</h3>
              <a href="#" className="btn btn--rounded">
                Chi tiết
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: 'url(https://w0.peakpx.com/wallpaper/911/543/HD-wallpaper-tiktok-bay-flash-football-green-hulk-lantern-logo-packer-packers-triangle-thumbnail.jpg)' }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>TikTok SoleAuthenticity</h3>
              <a href="https://www.tiktok.com/@soleauthenticity" className="btn btn--rounded">
                Xem Ngay
              </a>
            </div>
          </article>
        </div>
      </section>

      <Subscribe />

      <section className="section">
        <div className="container">
          <ProductsFeatured />

          <header className="section__intro">
            <h4>Lý do chọn SoleAuthenticity?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="650.000000pt" 
                    height="650.000000pt" viewBox="0 0 650.000000 650.000000" 
                    preserveAspectRatio="xMidYMid meet" className="logo">
                  <g transform="translate(0.000000,650.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M2462 4223 c-11 -10 -158 -261 -328 -558 -411 -722 -826 -1448 -1259 
                      -2205 -197 -344 -367 -644 -377 -667 -20 -44 -13 -83 15 -83 7 0 902 -1 1990 -1 
                      1507 0 1982 3 1993 12 8 6 14 21 14 33 0 12 -42 95 -93 186 -121 215 -1039 1818 
                      -1082 1890 -39 65 -290 505 -383 670 -195 349 -409 717 -422 727 -21 17 -45 16 
                      -68 -4z m138 -281 c95 -168 121 -213 218 -373 38 -63 111 -189 162 -280 51 -90 
                      167 -294 258 -454 90 -159 241 -425 335 -590 93 -165 204 -361 247 -435 90 -157 
                      183 -321 265 -470 32 -58 90 -157 129 -220 79 -131 120 -210 112 -218 -7 -6 -25 
                      9 -568 478 -232 201 -486 419 -564 485 -78 66 -256 218 -394 337 -268 231 -290 
                      245 -346 215 -16 -9 -137 -109 -269 -222 -414 -358 -1281 -1100 -1469 -1260 l-59 
                      -50 37 73 c20 40 54 101 75 136 22 35 90 153 151 262 146 258 337 594 463 814 55 
                      96 139 243 185 325 46 83 141 249 210 370 68 121 154 272 190 335 36 63 122 212 
                      192 330 69 118 173 297 230 397 75 131 107 179 116 173 6 -6 48 -76 94 -158z m-28 
                      -1660 c29 -27 136 -120 238 -206 102 -87 212 -182 245 -211 214 -187 938 -810 1098 
                      -943 75 -63 137 -119 137 -124 0 -4 -805 -8 -1790 -8 -1114 0 -1790 4 -1790 9 0 6 
                      24 30 52 54 181 154 1541 1322 1641 1409 42 37 86 68 96 68 11 0 43 -22 73 -48z" 
                      transform="translate(800 800)">
                    </path>
                  </g>
                </svg>
              </i>
              <div className="data-item__content">
                <h4>Uy Tín</h4>
                <p>
                Chúng tôi cam kết đảm bảo tất cả sản phẩm liên kết từ các cửa hàng uy tín là hàng chính hãng.
                </p>
              </div>
            </li>

            <li>
              <i>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="650.000000pt" 
                    height="650.000000pt" viewBox="0 0 650.000000 650.000000" 
                    preserveAspectRatio="xMidYMid meet" className="logo">
                  <g transform="translate(0.000000,650.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M2462 4223 c-11 -10 -158 -261 -328 -558 -411 -722 -826 -1448 -1259 
                      -2205 -197 -344 -367 -644 -377 -667 -20 -44 -13 -83 15 -83 7 0 902 -1 1990 -1 
                      1507 0 1982 3 1993 12 8 6 14 21 14 33 0 12 -42 95 -93 186 -121 215 -1039 1818 
                      -1082 1890 -39 65 -290 505 -383 670 -195 349 -409 717 -422 727 -21 17 -45 16 
                      -68 -4z m138 -281 c95 -168 121 -213 218 -373 38 -63 111 -189 162 -280 51 -90 
                      167 -294 258 -454 90 -159 241 -425 335 -590 93 -165 204 -361 247 -435 90 -157 
                      183 -321 265 -470 32 -58 90 -157 129 -220 79 -131 120 -210 112 -218 -7 -6 -25 
                      9 -568 478 -232 201 -486 419 -564 485 -78 66 -256 218 -394 337 -268 231 -290 
                      245 -346 215 -16 -9 -137 -109 -269 -222 -414 -358 -1281 -1100 -1469 -1260 l-59 
                      -50 37 73 c20 40 54 101 75 136 22 35 90 153 151 262 146 258 337 594 463 814 55 
                      96 139 243 185 325 46 83 141 249 210 370 68 121 154 272 190 335 36 63 122 212 
                      192 330 69 118 173 297 230 397 75 131 107 179 116 173 6 -6 48 -76 94 -158z m-28 
                      -1660 c29 -27 136 -120 238 -206 102 -87 212 -182 245 -211 214 -187 938 -810 1098 
                      -943 75 -63 137 -119 137 -124 0 -4 -805 -8 -1790 -8 -1114 0 -1790 4 -1790 9 0 6 
                      24 30 52 54 181 154 1541 1322 1641 1409 42 37 86 68 96 68 11 0 43 -22 73 -48z" 
                      transform="translate(800 800)">
                    </path>
                  </g>
                </svg>
              </i>
              <div className="data-item__content">
                <h4>Review chất lượng</h4>
                <p>
                Đội ngũ nhận xét chất lượng của chúng tôi giúp khách hàng lựa chọn sản phẩm tốt nhất và phù hợp với nhu cầu của họ.
                </p>
              </div>
            </li>

            <li>
              <i>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="650.000000pt" 
                    height="650.000000pt" viewBox="0 0 650.000000 650.000000" 
                    preserveAspectRatio="xMidYMid meet" className="logo">
                  <g transform="translate(0.000000,650.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M2462 4223 c-11 -10 -158 -261 -328 -558 -411 -722 -826 -1448 -1259 
                      -2205 -197 -344 -367 -644 -377 -667 -20 -44 -13 -83 15 -83 7 0 902 -1 1990 -1 
                      1507 0 1982 3 1993 12 8 6 14 21 14 33 0 12 -42 95 -93 186 -121 215 -1039 1818 
                      -1082 1890 -39 65 -290 505 -383 670 -195 349 -409 717 -422 727 -21 17 -45 16 
                      -68 -4z m138 -281 c95 -168 121 -213 218 -373 38 -63 111 -189 162 -280 51 -90 
                      167 -294 258 -454 90 -159 241 -425 335 -590 93 -165 204 -361 247 -435 90 -157 
                      183 -321 265 -470 32 -58 90 -157 129 -220 79 -131 120 -210 112 -218 -7 -6 -25 
                      9 -568 478 -232 201 -486 419 -564 485 -78 66 -256 218 -394 337 -268 231 -290 
                      245 -346 215 -16 -9 -137 -109 -269 -222 -414 -358 -1281 -1100 -1469 -1260 l-59 
                      -50 37 73 c20 40 54 101 75 136 22 35 90 153 151 262 146 258 337 594 463 814 55 
                      96 139 243 185 325 46 83 141 249 210 370 68 121 154 272 190 335 36 63 122 212 
                      192 330 69 118 173 297 230 397 75 131 107 179 116 173 6 -6 48 -76 94 -158z m-28 
                      -1660 c29 -27 136 -120 238 -206 102 -87 212 -182 245 -211 214 -187 938 -810 1098 
                      -943 75 -63 137 -119 137 -124 0 -4 -805 -8 -1790 -8 -1114 0 -1790 4 -1790 9 0 6 
                      24 30 52 54 181 154 1541 1322 1641 1409 42 37 86 68 96 68 11 0 43 -22 73 -48z" 
                      transform="translate(800 800)">
                    </path>
                  </g>
                </svg>
              </i>
              <div className="data-item__content">
                <h4>Đảm bảo tiền mặt</h4>
                <p>
                Nếu một mặt hàng bị hư hỏng hoặc bạn đã thay đổi ý định, bạn có thể gửi lại mặt hàng đó để được hoàn lại toàn bộ tiền.
                </p>
              </div>
            </li>

            <li>
              <i>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="650.000000pt" 
                    height="650.000000pt" viewBox="0 0 650.000000 650.000000" 
                    preserveAspectRatio="xMidYMid meet" className="logo">
                  <g transform="translate(0.000000,650.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M2462 4223 c-11 -10 -158 -261 -328 -558 -411 -722 -826 -1448 -1259 
                      -2205 -197 -344 -367 -644 -377 -667 -20 -44 -13 -83 15 -83 7 0 902 -1 1990 -1 
                      1507 0 1982 3 1993 12 8 6 14 21 14 33 0 12 -42 95 -93 186 -121 215 -1039 1818 
                      -1082 1890 -39 65 -290 505 -383 670 -195 349 -409 717 -422 727 -21 17 -45 16 
                      -68 -4z m138 -281 c95 -168 121 -213 218 -373 38 -63 111 -189 162 -280 51 -90 
                      167 -294 258 -454 90 -159 241 -425 335 -590 93 -165 204 -361 247 -435 90 -157 
                      183 -321 265 -470 32 -58 90 -157 129 -220 79 -131 120 -210 112 -218 -7 -6 -25 
                      9 -568 478 -232 201 -486 419 -564 485 -78 66 -256 218 -394 337 -268 231 -290 
                      245 -346 215 -16 -9 -137 -109 -269 -222 -414 -358 -1281 -1100 -1469 -1260 l-59 
                      -50 37 73 c20 40 54 101 75 136 22 35 90 153 151 262 146 258 337 594 463 814 55 
                      96 139 243 185 325 46 83 141 249 210 370 68 121 154 272 190 335 36 63 122 212 
                      192 330 69 118 173 297 230 397 75 131 107 179 116 173 6 -6 48 -76 94 -158z m-28 
                      -1660 c29 -27 136 -120 238 -206 102 -87 212 -182 245 -211 214 -187 938 -810 1098 
                      -943 75 -63 137 -119 137 -124 0 -4 -805 -8 -1790 -8 -1114 0 -1790 4 -1790 9 0 6 
                      24 30 52 54 181 154 1541 1322 1641 1409 42 37 86 68 96 68 11 0 43 -22 73 -48z" 
                      transform="translate(800 800)">
                    </path>
                  </g>
                </svg>
              </i>
              <div className="data-item__content">
                <h4>Chất lượng tốt nhất</h4>
                <p>
                Các sản phẩm mà chúng tôi cung cấp đều đảm bảo chất lượng tốt, sử dụng những vật liệu tốt nhất và bền bỉ theo thời gian.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ReviewsFeatured />

      <section className="Authen-content">
        <div className="site-footer__description" style={{
          marginBottom: "65px",
        }}>
          <h6>
            <a>
              <div
                style={{
                  fontSize: '40px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  color: 'orange',
                }}
              >
                Xác thực
              </div>
              <br />
              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 'normal',
                  textAlign: 'center',
                  color: 'black',
                }}
              >
                Giày thương hiệu yêu thích của bạn
              </div>
            </a>
          </h6>
        </div>
        <div className="logo-content">
          <img className="brand-img" src="\brand-img\nike.png" alt="nike" />
          <img
            className="brand-img"
            src="\brand-img\Adidas.png"
            alt="black logo nike background @transparentpng.com"
          />
          <img
            className="brand-img"
            src="\brand-img\newBlance.png"
            alt="black logo nike background @transparentpng.com"
          />
          <img
            className="brand-img"
            src="\brand-img\vans.png"
            alt="black logo nike background @transparentpng.com"
          />
          <img
            className="brand-img"
            src="\brand-img\puma.png"
            alt="black logo nike background @transparentpng.com"
          />
          <img
            className="brand-img"
            src="\brand-img\jordan.png"
            alt="black logo nike background @transparentpng.com"
          />
        </div>
      </section>

      <CheckFeatured />

      <Download />
      <Footer />
    </Layout>
  )
}

export default IndexPage
