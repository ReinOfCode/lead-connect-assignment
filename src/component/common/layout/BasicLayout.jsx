import Footer from "./Footer";
import Header from "./Header";

function BasicLayout({ children }) {
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
