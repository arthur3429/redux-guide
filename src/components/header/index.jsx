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
          <div onClick={handleCartClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256"><path id="icon" fill="#373737" d="M216 60h-37.4a52 52 0 0 0-101.2 0H40a20.1 20.1 0 0 0-20 20v128a20.1 20.1 0 0 0 20 20h176a20.1 20.1 0 0 0 20-20V80a20.1 20.1 0 0 0-20-20Zm-88-16a28 28 0 0 1 25.3 16h-50.6A28 28 0 0 1 128 44Zm84 160H44V84h32v20a12 12 0 0 0 24 0V84h56v20a12 12 0 0 0 24 0V84h32Z"/></svg>
            <div className="circle">
              <span>{productsCount}</span>
            </div>
          </div>
        </Styles.Buttons>

        <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
        </div>
      </Styles.Container>
    </Styles.HeaderPlaceholder>
  );
}

export default Header;
