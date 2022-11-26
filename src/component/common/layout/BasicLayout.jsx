import { useUserDispatch, useUserState } from "context";
import { generateUserId } from "context/actions";
import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";

function BasicLayout({ children }) {
  const userState = useUserState();
  const dispatch = useUserDispatch();
  const { id } = userState;
  useEffect(() => {
    if (!id) {
      generateUserId(dispatch);
    }
  }, [id]);

  return (
    <>
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
export default BasicLayout;
