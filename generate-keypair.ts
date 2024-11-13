import { getKeypairFromEnvironment } from "@solana-developers/helpers";
import { Keypair } from "@solana/web3.js";
import "dotenv/config";
// const keygen=Keypair.generate()
// console.log(`The public key is: `, keygen.publicKey.toBase58());
// console.log(`The public key is: `, keygen.publicKey);
// console.log(`The secret key is: `, keygen.secretKey);
// console.log(`✅ Finished!`);
const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log(
    `✅ Finished! We've loaded our secret key securely, using an env file!`,keypair
  );