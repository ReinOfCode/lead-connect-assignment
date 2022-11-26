import Footer from "./Footer";
import Header from "./Header";

function BasicLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
export default BasicLayout;
