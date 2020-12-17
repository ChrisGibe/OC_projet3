import React from "react";
import { Trans } from "gatsby-plugin-react-i18next";

import "./News.css";

const News = (props) => {
  return (
    <>
      <div id="actualités" className="news">
        <h2>
          <Trans>Actualités</Trans>
        </h2>
        <div className="posts">{props.posts}</div>
      </div>
    </>
  );
};

export default News;
