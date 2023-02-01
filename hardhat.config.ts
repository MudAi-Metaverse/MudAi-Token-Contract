import { HardhatUserConfig } from "hardhat/config";
import 'solidity-coverage';
import "hardhat-gas-reporter";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }, 
  networks: {
    mainnet: {
      url: process.env.ETH_MAINNET_RPC_URL,
      accounts: [process.env.MAINNET_WALLET_ADDRESS_PRIVATE_KEYY as string]
    },
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.GOERLI_WALLET_ADDRESS_PRIVATE_KEYY as string]
    }
  },
  gasReporter: {
    enabled: true,
    currency: 'JPY',
    gasPrice: 14
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_TOKEN
  },
};

export default config;
