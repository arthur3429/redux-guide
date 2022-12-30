import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, logoutUser } from "../../redux/user/actions";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";



function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  const dispatch = useDispatch()

  const handleCartClick = () => {
    setCartIsVisible(true);
  };
  console.log(currentUser)
  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Arthur", email: "arthur3429@gmail.com"}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }


  return (
    <Styles.Container>
      <div className="header-wrapper">
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div onClick={handleLogoutClick}>Sair</div> : <div onClick={handleLoginClick}>Login</div>}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
      </div>
    </Styles.Container>
  );
}

export default Header;
