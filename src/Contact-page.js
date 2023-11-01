import SectionHeader from "./Section-header";
import React from "react";

function ContactPage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    message: "",
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <section>
      <SectionHeader title={"Get In Touch"} />
      <div className="contact-info-container">
        <iframe
          style={{
            width: "100%",
            height: "270px",
            marginBottom: "45px",
          }}
          src="https://maps.google.com/maps?q=orlando%20&t=&z=11&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <div className="location-email-containers">
          <p>Location</p>
          <p>Orlando, Fl, US</p>
        </div>
        <div className="location-email-containers">
          <p>Email</p>
          <p>Danielr0007@yahoo.com</p>
        </div>
      </div>
      <div className="contact-form-outermost-container">
        <SectionHeader title={"Contact Me"} />
        <div className="form-container">
          <form
            name="contact v1"
            method="post"
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="name-email-container">
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="30"
              rows="7"
              placeholder="Type Your Message"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
