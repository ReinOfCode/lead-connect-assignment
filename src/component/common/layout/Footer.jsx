const date = new Date().getFullYear();

function Footer() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h4>{date}</h4>
      </div>
    </>
  );
}

export default Footer;
