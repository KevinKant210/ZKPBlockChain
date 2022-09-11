import * as BS from "react-bootstrap";
import image from "../assets/niceBackground.jpg";
import {useNavigate} from "react-router-dom";



function HomePage() {
  var sectionStyle = {
    backgroundImage: "url(${image})",
  };

  let navigator = useNavigate();

  const handleClick = () => {
    console.log("Clicked!");
    let path = '/ApartmentPage'
    navigator(path);
  };

  return (
    <div style={sectionStyle}>
      <BS.Container className=" w-100 " style={sectionStyle}>
        <BS.Container className="d-flex justify-content-start bg-dark m-2">
          <BS.Navbar className="bg-dark w-75">
            <BS.Container>
              <BS.Navbar.Brand>
                <BS.Container>
                  <BS.Image
                    src={require("../assets/Gbank.jpg")}
                    className="w-50"
                  />
                </BS.Container>
              </BS.Navbar.Brand>
              <BS.Nav.Link className="p-4">
                <BS.Container className="display-6 text-white">
                  Home
                </BS.Container>
              </BS.Nav.Link>
              <BS.NavDropdown
                title="Account Options"
                className="p-4 display-6 text-white"
              >
                Get Bread!
              </BS.NavDropdown>
              <BS.Nav.Link className="p-4">
                <BS.Container className="display-6 text-white">
                  Settings
                </BS.Container>
              </BS.Nav.Link>
            </BS.Container>
          </BS.Navbar>
        </BS.Container>

        <BS.Container className="bg-dark mt-5 mb-5">
          <BS.Stack direction="horizontal">
            <BS.Stack className="d-flex justify-content-center" gap={5}>
              <BS.Container className="display-6 text-nowrap text-white d-flex justify-content-center">
                Looking for an apartment?
              </BS.Container>

              <BS.Container className="d-flex justify-content-center">
                <BS.Button variant="primary" className="display-6 text-bold" onClick={handleClick}>
                  Click Here to Begin Looking!
                </BS.Button>
              </BS.Container>
            </BS.Stack>

            <BS.Container className="d-flex justify-content-end p-2 m-2 rounded-circle">
              <BS.Image
                src={require("../assets/bImage.webp")}
                className="rounded-pill"
              />
            </BS.Container>
          </BS.Stack>
        </BS.Container>

        <BS.Container>
          <BS.Stack direction="horizontal" className="d-flex justify-content-evenly" gap={3}>

            <BS.Container className='d-flex justify-content-start'>
              <BS.Image src={require("../assets/icons8-document-50.png")} className="w-200"/>

            </BS.Container>

            <BS.Container className="d-flex justify-content-center">
              <BS.Image src={require("../assets/icons8-general-ledger-50.png")} />
            </BS.Container>

            <BS.Container  className='d-flex justify-content-end'>
              <BS.Image src={require("../assets/icons8-man-with-money-50.png")} />
            </BS.Container>

          </BS.Stack>

        </BS.Container>
      </BS.Container>
    </div>
  );
}

export default HomePage;
