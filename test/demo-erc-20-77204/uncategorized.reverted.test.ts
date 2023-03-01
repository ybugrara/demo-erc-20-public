/**
 * Generated file - DO NOT EDIT
 */
import { ethers, artifacts, network } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from "chai";
import { loadFixture, time, impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";

describe("Uncategorized", async () => {
  let acct0xf39f, gldtoken0x5fbd;

  beforeEach(async () => {
    await network.provider.send("hardhat_reset");
    await fixture();
  });

  it("0x7ec2a", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7cb8b

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0x11e19e0c9bab2408000n,
        data: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7ebcd", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7d060

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7eb3f", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7dff0

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0x61e19e0c9bab2410000n,
        data: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7ea5c", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7af19

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0x80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7a481", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x79cb4

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7a45e", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7829c

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0x61e19e0c9bab2410000n,
        data: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7a2fa", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x79dc8

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0x80000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7a28f", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x77fab

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0x11e19e0c9bab2408001n,
        data: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
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
