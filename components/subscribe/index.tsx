const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__content">
          {/* <h4>Subscribe to our newsletter and receive exclusive offers every week</h4> */}
          <h4>Đăng ký nhận bản tin của chúng tôi và nhận ưu đãi độc quyền mỗi tuần</h4>
          <form className="subscribe__form">
            <input type="email" placeholder="Địa chỉ Email" />
            <button type="submit" className="btn btn--rounded btn--yellow">Đăng ký</button>
          </form>
        </div>
      </div>
    </section>
  )
};


export default Subscribe