import { Link } from "react-router-dom";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const Navbar = () => {
  function getDateFoo(): string {
    const todaysDate = new Date();
    const dateInSTring = todaysDate.toLocaleDateString();
    const timeInString = todaysDate.toLocaleTimeString();
    const day = todaysDate.getDay();
    return `${dateInSTring} ${timeInString} ${day}`;
  }

  const todatsDate = getDateFoo();
  console.log("todat date", todatsDate);
  // const [showLinks, setShowLinks] = useState(false);

  return (
    <>
      <>
        {/* <div className="navbar_container">
          <Link to="/">National</Link>
          <Link to="/sports">Sports</Link>
          <Link to="/entertrainment">Entertrainment</Link>

          <Link to="/about">About</Link>
          <Link to="/comments">Comments</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/countryDetails">Country</Link>

          <Link to="/cart" style={{ position: "relative" }}>
            <ShoppingCartIcon />

            <div
              style={{
                width: "25px",
                height: "25px",
                position: "absolute",
                top: "11px",
                left: "20px",
                // backgroundColor: "red",
                borderRadius: "100%",
                border: "1px solid black",
                textAlign: "center",
              }}
            >
              1
            </div>
          </Link>
        </div> */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  justify-content-center  text-decoration-none">
                <li className="nav-item m-4 p-1 text-decoration-none ">
                  <Link to="/">National</Link>
                </li>
                <li className="nav-item m-4 p-1 text-decoration-none">
                  <Link to="/entertrainment">Entertrainment</Link>
                </li>
                <li className="nav-item m-4 p-1 text-decoration-none">
                  <Link to="/sports">Sports</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>

      <div className="time">
        <p style={{ textAlign: "right", margin: "10px", font: "16px" }}>
          {" "}
          {todatsDate}{" "}
        </p>
      </div>
    </>
  );
};

export default Navbar;
