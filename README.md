# ProductAuth

## Project Overview
ProductAuth is a Decentralized Application (DApp) that leverages the power of Ethereum and Non-Fungible Tokens (NFTs) to authenticate products. It allows for the verification of product authenticity by storing product details as NFTs on the blockchain. Customers can access and verify product history through a mobile app or website.

## Technology Stack & Tools
- Solidity (Smart Contracts & Tests)
- Javascript (React & Testing)
- Ethers.js (Blockchain Interaction)
- React.js (Frontend Framework)
- Chakra UI (React Component Library)
- Web3 Provider (Ethereum Connection)

## Prerequisites
To dive into the DApp, ensure you have the following:
- NodeJS ([Install NodeJS](https://nodejs.org/en/)) - `npm install nodejs`
- Truffle ([Install Truffle](https://www.trufflesuite.com/truffle)) - `npm install truffle`
- Wallet (Choose one):
  - Metamask (Chrome Extension) 🦊
  - WalletConnect

## Setting Up
1. Install dependencies - `npm install`
2. Compile and migrate the smart contracts - `truffle compile && truffle migrate`
3. Run the React application - `npm start`

## Functionality

**Create Product**
- Create a new product with details such as `Name` and `Manufacturer`.
- The product is represented by a unique token ID.
- Only the contract owner can create products.

**Update Product**
- Update the history/status of an existing product.
- Only the contract owner can update product details.

**Verify Product**
- Verify the authenticity of a product by checking its status.
- Returns true if the product is authentic, false otherwise.
"# authenticheck" 
