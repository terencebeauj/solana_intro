const {Keypair, Transaction, SystemProgram, LAMPORTS_PER_SOL, sendAndConfirmTransaction, clusterApiUrl, Connection} = require('@solana/web3.js');

let fromKeypair = Keypair.generate();
let toKeypair = Keypair.generate();
let transaction = new Transaction();

transaction.add(
  SystemProgram.transfer({
    fromPubkey: fromKeypair.publicKey,
    toPubkey: toKeypair.publicKey,
    lamports: LAMPORTS_PER_SOL
  })
);

let keypair = Keypair.generate();
let connection = new Connection(clusterApiUrl('testnet'));

sendAndConfirmTransaction(
  connection,
  transaction,
  [fromKeypair]
);