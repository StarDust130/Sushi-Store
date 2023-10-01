import { Link } from "react-router-dom";
import BannerImage from "../assets/Home-page.jpg";
import "../styles/home.css";


function Home() {
  return (
    <>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>STARDUST SUSHI </h1>
          <p>World Best Sushi</p>
          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
          {"   "}
          <Link to="/contact">
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
