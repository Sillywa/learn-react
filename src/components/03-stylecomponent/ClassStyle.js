import "./style.css"
import { DivContainer } from "./styledCss"

const styles = {
  fontSize: "40px",
  color: "red"
}

const ClassStyle = props => {
  return (
    <div >

      <p style={styles}>Hello</p>

      <p style={{color: "blue"}}>React</p>

      <p className="footer">Big</p>

      <DivContainer>world</DivContainer>
    </div>
  )
}

export default ClassStyle