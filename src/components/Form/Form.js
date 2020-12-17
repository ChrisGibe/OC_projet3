import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <>
      <h2>Préinscription</h2>
      <div id="inscription" className="page">
        <div className="card-form">
          <div className="card-title">Modifier mon profil</div>
          <form className="grid" name="contact" method="POST" data-netlify="true">
            <div className="form-group">
              <label htmlFor="lastname">Nom</label>
              <input type="text" id="lastname" name="lastname" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Prénom</label>
              <input type="text" id="firstname" name="firstname" className="form-control" />
            </div>
            <div className="form-group form-group-textarea">
              <label htmlFor="bio">Bio</label>
              <textarea id="bio" name="bio" className="form-control" rows="6"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input type="text" id="phone" name="phone" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Adresse</label>
              <input type="text" id="address" name="address" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="city">Ville</label>
              <input type="text" id="city" name="city" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="postalCode">Code postal</label>
              <input type="text" id="postalCode" name="postalCode" className="form-control" />
            </div>
            <div className="full form-checkboxes">
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="newsletter" />
                <label className="form-check-label" htmlFor="newsletter">
                  Je souhaite recevoir la newsletter
                </label>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="partnerNewsletter" />
                <label className="form-check-label" htmlFor="partnerNewsletter">
                  Je souhaite recevoir la newsletter des partenaires
                </label>
              </div>
            </div>
            <div className="full flex flex-end">
              <button className="btn btn-secondary">Annuler les modifications</button>
              <button className="btn btn-primary" type="submit">Enregistrer mes modifications</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
