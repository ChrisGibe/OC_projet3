import React from 'react';
import {useTranslation} from 'gatsby-plugin-react-i18next';
import { graphql } from "gatsby"

import Layout from '../components/Layout/Layout';
import Festival from '../components/Festival/Festival'
import News from '../components/News/News'
import PostLink from "../components/PostLink/PostLink";
import Movies from "../components/Movies/Movies"
import Form from "../components/Form/Form"

import SEO from '../components/seo';

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const {t} = useTranslation();
  const Posts = edges
  .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  .map((edge) => <PostLink key={edge.node.id} post={edge.node} />);
  return (
    <Layout>
      <SEO title={t('Accueil')} />
      <Festival />
      <News posts={Posts}/>
      <Movies />
      <Form />
    </Layout>
  );
}

export default IndexPage;

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            excerpt
            slug
            image {
              childImageSharp {
                fixed(width: 180, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
            } 
          }
        }
      }
    }
  }
`;