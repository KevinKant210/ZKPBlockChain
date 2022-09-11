
function getABI(){
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

export default getABI;