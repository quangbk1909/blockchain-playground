const abi = require('./abi');
const Web3 = require('web3');
const { ethers, BigNumber, Contract } = require("ethers");

var url = 'https://data-seed-prebsc-1-s1.binance.org:8545/'; 
var web3 = new Web3(url);


var smartContractAddr = '0x173BA18018c3EB69A2df9C1F9E7eab5aA2C45676';
var ownerAddr = '0xD0B6e8f25ceCff3fa021384DeF6f3F80Df07688b';
var receiverAddr = '0xC137646d6A081b3a97DFEC6CfF4427Efde24a7c5';


const provider = new ethers.providers.Web3Provider(web3.currentProvider);
const signer = provider.getSigner(smartContractAddr);
signer.getBalance().then(balance => {
    console.log(" Balance: ", balance.toString())
}).catch(err => console.log(err));

const bep20 = new ethers.Contract(smartContractAddr, abi.abi, signer);


bep20.symbol().then(resp => {
    console.log(resp);
}).catch(err => console.log(err))




