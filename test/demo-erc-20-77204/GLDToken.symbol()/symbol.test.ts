/**
 * Generated file - DO NOT EDIT
 */
import { ethers, artifacts, network } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from "chai";
import { loadFixture, time, impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";

describe("GLDToken::symbol()", async () => {
  let acct0xf39f, gldtoken0x5fbd;

  beforeEach(async () => {
    await network.provider.send("hardhat_reset");
    await fixture();
  });

  it("0x7eadf", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7ba94

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
  });

  it("0x7a37d", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x77b6d

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
  });

  async function fixture() {
    acct0xf39f = await ethers.getSigner("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266");
    await setBalance(acct0xf39f.address, 0x21e19e0c9bab2400000n);

    await expect(
      acct0xf39f.sendTransaction({
        value: 0x61e19e0c9bab2410000n,
        data:
          (await artifacts.readArtifact("GLDToken").then((a) => a.bytecode)) +
          "0000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason(/* value transfer to nonpayable call: `constructor(uint256)` */);
  }
});
