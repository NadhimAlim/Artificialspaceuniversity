// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  const MessageContract = await hre.ethers.getContractFactory("MessageContract");
  const messageContract = await MessageContract.deploy("Halo dari Blockchain!");
  await messageContract.deployed();

  console.log("✅ Contract deployed to:", messageContract.address);
}

main().catch((error) => {
  console.error("❌ Deployment failed:", error);
  process.exitCode = 1;
});
