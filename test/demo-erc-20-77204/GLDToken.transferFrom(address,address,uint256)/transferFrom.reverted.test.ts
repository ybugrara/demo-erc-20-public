/**
 * Generated file - DO NOT EDIT
 */
import { ethers, artifacts, network } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from "chai";
import { loadFixture, time, impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";

describe("GLDToken::transferFrom(address,address,uint256) - reverted", async () => {
  let acct0xf39f, gldtoken0x5fbd;

  beforeEach(async () => {
    await network.provider.send("hardhat_reset");
    await fixture();
  });

  it("0x7eb02", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7bf7e

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      gldtoken0x5fbd.transferFrom(
        ethers.constants.AddressZero,
        ethers.constants.AddressZero,
        0x101010101010101010101010101010101010101010101010101010101010101n
      )
    ).to.be.revertedWith("ERC20: insufficient allowance");
  });

  it("0x7e985", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7bc40

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      gldtoken0x5fbd.transferFrom("0x0100000000000000000000000000000000000000", ethers.constants.AddressZero, 0)
    ).to.be.revertedWith("ERC20: transfer to the zero address");
  });

  it("0x7e968", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7dcb3

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(gldtoken0x5fbd.transferFrom(ethers.constants.AddressZero, ethers.constants.AddressZero, 0)).to.be.revertedWith(
      "ERC20: approve from the zero address"
    );
  });

  it("0x7e955", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7c839

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0x11e19e0c9bab2408000n,
        data: "0x23b872dd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason(/* value transfer to nonpayable call: `transferFrom(address,address,uint256)` */);
  });

  it("0x7a3bc", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x79716

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0x11e19e0c9bab2408001n,
        data: "0x23b872dd000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason(/* value transfer to nonpayable call: `transferFrom(address,address,uint256)` */);
  });

  it("0x7a37a", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x79014

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(gldtoken0x5fbd.transferFrom(ethers.constants.AddressZero, ethers.constants.AddressZero, 0)).to.be.revertedWith(
      "ERC20: approve from the zero address"
    );
  });

  it("0x7a374", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x77cad

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      gldtoken0x5fbd.transferFrom(
        ethers.constants.AddressZero,
        ethers.constants.AddressZero,
        0x101010101010101010101010101010101010101010101010101010101010101n
      )
    ).to.be.revertedWith("ERC20: insufficient allowance");
  });

  it("0x7a312", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7920f

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      gldtoken0x5fbd.transferFrom("0x0100000000000000000000000000000000000000", ethers.constants.AddressZero, 0)
    ).to.be.revertedWith("ERC20: transfer to the zero address");
  });

  it("0x7eaa2", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7c8de

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0x23b872dd000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7e94f", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7d0ca

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0x23b872dd010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7a45b", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x788d2

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0x23b872dd000000000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101010101010101010000000000000000000000000000000000000000000000000000000000000000",
      })
    ).to.be.revertedWithoutReason();
  });

  it("0x7a306", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x79e20

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await expect(
      acct0xf39f.sendTransaction({
        to: gldtoken0x5fbd.address,
        value: 0,
        data: "0x23b872dd010101010101010101010101010101010101010101010101010101010101010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
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
