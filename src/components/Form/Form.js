import React from "react";

import "./Form.css";

const Form = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h2>Préinscription</h2>
      <div id="inscription" className="page">
        <div className="card-form">
          <div className="card-title">Modifier mon profil</div>
          <form className="grid" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"name"}>Nom</label>
              <input type="text" id="lastname" name="lastname" className="form-control" required={true}/>
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"firstname"}>Prénom</label>
              <input type="text" id="firstname" name="firstname" className="form-control" required={true}/>
            </div>
            <div className="form-group form-group-textarea">
              <label className="label" htmlFor={"message"}>Message</label>
              <textarea id="message" name="message" className="form-control" rows="6"></textarea>
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"email"}>Email</label>
              <input type="email" id="email" name="email" className="form-control" required={true}/>
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"phone"}>Téléphone</label>
              <input type="text" id="phone" name="phone" className="form-control" required={true}/>
            </div>
            <div className="full flex flex-end">
              <button className="btn btn-primary" type="submit">
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
