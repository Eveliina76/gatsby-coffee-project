import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCartArrowDown } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to coffee house</h1>
    <p>Please enjoy our awsome coffee blends</p>
    <FaCartArrowDown />
  </Layout>
)

export default IndexPage
