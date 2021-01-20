import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

import { renderRichText } from "gatsby-source-contentful/rich-text"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw 
      }
    }
  }
`
//json is not available under body.. research how to get the richtext from the body if it's in a raw format

const Blog = (props) => {
    return (
        <Layout>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {renderRichText(props.data.contentfulBlogPost.body.raw)}
        </Layout>
    )
}

export default Blog