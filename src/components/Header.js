import ProfileMenu from "../ProfileMenu";
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
      <>
        <h1>Mon titre</h1>
        <ul className="puce" >
            <li>
              Choix 1
            </li>
            <li>
              <Link to="/contact">Contacts</Link>
            </li>
            <li>
              Choix 3
            </li>
            <ProfileMenu />
        </ul>
      </>
    )
  }

  export default Header;