import React from "react"
import { Container } from "react-bootstrap"
import "./skills.scss"
import BasicLayout from "../layouts/BasicLayout"
import ListSkills from "../components/SkillList/SkillList"
import {
  frontendSkills,
  frontEndSkillsColors,
  backEndSkillsColors,
  backtendSkills,
} from "../utils/skills"
import Seo from "../components/Seo/Seo"

export default function Index() {
  return (
    <BasicLayout menuColor="#450442">
      <Seo title="Jose's Skills" />
      <Container className="skills">
        <div className="front">
          <h2>Frontend</h2>
          <ListSkills skills={frontendSkills} colors={frontEndSkillsColors} />
          <h2>Backend</h2>
          <ListSkills skills={backtendSkills} colors={backEndSkillsColors} />
        </div>
      </Container>
    </BasicLayout>
  )
}
