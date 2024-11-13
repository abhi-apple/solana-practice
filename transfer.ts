import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";
import "dotenv/config";
import bs58 from "bs58"
const base58SecretKey = process.env.SECRET_KEY;
if (!base58SecretKey) {
    throw new Error("SECRET_KEY environment variable is not set");
  }
  

  const secretKeyUint8Array = bs58.decode(base58SecretKey);

const senderKeypair = Keypair.fromSecretKey(secretKeyUint8Array);


const suppliedToPubkey = process.argv[2] || null;
 
if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}
console.log(`suppliedToPubkey: ${suppliedToPubkey}`);
 
const toPubkey = new PublicKey(suppliedToPubkey);

const connection = new Connection(clusterApiUrl("devnet"))

const transaction = new Transaction()

const sendingSOlTransaction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey: toPubkey,
    lamports: 1*LAMPORTS_PER_SOL
})

transaction.add(sendingSOlTransaction);

const signinign = await sendAndConfirmTransaction(connection,transaction,[senderKeypair])


console.log(signinign)