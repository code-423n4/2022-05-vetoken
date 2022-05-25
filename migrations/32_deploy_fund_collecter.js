//const veToken = artifacts.require("veToken");
const veTokenSeed = artifacts.require("veSeedVesting");
const { constants } = require("@openzeppelin/test-helpers");
const BigNumber = require("bignumber.js");
const { logTransaction } = require("./helper/logger.js");

function toBN(number) {
  return new BigNumber(number);
}

module.exports = async function (deployer, network, accounts) {
  const owner = "0xA2A379A34cc30C69AB5597bb1C4B6C5C8b23d87e";

  //vetoken
  await deployer.deploy(veToken);
  let vetoken = await veToken.deployed();
  console.log("vetoken address ", vetoken.address);

  // set operaotr

  logTransaction(await vetoken.setOperator(owner), "transfer ownership");

  const ben1 = "0x0b0f171A90f2620062bC559255E90a914aD10A0e";
  const ben2 = "0x672A5BC69526569a1A730988f938ecF647009039";
  const ben3 = "0x2c820c909b9f6fe6a62327615F0d0Cb58c709baA";
  const ben4 = "0x273E9C8198378640F5f007379034b5fa201eF119";
  const ben5 = "0xdD8689422baff692e1AF24C10DAa9038D8898F90";

  const vetokenAddress = "0x1F209ed40DD77183e9B69c72106F043e0B51bf24";

  await deployer.deploy(veTokenSeed, ben1, vetokenAddress, toBN("1649235600"), toBN(46915200));
  let vetokenSeed1 = await veTokenSeed.deployed();
  console.log("vetokenSeed1 address ", vetokenSeed1.address);
  logTransaction(await vetokenSeed1.transferOwnership(owner), "transfer ownership");

  await deployer.deploy(veTokenSeed, ben2, vetokenAddress, toBN("1649235600"), toBN(46915200));
  let vetokenSeed2 = await veTokenSeed.deployed();
  console.log("vetokenSeed2 address ", vetokenSeed2.address);
  logTransaction(await vetokenSeed2.transferOwnership(owner), "transfer ownership");

  await deployer.deploy(veTokenSeed, ben3, vetokenAddress, toBN("1649235600"), toBN(46915200));
  let vetokenSeed3 = await veTokenSeed.deployed();
  console.log("vetokenSeed3 address ", vetokenSeed3.address);
  logTransaction(await vetokenSeed3.transferOwnership(owner), "transfer ownership");

  await deployer.deploy(veTokenSeed, ben4, vetokenAddress, toBN("1649235600"), toBN(46915200));
  let vetokenSeed4 = await veTokenSeed.deployed();
  console.log("vetokenSeed4 address ", vetokenSeed4.address);
  logTransaction(await vetokenSeed4.transferOwnership(owner), "transfer ownership");

  await deployer.deploy(veTokenSeed, ben5, vetokenAddress, toBN("1649235600"), toBN(46915200));
  let vetokenSeed5 = await veTokenSeed.deployed();
  console.log("vetokenSeed5 address ", vetokenSeed5.address);
  logTransaction(await vetokenSeed5.transferOwnership(owner), "transfer ownership");
  process.exit(1);
};
