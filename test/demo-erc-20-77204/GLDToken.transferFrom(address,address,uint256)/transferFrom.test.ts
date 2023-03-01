/**
 * Generated file - DO NOT EDIT
 */
import { ethers, artifacts, network } from "hardhat";
import { BigNumber } from "ethers";
import { expect } from "chai";
import { loadFixture, time, impersonateAccount, setBalance } from "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers";

describe("GLDToken::transferFrom(address,address,uint256)", async () => {
  let acct0xf39f, gldtoken0x5fbd;

  beforeEach(async () => {
    await network.provider.send("hardhat_reset");
    await fixture();
  });

  it("0x7ebd0", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7c590

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await gldtoken0x5fbd.transferFrom(acct0xf39f.address, "0x0100000000000000000000000000000000000000", 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x101010101010101010101010101010101010101010101010101010101010101n);
  });

  it("0x7eafd", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7c008

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await gldtoken0x5fbd.transferFrom("0x0100000000000000000000000000000000000001", "0x0100000000000000000000000000000000000000", 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x101010101010101010101010101010101010101010101010101010101010101n);
  });

  it("0x7ea56", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7b9a0

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await gldtoken0x5fbd.transferFrom("0x0100000000000000000000000000000000000000", acct0xf39f.address, 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x101010101010101010101010101010101010101010101010101010101010101n);
  });

  it("0x7ea0d", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7e5dd

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await gldtoken0x5fbd.transferFrom(acct0xf39f.address, acct0xf39f.address, 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x101010101010101010101010101010101010101010101010101010101010101n);
  });

  it("0x7e921", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x7dde8

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0x101010101010101010101010101010101010101010101010101010101010101n]);

    await gldtoken0x5fbd.transferFrom("0x0100000000000000000000000000000000000000", "0x0100000000000000000000000000000000000000", 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0x101010101010101010101010101010101010101010101010101010101010101n);
  });

  it("0x7a4bb", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x782df

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await gldtoken0x5fbd.transferFrom("0x0001000000000000000000000000000000000001", "0x0100000000000000000000000000000000000080", 0);

    expect(await gldtoken0x5fbd.allowance(ethers.constants.AddressZero, ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.balanceOf(ethers.constants.AddressZero)).to.equal(0);
    expect(await gldtoken0x5fbd.decimals()).to.equal(18);
    expect(await gldtoken0x5fbd.name()).to.equal("Gold");
    expect(await gldtoken0x5fbd.symbol()).to.equal("GLD");
    expect(await gldtoken0x5fbd.totalSupply()).to.equal(0);
  });

  it("0x7a372", async () => {
    // http://172.16.0.71/internal/root/0x7721f/path/0x79005

    gldtoken0x5fbd = await ethers.deployContract("GLDToken", [0]);

    await gldtoken0x5fbd.transferFrom("0x0100000000000000000000000000000000000000", "0x0100000000000000000000000000000000000000", 0);

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
