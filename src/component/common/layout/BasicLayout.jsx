import Footer from "./Footer";
import Header from "./Header";

function BasicLayout({ children }) {
  <>
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  </>;
}
export default BasicLayout;
