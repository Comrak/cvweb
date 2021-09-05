import React from "react"
import "./project.scss"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import BasicLayout from "../layouts/BasicLayout"
import { projects } from "../utils/projects"
import Seo from "../components/Seo/Seo"

export default function Projects() {
  return (
    <BasicLayout menuColor="#4158D0">
      <Seo title="Jose's projects" />
      <Container className="projects">
        <h1>Projectos</h1>

        <Row>
          {projects.map((item, index) => (
            <Col xz={12} sm={4} className="project">
              <Card>
                <div
                  className="image"
                  style={{ backgroundImage: `url("${item.imageCont}")` }}
                ></div>
                {/* <Image className="projectImage" src={item.imageCont} fluid /> */}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                  <a href={item.url} target="blank" rel="noreferrer noopener">
                    <Button variant="primary"> Go to project</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </BasicLayout>
  )
}
