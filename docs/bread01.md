---
id: bread01
title: unthinkable-scalability and matrix 
sidebar_label: unthinkable01
slug: /unthinkable01
---

## Build scalable and modulated web3 ecosytem 
By bread.sol

3/27/2022 

At the kernel level web2 super-app and web3 super-app are different(There are no web3 super-app in practice yet). Interestingly web3's data and account systems are more homogeneous and unified. This aspects of blockchain largely increased the composiblity between datas and different level of encrypted service. In the web3 decentralized world with nfts, internet has re-define the concept of ownership and user-profile. 

 The rising of NFTs made the web3 Dapps starting to look a lot more like their web2 counterpart. They are rushing to define user's identity and profile space with their terms. Bonfida done a rather good job among the crowed. User can upload a external link or a NFT that's in the same wallet as their Solana domain service account(domain?). 

Wind has a rather complex set up currently, the architecture at design are flawed. It's still fragmented and user-unfriendly.
There are not many example that wind can learn from. Since Wind's core identity it's surrounded the avatars, not the owners/users. The user experience are defined in a complete web3 way.

Wind define their user identity by their 
+ Their avatar inside the metaverse  
+ Their role inside the DAO  
+ Their transactional on-chain profile 

The V1 protocol are separated and scattered through many different frontends. The on-chain part are delegated to Wind metaverse website, Wind protocol website and wind metaverse PC. Now with the upcoming EGO, Cloud portal, Palace-marketplace and governance portal, Wind's core it's suffering massively and fatigue of keeping each of them talking to each other and information up to date. Instead of a modulated ecosystem we have to update them manually 1 by 1. Inefficient and unneccessary. 

How can we leverage blockchain and modulated software engineering to solve such issue? 

## Unofficial Wind protocol V2 architecture proposal  
#### This paper describes the abstract or conceptual application architecture of the Wind protocol. 

### Contents 

1. Introduction 
2. Architecture 


# 1. Introduction
## 1.1 Purpose 
The goal of the V2 it's to eliminate the inefficiency and redundancy in the current architecture. Therefore that user 
and developers can both enjoy their role with minimum effort 
of debuggin and spending their time on the better things.   

## 1.2 Challenges 
The V1 used many dapp that were rigged systems that's already implemented with some rather fixed intereactive methods. The Wind DAO airdrop it's done so by utilizing [GumDrop] and public minting by [CandyMachinev2] of [Metaplex]. Zdream as the main contributor of the V1 protocol implemented Jacheng's design of Claiming by matching address with the ledger. The GumDrop methods was originally pioneered for token airdrops by Uniswap and ported to Solana by [Saber](https://github.com/saber-hq/merkle-distributor).


# 2. Architecture 

## 2.1 terminologies 

### Wallet: The Solana keypairs that can interact with blockchain. 
### App: Decentralized applications.
### Portal: The GUI of a App. 
### Module: Apps with a Portal that can be interact by wallets.
### Data: Informations stored in a binary manner.
### Ledgers: smart-accounting App build on Solana or potentially other blockchain.
### Functions: what does a app or portal do. 
### Permissionless GUI: A interface that can use to execute functions with Wallet locally without interact with blockchain.
### Proxy pair: A password/pubkey(Token) pair that have a limited life-span up to 24 hours.

## 2.2 App 

+ In theory 
### Entrance-V2-on-chain-custody-program
User can set a up a proxy password/pubkey pair that can be used to login a centralized server for a set amount of time. User needs to pick what's to project and for how long. This will bundle all the assets to the custody program send one transaction to Solana, and create a proxy pair on cognito with the relevant assets. User can claim back their assets when the said condition it's fullfilled. The proxy pair will dissolve once it met its lifespan. 
### Entrance-V2-on-chain-reward-pools-program 
User can deposit fungible-tokens(SOC) to the reward-pool-program with different instructions to rip different rewards. Warning: Based on the instruction, User may lose thier deposit. 


+ V2
### Palace-on-chain-marketplace-program 
The escrow program that swap assets when they met pre-conditions.    

+ Legacy
### Entrance-V1 
Set up a proxy password/token pair with using a permissionless GUI. 


### 


### Harvest  A ledger that can aggregate the rewards from Palace, Entrance and cloud and claimed by user in one transaction.


## 2.3 modules

#### Palace
A permissionless GUI with Palace on-chain-program. 
#### Cloud 
A  Permissionless GUI that player can intereact with their NFTs in 3D. 
#### DAO
A  Permissionless GUI that player can govern Wind DAO. 





#### Harvest: The ledger app that record all the rewards by Cloud, Palace, DAO and entrance. It automatically deduct and adding the 

## 2.3 modules

#### main-portal: Where users can use Harvest, see a overview of their assets and profile and module entrance able to open a module page. 


1. Cloud 
2. Palace  
3. DAO  - Governance module 
4. Entrance  -





| Layer      | Function | Total |
| ----------- | ----------- | ----------- |
| Frontend | 10%        | 100,000,000 |
| Dapps  | 10%         | 100,000,000 |
| Solana | 100%         | 1,000,000,000 |


