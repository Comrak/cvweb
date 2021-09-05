import React from "react"
import { Link } from "gatsby"
import { container } from "react-bootstrap"
import "./Menu.scss"

export default function Menu(props) {
  const { menuColor } = props 
  return (
    <header
      className="menu"
      style={{ backgroundColor: menuColor || "transparent" }}
    >
      <container>
        <ul>
          <li>
            <Link to="/"> Home </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/skills"> Skills </Link>{" "}
          </li>{" "}
          <li>
            <Link to="/projects"> Projects </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </container>{" "}
    </header>
  )
}
