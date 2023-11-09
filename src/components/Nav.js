// import ProfileMenu from "../ProfileMenu";
import { Link } from "react-router-dom";

function Header() {
    return (
      <>
        <ul className="puce" >
            <li>
              <Link to="/cv">Curriculum Vitae</Link>
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
            <li>
            <Link to="/article">Articles</Link>
            </li>
            {/* <ProfileMenu /> */}
        </ul>
      </>
    )
  }

  export default Header;