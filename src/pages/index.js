import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCartArrowDown } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Perfect blend Coffee House</h1>
    <p>Come and enjoy our awesome coffees</p>
    <FaCartArrowDown />
  </Layout>
)

export default IndexPage
