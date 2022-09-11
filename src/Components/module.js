

export function helloWorld(){
    return "hello world";
}

export function getABI(){
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

    return jsonABI;
}

export function getKeyInfo(key){

    const ETHEREUM_NETWORK = "goerli";
    const INFURA_API_KEY = "f99bbdcca03245df956b8a682ee15000";
    const SIGNER_PRIVATE_KEY = "9494f9c150ebfd3f3146e97d2bed5630964e32ae7903411e9812b207dde40e46";

    if(key == "network"){
        return ETHEREUM_NETWORK;
    }else if(key == "api"){
        return INFURA_API_KEY;
    }else if(key == "private"){
        return SIGNER_PRIVATE_KEY;
    }else{
        return ETHEREUM_NETWORK;
    }

    
}

export function getContractAddress(){
    const contractAddress = "0x20295a03707677F209286E5e1bDd7F0D71d96498";
    
    return contractAddress;
}

export function getUserData(request){
    return true;
}

export function runZKSnarkProtocol(input){
    if(input == "CrossingCampus"){
        return false
    }

    return true;
}





