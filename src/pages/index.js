import React from "react"
import BasicLayout from "../layouts/BasicLayout"
import About from "../components/About/About"
import Profile from "../components/Profile/Profile"
import "./index.scss"
import Seo from "../components/Seo/Seo"

export default function Index() {
  return (
    <BasicLayout>
      <Seo title="Jose's Home Page" />
      <Profile />
      <About />
    </BasicLayout>
  )
}
