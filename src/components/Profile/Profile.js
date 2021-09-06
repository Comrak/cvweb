import React from "react"
import { Row, Col, Container, Image } from "react-bootstrap"
import Social from "./Social/Social"
import profileAvatar from "../../images/avatar.jpeg"
import "./profile.scss"

export default function Profile() {
  const personalData = [
    { title: "Age", info: "33" },
    { title: "city of residence", info: "Argentina" },
    { title: "E-Mail", info: "JoseNardulli@gmail.com" },
    { title: "Phone", info: "555-557-5rriente" },
  ]
  return (
    <div className="profile">
      <div className="wallpaper"></div>
      <div className="dark"></div>
      <Container className="box">
        <Row className="info">
          <Col xs={12} md={4}>
            <Image src={profileAvatar} fluid />
          </Col>

          <Col xs={12} md={8} className="info__data">
            <span>Hello!</span>
            <p>Jose R. Nardulli C.</p>
            <p>Fullstack Developer</p>
            <hr />
            <div className="more-info">
              {personalData.map((item, index) => (
                <div key={index} className="item">
                  <p>{item.title}</p>
                  <p>{item.info}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Social />
      </Container>
    </div>
  )
}
