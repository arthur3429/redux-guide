import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { loginUser, logoutUser } from "../../redux/user/actions";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";



function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer)
  const dispatch = useDispatch()

  const productsCount = useSelector(selectProductsCount)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({ name: "Arthur", email: "arthur3429@gmail.com"}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }


  return (
    <Styles.HeaderPlaceholder>   
      <Styles.Container>
        <div className="header-wrapper">
        <Styles.Logo><img src="/logo.png" alt="Logo" /></Styles.Logo>
        <Styles.Buttons>
          {currentUser ? <div onClick={handleLogoutClick}>Sair</div> : <div onClick={handleLoginClick}>Login</div>}
          <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
        </Styles.Buttons>

        <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
        </div>
      </Styles.Container>
    </Styles.HeaderPlaceholder>
  );
}

export default Header;
