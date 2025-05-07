import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      
      <div className="contact-form-wrapper">
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              placeholder="Subject"
              required 
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Your Message"
              required 
            ></textarea>
          </div>
          
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
