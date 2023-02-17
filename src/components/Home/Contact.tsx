export default function Contact() {
  return (
    <div className="pp-home-contact pp-section pb-5 pt-5" id="contact">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <div className="section-head">
              <h2
                className="title title-xl"
                data-aos="fade-up"
                data-aos-delay={100}
                title="CONTACT US"
              >
                CONTACT
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="pp-home-contact-content pp-section-body mt-5">
        <div className="container">
          <div className="row justify-content-center align-items-center gutter-vr-50px">
            <div className="col-lg-5 text-center order-lg-first">
              <div
                className="nk-block-contact nk-block-contact-s1"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <ul className="contact-list ps-1">
                {/*  <li data-aos="fade-up" data-aos-delay={300}>
                    <em className="contact-icon fas fa-headset" />
                    <div className="contact-text">
                      <a
                        href="https://helpdesk.com/"
                        target="_blank"
                      >
                        <span>Contact Support</span>
                      </a>
                    </div>
                  </li> */}
                 {/* <li data-aos="fade-up" data-aos-delay={400}>
                    <em className="contact-icon fas fa-paper-plane" />
                    <div className="contact-text">
                      <a href="https://t.me/Avapad" target="_blank">
                        {' '}
                        <span>Join us on Telegram</span>
                      </a>
                    </div>
                  </li> */}
                  <li data-aos="fade-up" data-aos-delay={400}>
                    <em className="contact-icon fab fa-twitter" />
                    <div className="contact-text">
                      <a
                        href="https://twitter.com/AvapadOfficial1"
                        target="_blank"
                      >
                        {' '}
                        <span>Follow our Twitter</span>
                      </a>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={500}>
                    <em className="contact-icon fas fa-globe" />
                    <div className="contact-text">
                      <span>www.avapad.xyz</span>
                    </div>
                  </li>
                </ul>
                <div className="nk-circle-animation nk-df-center white small" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
