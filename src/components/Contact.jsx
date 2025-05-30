import React from 'react';
import '../style.css';

export default function Contact() {
  return (
    <div className="gallery-wrapper" id="contact">
      <div className="slideshow-layout">
        <h1>Contact</h1>
        <p>
          Have a question, project idea, or collaboration in mind? I’d love to hear from you.
          Fill out the form below and I’ll get back to you shortly.
        </p>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          action="/success.html"
        >
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field */}
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>Your Name:<br />
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>Your Email:<br />
              <input type="email" name="email" required />
            </label>
          </p>
          <p>
            <label>Your Message:<br />
              <textarea name="message" rows="5" required></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send Message</button>
          </p>
        </form>
      </div>
    </div>
  );
}
