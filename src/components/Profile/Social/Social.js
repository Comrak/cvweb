import React from "react"
import TwitterIcon from "../../../images/icons/twitter.inline.svg"
import FacebookIcon from "../../../images/icons/facebook.inline.svg"
import InstaIcon from "../../../images/icons/instagram.inline.svg"
import LinkedinIcon from "../../../images/icons/linkedin.inline.svg"
import WebIcon from "../../../images/icons/web.inline.svg"
import "./Social.scss"

export default function Social() {
  const socialData = [
    { icon: <TwitterIcon />, ref: "https://twitter.com/Comrak" },
    { icon: <FacebookIcon />, ref: "https://www.facebook.com/jose.nardulli/" },
    { icon: <InstaIcon />, ref: "https://www.instagram.com/comrak/" },
    {
      icon: <LinkedinIcon />,
      ref: "https://www.linkedin.com/in/josenardulli/",
    },
    { icon: <WebIcon />, ref: "https://tincode.es/" },
  ]
  return (
    <div className="social">
      {socialData.map((item, index) => (
        <a
          key={index}
          href={item.ref}
          target="_blank"
          rel="noreferrer noopener"
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}
