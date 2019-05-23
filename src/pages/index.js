import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCartArrowDown } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <FaCartArrowDown />
  </Layout>
)

export default IndexPage
