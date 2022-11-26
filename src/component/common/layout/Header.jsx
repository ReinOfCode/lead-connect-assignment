import { useUserState } from "context";
import { CART_PRODUCT } from "scripts/constants";

function Header() {
  const userState = useUserState();
  console.log();
  return <h1>cart count : {userState[CART_PRODUCT].length}</h1>;
}
export default Header;
