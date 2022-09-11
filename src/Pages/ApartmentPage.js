import * as BS from "react-bootstrap";
import {getABI,getKeyInfo,getContractAddress,runZKSnarkProtocol} from "../Components/module";
import {useNavigate} from "react-router-dom";
import {ethers} from "ethers";
import {BigNumber} from "ethers";
import {useState} from 'react';


// function checkProof(apartmentName,downPayment,monthlyRent){
//   const provider = new ethers.providers.InfuraProvider(
//     getKeyInfo("network"),
//     getKeyInfo("api")
//   );

//   const signer = new ethers.Wallet(getKeyInfo("private"),provider);

//   const erc20 = new ethers.Contract(getContractAddress(),getABI(),provider);

//   const erc20_rw = new ethers.Contract(getContractAddress(),getABI(),signer);

  

  

//   const getMonth = erc20.showParameters().then((value) => {
//     console.log(value[0].toString());
//   });

//   var result = null;
//     const runValidationCircuit = runZKSnarkProtocol(apartmentName);
    
//     console.log("running");

//     console.log("Writing to contract...");
//       const setMonth = erc20_rw.setMonth(BigNumber.from(monthlyRent));
//       const setRent = erc20_rw.setRent(BigNumber.from(downPayment));
//       console.log("Completed Contract Writing!");

//       console.log("Values are ...");
//       erc20.showParameters().then((value)=> {
//         console.log(value[0].toString());
//         console.log(value[1].toString());
        
//       }).catch(error => console.log("Mo Money My Man!"));

//      console.log("Here!");

//       erc20.verifyProof(BigNumber.from(69),BigNumber.from(downPayment),BigNumber.from(monthlyRent)).then((value)=>{
//         console.log("Decision");
//         console.log(apartmentName);
//         console.log(value);
        
//       }).catch(error => console.log("Mo Money My Man!"));

//       if(runValidationCircuit == true){
//         //apartment get
//       }else{
//         //fold
//       }
// }

