import Layout from "../layouts/Main";
import Link from "next/link";

const RegisterPage = () => (
  <Layout>
    <section className="form-page">
      <div className="container">
        <div className="back-button-section">
          <Link href="/products">
            <a>
              <i className="icon-left"></i> Back to store
            </a>
          </Link>
        </div>

        <div className="form-block">
          <h2 className="form-block__title_signup">
            Create an account and discover the benefits
          </h2>

          <form className="form">
            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="First Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="Last Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input className="form__input" placeholder="Email" type="text" />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                type="Password"
                placeholder="Password"
              />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label
                  htmlFor="check-signed-in"
                  className={`checkbox checkbox--sm`}
                >
                  <input
                    name="signed-in"
                    type="checkbox"
                    id="check-signed-in"
                  />
                  <span className="checkbox__check"></span>
                  <p>
                    I agree to the Google Terms of Service and Privacy Policy
                  </p>
                </label>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--rounded btn--yellow btn-submit"
            >
              Sign up
            </button>

            <p className="form__signup-link">
              <Link href="/login">
                <a href="#">Are you already a member?</a>
              </Link>
            </p>
          </form>

          <img
            style={{
              width: "400px",
              height: "400px",
              marginLeft: "-500px",
              marginTop: "-600px",
            }}
            src="/images/sneakerbox.gif"
            alt="Jordan"
          />

          <img
            style={{
              width: "400px",
              height: "400px",
              marginLeft: "550px",
              marginTop: "-600px",
            }}
            src="/images/sneaker.gif"
            alt="Jordan"
          />
        </div>
      </div>
    </section>
  </Layout>
);

export default RegisterPage;
