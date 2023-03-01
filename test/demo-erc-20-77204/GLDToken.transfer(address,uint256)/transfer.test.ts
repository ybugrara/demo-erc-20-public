/**
 * Generated file - DO NOT EDIT
 */
import { ethers, artifacts, network } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from "chai";
import { loadFixture, time, impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";

describe("GLDToken::transfer(address,uint256)", async () => {
  let acct0xf39f, gldtoken0x5fbd;

  beforeEach(async () => {
    await network.provider.send("hardhat_reset");
    await fixture();
  });

  it("0x7ec26", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7ddfd

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await gldtoken0x5fbd.transfer("0x0100000000000000000000000000000000000000", 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x101010101010101010101010101010101010101010101010101010101010101n);
  });

  it("0x7eb0f", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7b301

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await gldtoken0x5fbd.transfer(acct0xf39f.address, 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x101010101010101010101010101010101010101010101010101010101010101n);
  });

  it("0x7ead4", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7e097

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x8000000000000000000000000000000000000000000000000000000000000000n]);

    await gldtoken0x5fbd.transfer(acct0xf39f.address, 0x8000000000000000000000000000000000000000000000000000000000000000n);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x8000000000000000000000000000000000000000000000000000000000000000n);
  });

  it("0x7e9f7", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7cf93

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x8000000000000000000000000000000000000000000000000000000000000000n]);

    await gldtoken0x5fbd.transfer(
      "0x0100000000000000000000000000000000000000",
      0x7fffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffff80n
    );

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x8000000000000000000000000000000000000000000000000000000000000000n);
  });

  it("0x7e99f", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7cf0f

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x8000000000000000000000000000000000000000000000000000000000000000n]);

    await gldtoken0x5fbd.transfer(
      "0x0100000000000000000000000000000000000000",
      0x8000000000000000000000000000000000000000000000000000000000000000n
    );

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x8000000000000000000000000000000000000000000000000000000000000000n);
  });

  it("0x7e984", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7b89f

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x8000000000000000000000000000000000000000000000000000000000000000n]);

    await gldtoken0x5fbd.transfer(acct0xf39f.address, 0x7fffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffff80n);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x8000000000000000000000000000000000000000000000000000000000000000n);
  });

  it("0x7a3a3", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x78026

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await gldtoken0x5fbd.transfer(acct0xf39f.address, 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0);
  });

  it("0x7a377", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x79d1f

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await gldtoken0x5fbd.transfer("0x0100000000000000000000000000000000000000", 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0);
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
