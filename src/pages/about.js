import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = () => {
    return (
        <Layout>
            
                <h1>About me</h1>
                    <p>Here you will find some information about me :)</p>
                    <p>Here is an external link <a href="https://www.twitter.com">Twitter</a></p>
                    <p><Link to="/contact">Contact me</Link></p>
            
        </Layout>
    )
}

export default AboutPage