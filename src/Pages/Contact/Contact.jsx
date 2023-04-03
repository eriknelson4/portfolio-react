import { useState } from 'react';
import Standard from '../../Templates/Standard';
import './Contact.scss';

const submitForm = ((e) => {
  e.preventDefault();



  // $.ajax({
  //   url: 'https://api.staticforms.xyz/submit',
  //   type: "POST",
  //   dataType: 'json',
  //   data: $("#staticform").serialize(),
  //   success: function (result) {
  //     formSuccess();
  //   },
  //   error: function (xhr, resp, text) {
  //     console.error(xhr, resp, text);
  //     formFailure();
  //   }
  // })
});



const Contact = () => {

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'StaticForms - Contact Form',
    honeypot: '', // if any value received in this field, form submission will be ignored.
    message: '',
    replyTo: '@', // this will set replyTo of email to email address entered in the form
    accessKey: '085919e2-8233-4ba3-b8f5-76e6865bb1ff'
  });

  const [response, setResponse] = useState({
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submit')
    try {
      const res = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = await res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
    }
  };

  return (
    <Standard>

      <section id="contact" role="tabpanel" aria-hidden="true">
        <h2>Contact</h2>
        <div className="contact-information">
          <div className="icon-wrap">
            <div className="icon linkedin">
              <a href="https://www.linkedin.com/in/eriknelson4/" title="LinkedIn" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
            <div className="icon email">
              <a href="mailto:erik.nelson4@gmail.com" title="eMail">
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 88.86">
                  <title>eMail</title>
                  <path
                    d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />
                </svg>
              </a>
            </div>
            <div className="icon github">
              <a href="https://github.com/eriknelson4" title="GitHub" target="_blank">
                <svg width="800px" height="800px" viewBox="0 -3.5 256 256" xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMinYMin meet">
                  <g>
                    <path
                      d="M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0" />
                    <path
                      d="M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923M54.027 187.23c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65M58.33 194.39c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069M65.606 202.683c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258M75.01 205.483c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612M85.714 206.67c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86M96.228 206.267c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398" />
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="form-container">
            <div className="form-item form-failure" aria-hidden="true">
              <p>There was an error submitting your form. Please try again later.</p>
            </div>

            <div className="form-item form-success" aria-hidden="true">
              <p>Thank you for your submission. You will hear back from me shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="form-item" aria-hidden="false" id="staticform">
              <input type="hidden" name="accessKey" value="085919e2-8233-4ba3-b8f5-76e6865bb1ff"></input>
              <div className="field name">
                <div className="control">
                  <input onChange={ handleChange } className="input" type="text" name="name" placeholder="Enter Your Name" required></input>
                </div>
              </div>
              <div className="field email">
                <div className="control">
                  <input onChange={ handleChange } className="input" type="email" name="email" placeholder="Enter Your Email" required></input>
                </div>
              </div>
              <div className="field message">
                <div className="control">
                  <textarea onChange={ handleChange } className="textarea" name="message" placeholder="Enter Your Message" required></textarea>
                </div>
              </div>
              <div className="field">
                <button className="block solid" type="Submit">Submit</button>
              </div>
            </form>
          </div>

        </div>

      </section>

    </Standard>
  );
}

export default Contact;