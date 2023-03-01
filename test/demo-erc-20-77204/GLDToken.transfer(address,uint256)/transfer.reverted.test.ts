/**
 * Generated file - DO NOT EDIT
 */
import { ethers, artifacts, network } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from "chai";
import { loadFixture, time, impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";

describe("GLDToken::transfer(address,uint256) - reverted", async () => {
  let acct0xf39f, gldtoken0x5fbd;

  beforeEach(async () => {
    await network.provider.send("hardhat_reset");
    await fixture();
  });

  it("0x7ec2d", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7d06b

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(gldtoken0x5fbd.transfer(ethers.constants.AddressZero, 0)).to.be.revertedWith("ERC20: transfer to the zero address");
  });

  it("0x7ebf5", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7dc9f

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x100000000000000000000000000000000000000000000000000000000000000n]);

    await expect(
      gldtoken0x5fbd.transfer(
        "0x0100000000000000000000000000000000000000",
        0x100000000000000000000000000000000000000000000000000000000000001n
      )
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
  });

  it("0x7eb0a", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7bf3f

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0x11e19e0c9bab2408000n,
        data: "0xa9059cbb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason(/* value transfer to nonpayable call: `transfer(address,uint256)` */);
  });

  it("0x7a4c2", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x786a9

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(gldtoken0x5fbd.transfer(ethers.constants.AddressZero, 0)).to.be.revertedWith("ERC20: transfer to the zero address");
  });

  it("0x7a38f", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7929c

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0x11e19e0c9bab2408001n,
        data: "0xa9059cbb000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason(/* value transfer to nonpayable call: `transfer(address,uint256)` */);
  });

  it("0x7a36d", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x78c9e

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      gldtoken0x5fbd.transfer(
        "0x0100000000000000000000000000000000000000",
        0x101010101010101010101010101010101010101010101010101010101010101n
      )
    ).to.be.revertedWith("ERC20: transfer amount exceeds balance");
  });

  it("0x7ead7", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7c790

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0xa9059cbb010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7a4d5", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7947c

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0xa9059cbb010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
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
