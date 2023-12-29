import "./Nav.css";
import {AiOutlineShoppingCart, AiOutlineUserAdd} from "react-icons/ai";

function Nav() {
  return (
    <nav>
      <div className ="nav-Container">
        <input type = "text" 
        className = "search-Input"
        placeholder ="search"
        />
      </div>
         <div className="profile-Container">
          <a href ="#">
           <AiOutlineShoppingCart className="nav-icons"/>
          </a>
          <a href ="#">
           <AiOutlineUserAdd className="nav-icons"/>
          </a>
         </div>

    </nav>
  )
}

export default Nav;