function ApartmentPage() {
  const accountSid = "ACe32295bb42f6cd42eb7b5b0acdebd16a";
const authToken = "88d42d46b67dbe722aeae396f1e2c6d9";
// const client = require('twilio')(accountSid, authToken);

// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+12058801587',
//      to: '+4077855196'
//    })
//   .then(message => console.log(message.sid));

  const[checkValid,setCheckValid] = useState(false);
  const[verify,setVerify] = useState();

  // function verifyApartment(apartmentName,downPayment,monthlyRent){

    

  //   if(checkValid == false){
  //     return;
  //   }else{
  //     // checkProof(apartmentName,downPayment,monthlyRent)
  //   }

  
  // }

  
  let navigator = useNavigate();

  const handleFunction = (apartmentName,downPayment,monthlyRent) => {
    const provider = new ethers.providers.InfuraProvider(
      getKeyInfo("network"),
      getKeyInfo("api")
    );
  
    const signer = new ethers.Wallet(getKeyInfo("private"),provider);
  
    const erc20 = new ethers.Contract(getContractAddress(),getABI(),provider);
  
    const erc20_rw = new ethers.Contract(getContractAddress(),getABI(),signer);
  
    
  
    
  
    const getMonth = erc20.showParameters().then((value) => {
      console.log(value[0].toString());
    });
  
    var result = null;
      const runValidationCircuit = runZKSnarkProtocol(apartmentName);
      
      console.log("running");
  
      console.log("Writing to contract...");
        const setMonth = erc20_rw.setMonth(BigNumber.from(monthlyRent));
        const setRent = erc20_rw.setRent(BigNumber.from(downPayment));
        console.log("Completed Contract Writing!");
  
        console.log("Values are ...");
        erc20.showParameters().then((value)=> {
          console.log("Showing Values");
          console.log(value[0].toString());
          console.log(value[1].toString());

          
          
        }).catch(error => console.log("Mo Money My Man!"));
  
       console.log("Here!");
  
        erc20.verifyProof(BigNumber.from(69),BigNumber.from(downPayment),BigNumber.from(monthlyRent)).then((value)=>{
          
          
        }).catch(error => console.log("Mo Money My Man!"));
  
        if(runValidationCircuit == true){
          //apartment get
         console.log("Congrats you are Approved for " + apartmentName);
        }else{
          //fold
          console.log("Sorry You Were not approved for " + apartmentName);
        }
  } 

  const handleClick = () => {
    console.log("Clicked!");
    let path = '/Test'
    navigator(path);
  };

  return (
    <BS.Container>
      <BS.Container className="d-flex justify-content-start bg-dark m-2">
        <BS.Navbar className="bg-dark w-75 d-flex justify-content-evenly">
          <BS.Container className="d-flex justify-content-evenly border-primary">
            <BS.Navbar.Brand>
              <BS.Container className="d-flex justify-content-start">
                <BS.Image
                  src={require("../assets/Gbank.jpg")}
                  className="w-25 rounded-circle"
                />
              </BS.Container>
            </BS.Navbar.Brand>
            <BS.Nav.Link className="p-4 d-flex justify-content start">
              <BS.Container className="fs-3 text-bold text-white">
                Home
              </BS.Container>
            </BS.Nav.Link>
            <BS.NavDropdown
              title="Account Options"
              className="p-4 text-white fs-3 text-bold"
            >
              Get Bread!
            </BS.NavDropdown>
            <BS.Nav.Link className="p-4">
              <BS.Container className="fs-3 text-bold text-white">
                Settings
              </BS.Container>
            </BS.Nav.Link>
          </BS.Container>
        </BS.Navbar>
      </BS.Container>
      <BS.Container className="border bg-dark">
        <BS.Carousel>
          <BS.CarouselItem className="">
            <BS.Container className="d-flex">
              <BS.Stack>
                <BS.Stack direction="horizontal" className="d-flex ">
                  <BS.Container className="text-white fs-3 fst-italic text-wrap p-5 m-5">
                    <BS.Stack className="m-1 pl-5" gap={3}>
                      <BS.Container className="text-white fs-3 fst-italic">
                        Apt Info
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Apartment: LandTower Living
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Price: 2399$
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Down Payment: 2400$
                      </BS.Container>
                    </BS.Stack>
                  </BS.Container>

                  <BS.Container className="w-100">
                    <BS.Image
                      src={require("../assets/apt1.jpg")}
                      className="d-flex justify-content-end w-100"
                    />
                  </BS.Container>
                </BS.Stack>

                <BS.Container className="d-flex justify-content-center m-3 p-4">
                  <BS.Button onClick={e => handleFunction("LandTower Living",2400,2399)}>Get Approved!</BS.Button>
                </BS.Container>
              </BS.Stack>
            </BS.Container>
          </BS.CarouselItem>
          <BS.CarouselItem className="">
            <BS.Container className="d-flex">
              <BS.Stack>
                <BS.Stack direction="horizontal" className="d-flex ">
                  <BS.Container className="text-white fs-3 fst-italic text-wrap p-5 m-5">
                    <BS.Stack className="m-1 pl-5" gap={3}>
                      <BS.Container className="text-white fs-3 fst-italic">
                        Apt Info
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Apartment: SwagPartments
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Price:3000$
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Down Payment: 2600$
                      </BS.Container>
                    </BS.Stack>
                  </BS.Container>

                  <BS.Container className="w-100">
                    <BS.Image
                      src={require("../assets/apt2.jpg")}
                      className="d-flex justify-content-end w-100"
                    />
                  </BS.Container>
                </BS.Stack>

                <BS.Container className="d-flex justify-content-center m-3 p-4">
                  <BS.Button onClick={e => handleFunction("SwagPartments",2600,3000)}>Get Approved!</BS.Button>
                </BS.Container>
              </BS.Stack>
            </BS.Container>
          </BS.CarouselItem>

          <BS.CarouselItem className="">
            <BS.Container className="d-flex">
              <BS.Stack>
                <BS.Stack direction="horizontal" className="d-flex ">
                  <BS.Container className="text-white fs-3 fst-italic text-wrap p-5 m-5">
                    <BS.Stack className="m-1 pl-5" gap={3}>
                      <BS.Container className="text-white fs-3 fst-italic">
                        Apt Info
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Apartment: CrossingCampus
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Price: 3500$
                      </BS.Container>

                      <BS.Container className="text-white fs-3 fst-italic text-wrap">
                        Down Payment: 4000$
                      </BS.Container>
                    </BS.Stack>
                  </BS.Container>

                  <BS.Container className="w-100">
                    <BS.Image
                      src={require("../assets/apt3.jpg")}
                      className="d-flex justify-content-end w-100"
                    />
                  </BS.Container>
                </BS.Stack>

                <BS.Container className="d-flex justify-content-center m-3 p-4">
                  <BS.Button onClick={e => handleFunction("CrossingCampus",4000,3500)}>Get Approved!</BS.Button>
                </BS.Container>
              </BS.Stack>
            </BS.Container>
          </BS.CarouselItem>
        </BS.Carousel>
      </BS.Container>

      {/* <BS.Button variant="primary" onClick={handleClick}>
        Go To Test Area
      </BS.Button> */}
    </BS.Container>
  );
}

export default ApartmentPage;
