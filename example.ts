import { Connection, LAMPORTS_PER_SOL, PublicKey, clusterApiUrl } from "@solana/web3.js";

// const connection = new Connection("http://localhost:8899")
const connection = new Connection(clusterApiUrl("mainnet-beta"))

const address=new PublicKey("8BseXT9EtoEhBTKFFYkwTnjKSUZwhtmdKY2Jrj8j45Rt");
const balance = await connection.getBalance(address);
const balanceSOl=balance/LAMPORTS_PER_SOL

console.log(`The balance of the account ${address} is: ${balance} SOL ${balanceSOl}`);