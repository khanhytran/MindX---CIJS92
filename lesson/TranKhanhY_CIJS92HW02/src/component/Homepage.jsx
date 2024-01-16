import React from 'react'
import Footer from './Footer'
import Navigation from './Navigation'
import Banner from './Banner'
import Content from './Content'
import Twitter_feed from './Twitter_feed'

export default function Homepage() {
  return (
    <div>
      <Navigation/>
      <Banner/>
      <Content/>
      <Twitter_feed/>
      <Footer/>
    </div>
    
  )
}
