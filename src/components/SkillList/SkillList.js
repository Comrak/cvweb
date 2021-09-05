import React from "react"
import "./SkillList.scss"
import loadable from "@loadable/component"

const SkillBar = loadable(() => import("react-skillbars"))

export default function SkillList(props) {
  const { skills, colors } = props
  return (
    <div className="list-skills">
      <SkillBar
        skills={skills}
        animationDelay={0}
        animationDuration={1500}
        colors={colors}
      />
    </div>
  )
}
