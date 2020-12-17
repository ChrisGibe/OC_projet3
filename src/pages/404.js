import React from 'react';
import {useTranslation, Trans} from 'gatsby-plugin-react-i18next';
import Layout from '../components/Layout/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => {
  const {t} = useTranslation();
  return (
    <Layout>
      <SEO title={t('404 : Non trouvé')} />
      <h1>
        <Trans>INTROUVABLE</Trans>
      </h1>
      <p>
        <Trans>Tu viens d'emprunter une route qui n'existe pas... la tristesse.</Trans>
      </p>
    </Layout>
  );
};

export default NotFoundPage;
