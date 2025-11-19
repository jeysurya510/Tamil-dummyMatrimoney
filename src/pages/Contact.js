import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Contact form data:', formData);
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <div className="contact-page py-5 mt-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <div className="page-header text-center animate-fade-in-up">
              <h1 className="premium-title mb-3">Contact Us</h1>
              <p className="premium-subtitle">
                Get in touch with our team for any questions or support
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 mb-4">
            <div className="contact-info animate-slide-in-left">
              <h4 className="mb-4">Get In Touch</h4>
              
              <div className="contact-item mb-4">
                <div className="contact-icon">
                  📍
                </div>
                <div className="contact-details">
                  <h6>Our Office</h6>
                  <p className="text-muted mb-0">
                   Padmanabha Nagar, Choolaimedu<br />
                    Chennai, Tamil Nadu 600026
                  </p>
                </div>
              </div>

              <div className="contact-item mb-4">
                <div className="contact-icon">
                  📞
                </div>
                <div className="contact-details">
                  <h6>Phone Number</h6>
                  <p className="text-muted mb-0">
                    +91 000000000<br />
                    +91 1111111111
                  </p>
                </div>
              </div>

              <div className="contact-item mb-4">
                <div className="contact-icon">
                  ✉️
                </div>
                <div className="contact-details">
                  <h6>Email Address</h6>
                  <p className="text-muted mb-0">
                    support@dummymatrimoney.com<br />
                    info@tamilsangamam.com
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  ⏰
                </div>
                <div className="contact-details">
                  <h6>Working Hours</h6>
                  <p className="text-muted mb-0">
                    Monday - Saturday: 9:00 AM - 8:00 PM<br />
                    Sunday: 10:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="contact-form-card animate-scale">
              <h4 className="mb-4">Send us a Message</h4>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <select
                      className="form-select"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing Issue</option>
                      <option value="profile">Profile Help</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message *
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" />
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
