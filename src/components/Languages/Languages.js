import { Link, useI18next } from "gatsby-plugin-react-i18next";
import React from "react";

import './Languages.css'

const Languages = () => {
  const { languages, originalPath } = useI18next();
  return (
    <div>
      <ul className="languages">
        {languages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages
