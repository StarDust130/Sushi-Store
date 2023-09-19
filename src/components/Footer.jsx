import "./../styles/footer.css"
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <img src="https://img.icons8.com/ios-filled/70/x-coordinate.png" />
        <Facebook />
        <LinkedIn />
      </div>
      <p>
        &copy; CopyRight 2023 by <a href="https://github.com/StarDust130">StarDust</a>
      </p>
    </div>
  );
}
export default Footer