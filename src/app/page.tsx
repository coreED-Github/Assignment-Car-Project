export const metadata ={
  title:"Saira Nasir Web Page"
}
import React from "react"



import { title } from "process"
import Banner from "./banner/page"
import HeroSection from "./heroSection/page"
import Feactured from "./Feactured/page"
import Booking from "./Order/page"
import Footer from "./Footer/page"

export default function Home() {
  return (

<div>
  
  <Banner/>
  <HeroSection/>
  <Feactured/>
  <Booking/>
  <Footer/>
</div>

  )}