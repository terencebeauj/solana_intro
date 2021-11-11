const solanaWeb3 = require('@solana/web3.js');
const {Keypair} = require('@solana/web3.js');

let keypair = Keypair.generate();

console.log(keypair);