import { Link } from 'react-router-dom';
import "./Home.css"
import Profile from "./Profile"
import LinkButton from "./LinkButton" 
import slackImg from "../assets/slack.svg"
import githubImg from "../assets/github.svg"
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import cursor from "../assets/cursor.svg"
import Tooltip from "../assets/Tooltip.svg"

const Home = () => {
  return (
    <div className="App">
      <div className="overall-top">
        <div className="section">

        <div className="share-container" tabindex="1">
        <RiShareForwardLine className="svg1" />
        <BsThreeDots className="svg2" />

        <span className="tooltiptext">
          {" "}
          <img src={Tooltip} alt="tooltip" width={90} />
        </span>

        <span className="cursor">
          <img src={cursor} alt="cursor" width={20} />
        </span>
      </div>

          <Profile/>

          <div className="links">
            <LinkButton id="twitter-link" link="https://twitter.com/Just_sammie00?t=-7Bxf_7J_iD8V8ITpEA38w&s=09" field="Twitter Link" />
            <LinkButton id="btn__zuri" link="https://training.zuri.team/" field="Zuri Team"/>
            <LinkButton id="books" link="https://books.zuri.team/" field="Zuri Books"/>
            <LinkButton id="book__python" link="https://books.zuri.team/python-for-beginners?ref_id=Sammie" field="Python Books"/>
            <LinkButton id="pitch" link="https://background.zuri.team" field="Background check for coders"/>
            <LinkButton id="book__design" link="https://books.zuri.team/design-rules"field="Design Books"/>
            <Link to="/contact"><LinkButton id="contact" field="Contact Me"/></Link>
           
          </div>
        </div>
      </div> 
      <div className="footer-one-container">
        <div className='first-footer'>
          <div className="sub">
            <img src={slackImg} alt="Slack Image" />
            <a href="https://github.com/AkaSamuel19"><img src={githubImg} alt="" /></a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;
