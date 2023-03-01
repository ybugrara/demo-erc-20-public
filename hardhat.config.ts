import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@statespace/hardhat-testgen";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  testgen: {
    sequences: [["GLDToken.*"]],
  }
};

export default config;