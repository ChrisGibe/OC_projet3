import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <>
      <h2>Préinscription</h2>
      <div id="inscription" className="page">
        <div className="card-form">
          <div className="card-title">Remplir le formulaire</div>
          <form className="grid" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <div hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"lastname"} required={true}>
                Nom
              </label>
              <input type="text" id="lastname" name="lastname" className="form-control" required={true} />
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"firstname"}>
                Prénom
              </label>
              <input type="text" id="firstname" name="firstname" className="form-control" required={true} />
            </div>
            <div className="form-group form-group-textarea">
              <label className="label" htmlFor={"message"}>
                Message
              </label>
              <textarea id="message" name="message" className="form-control" rows="6"></textarea>
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"email"}>
                Email
              </label>
              <input type="email" id="email" name="email" className="form-control" required={true} />
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"phone"}>
                Téléphone
              </label>
              <input type="text" id="phone" name="phone" className="form-control" required={true} />
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"seance"}>
                Séance
              </label>
              <select type="select" id="seance" name="seance" className="form-control" required={true}>
                <option value="Le professionnel 05/08 18h">Le professionnel 05/08 18h</option>
                <option value="Léon 05/08 21h">Léon 05/08 21h</option>
                <option value="Tchao pantin 06/08 18h">Tchao pantin 06/08 18h</option>
                <option value="La chèvre 06/08 21h">La chèvre 06/08 21h</option>
                <option value="Garde à vue 07/08 18h">Garde à vue 07/08 18h</option>
                <option value="Le nom de la rose 07/08 21h">Le nom de la rose 07/08 21h</option>
                <option value="Le nom de la rose 08/08 18h">Le nom de la rose 08/08 18h</option>
              </select>
            </div>
            <div className="form-group">
              <label className="label" htmlFor={"number"}>
                Nombre de personnes
              </label>
              <select type="select" id="number" name="number" className="form-control" required={true}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select>
            </div>
            <div className="full flex flex-end">
              <button className="btn-form btn-primary" type="submit">
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
