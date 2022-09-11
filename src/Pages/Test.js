import * as BS from "react-bootstrap";
import { ethers } from "ethers";
import {BigNumber} from "ethers"




function Test(){

    const ETHEREUM_NETWORK = "goerli";
    const INFURA_API_KEY = "f99bbdcca03245df956b8a682ee15000";
    const SIGNER_PRIVATE_KEY = "9494f9c150ebfd3f3146e97d2bed5630964e32ae7903411e9812b207dde40e46";


    const jsonABI = [


        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "monthlyIncomeParameter",
                    "type": "uint256"
                }
            ],
            "name": "setMonth",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "rentParameter",
                    "type": "uint256"
                }
            ],
            "name": "setRent",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "showParameters",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "circuitChecksum",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "rentParameter",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "monthlyIncomeParameter",
                    "type": "uint256"
                }
            ],
            "name": "verifyProof",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }

    ];

    const contractAddress = "0x20295a03707677F209286E5e1bDd7F0D71d96498";


    const network = ETHEREUM_NETWORK;

    const provider = new ethers.providers.InfuraProvider(
        network,
        INFURA_API_KEY
      );

      // Creating a signing account from a private key
      const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, provider);

            // Read-Only; By connecting to a Provider, allows:
        // - Any constant function
        // - Querying Filters
        // - Populating Unsigned Transactions for non-constant methods
        // - Estimating Gas for non-constant (as an anonymous sender)
        // - Static Calling non-constant methods (as anonymous sender)
        const erc20 = new ethers.Contract(contractAddress, jsonABI, provider);

        // Read-Write; By connecting to a Signer, allows:
        // - Everything from Read-Only (except as Signer, not anonymous)
        // - Sending transactions for non-constant functions
        const erc20_rw = new ethers.Contract(contractAddress, jsonABI, signer);

    

    const balance = provider.getBalance("0x3b04b7Cde1eba8F5c41ac90291D10179094Ac940").then((result) => {
        // console.log(ethers.utils.formatEther(result));
    });

    const setMonth = erc20_rw.setMonth(BigNumber.from("60"));


    const getMonth = erc20.showParameters().then((value) => {
        console.log(value[1].toString());
    })

    // const showPar = erc20.showParameters().then((value) => {
        
    //     console.log(value[0]);

    // });

    // var web3 = new Web3(new Web3.providers.WebsocketProvider("https://goerli.infura.io/v3/f99bbdcca03245df956b8a682ee15000"));

    const handleClick = () => {
        
        // console.log(balance);

        
    }

    


    return(
        <BS.Container>

                <BS.Button variant="primary" onClick={handleClick}>
                    Test Button
                </BS.Button>

        </BS.Container>

    )
}

export default Test;