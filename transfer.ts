import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Connection, Keypair, LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction, clusterApiUrl, sendAndConfirmTransaction } from "@solana/web3.js";
import "dotenv/config";
import bs58 from "bs58"
// const fromSender = new PublicKey("H1XYazhSujGfN9MhxazjLVdiXDpE7iBoLGGkuSfTzXEm")

// const senderKeypair= getKeypairFromEnvironment("SECRET_KEY");
// console.log(new PublicKey(senderKeypair.publicKey).toBase58())


// Step 2: Decode the base-58 secret key into a Uint8Array
const secretKeyUint8Array = bs58.decode("5gPa2G37Mav6RoSUMsTxyfs8VsHamSbCSbV5F1qVt9M2YbRTtRHKg2giYt2FUUFVu8ceXnttmyMV8V5vWKzkjads");

// Step 3: Create a Keypair using the decoded Uint8Array
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