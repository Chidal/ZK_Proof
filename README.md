# Aptos Exchange 

## Introduction

Aptos Exchange is a decentralized cryptocurrency exchange (DEX) built as a Uniswap clone using React. It leverages the Aptos blockchain to enable users to swap cryptocurrencies securely and efficiently. The goal of this project is to provide a seamless, decentralized solution for cryptocurrency trading.

## What it Does

Aptos Exchange allows users to:
- Swap various cryptocurrencies.
- Connect their wallets to facilitate transactions.
- View transaction history and status.

## The Problem it Solves

Traditional centralized exchanges suffer from several issues:

- **Security vulnerabilities**: Centralized exchanges are prime targets for hackers.
- **High transaction fees**: Users often incur high fees for transactions.
- **Lack of transparency**: Centralized exchanges can lack transparency, leading to trust issues.

Aptos Exchange addresses these problems by:
- **Enhancing security**: Eliminating intermediaries reduces the risk of hacks.
- **Reducing transaction costs**: Decentralized protocols lower transaction fees.
- **Increasing transparency**: All transactions are recorded on the blockchain, ensuring transparency.

## Challenges I Ran Into

- **Learning Curve**: Adapting to the Move language and integrating it with the Aptos blockchain was initially challenging.

- **Blockchain Integration**: Ensuring seamless wallet connections and transaction processing required meticulous attention to detail.
- **Performance Optimization**: Keeping the application responsive and efficient under varying loads.
- **Security Considerations**: Ensuring the smart contracts were secure and free from vulnerabilities.

## Technologies I Used

### Frontend
- **React**: For building the user interface.
- **Styled-components**: For styling the application.
- **Apollo Client**: For managing GraphQL data.
- **@usedapp/core**: For Ethereum and blockchain integrations.
- **@uniswap/sdk**: For interacting with Uniswap protocols.

### Backend
- **Hardhat**: For smart contract development and testing.
- **Move language**: For writing smart contracts on the Aptos blockchain.
- **Ethers.js**: For blockchain interactions.

## How I Built It

1. **Frontend Development**: Using React and styled-components, we created a user-friendly interface for the exchange.
2. **Smart Contract Development**: 
   - Wrote smart contracts in Move language.
   - Used Hardhat for testing and deployment.
3. **Blockchain Integration**: Connected the frontend to the Aptos blockchain using Ethers.js and ensured seamless wallet integration.
4. **Continuous Improvement**: Iteratively improved the application based on feedback and performance metrics.

## What We Learned

- **Move Language Proficiency**: Gained a deep understanding of the Move language and its security features.
- **Blockchain Integration**: Enhanced our skills in integrating applications with the Aptos blockchain.
- **Decentralized Application Development**: Improved our ability to develop and maintain decentralized applications (dApps).

## What's Next for Aptos Exchange

Going into the Aptos chain and testing the availability to comply and adapt with the other chains 

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- Node.js and npm installed on your machine.
- A GitHub account for repository access.

### Frontend

1. **Clone the repository**:
   ```bash
   git clone https://github.com/chidal/aptos-exchange.git
   cd aptos-exchange
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm start
   ```

### Smart Contract

1. **Navigate to the smart contract directory**:
   ```bash
   cd aptos-exchange/smart-contract
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile and deploy the smart contract**:
   Follow the steps for deploying Move language contracts on the Aptos blockchain as per [Aptos documentation](https://aptos.dev/move/move-on-aptos/).

## Usage

1. **Start the frontend**:
   ```bash
   npm start
   ```

2. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`.

3. **Interact with the dApp**:
   - Connect your wallet.
   - Initiate cryptocurrency swaps.
   - Monitor transaction status and history.



