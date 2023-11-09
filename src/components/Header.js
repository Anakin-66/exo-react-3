import ProfileMenu from "../ProfileMenu";

function Header() {
    return (
      <>
        <h1>Mon titre</h1>
        <ul className="puce" >
            <li>Choix 1</li>
            <li>Choix 2</li>
            <li>Choix 3</li>
            <ProfileMenu />
        </ul>
      </>
    )
  }

  export default Header;