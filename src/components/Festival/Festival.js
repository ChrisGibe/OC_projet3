import React from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Festival.css";

const SectionFirst = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "carousel" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };
  return (
    <div id="festival" className="section-first">
      <h2>
        <Trans>Le festival</Trans>
      </h2>
      <div className="container-section-first">
        <div className="description">
          <h3>
            <Trans>Qui sommes nous ?</Trans>
          </h3>
          <p>
            <Trans>
              Notre jeune association "Les films de plein air" a pour but de partager notre passion pour le 7ème Art en pleine nature. Nous vous invitons donc
              du 5 au 8 août au parc Monceau à Paris pour découvrir notre sélection de film qui sera diffusé de 18H à minuit. L'entrée est gratuite et ouverte à
              tous. Cette année nous avons choisi comme thème "les classiques du cinéma français". Venez nombreux partager notre passion du cinéma !
            </Trans>
          </p>
          <h3>
            <Trans>Le lieu du festival</Trans>
          </h3>
          <p style={{ textAlign: `center` }}>35 Boulevard de Courcelles 75008 Paris</p>
        </div>
        <div className="container-carousel">
          <Slider {...settings}>
            {
              data.allFile.edges.map((item) => {
                return <div key={item.node.id}>
                  <Img key={item.node.id} fluid={item.node.childImageSharp.fluid} />
                </div>
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionFirst;
