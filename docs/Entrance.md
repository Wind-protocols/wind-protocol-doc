---
id: Entrance
title: Entrance🚪
sidebar_label: Entrance🚪
slug: /Entrance
---

# EntranceV1🚪

#### A semi-decentralize, permissionless login-system build by Wind core for Wind Metaverse and other Metaverses.

+ Architecture overview 

The entrance V1 it's a crossover between decentralized and centralized cloud internet structures. The design philosophy was to create a system that can verify NFTs ownership and expand upon it with a gaming scenerio without compromise the private key to any centralized third party. By using methods such as creating a proxy profile account based on each NFTs with cognito and aws amplify, NFTs holder is able to manage its secondary password of individual NFTs and access wind metaverse. The cognito generated proxy account will retrive metadata stored on solana and create a synthetic memory of the NFTs in our game's database. However, the authentication and connection are not constantly updated 
from Solana's blockchain hence the synchronization of mass metadatas might be a costly issue and security concerns that needs to be addressed by our V2.  


Entrance V1 Source-code:
https://github.com/Wind-protocols/Entrance



# EntranceV2🚪

#### A semi-decentralize, permissionless login-system that is capable of verifying wallets holder and tracking assets movements.

+ Development options
1. A independent wallets that can be intergrated with Unreal engine and web broswers. The proxy middleware between game server and solana will be no longer needed hence it mitigated some of the V1's issue. However the development time and resource it's unclear. 

2. A sythetic wallet projector that creates a map of a wallet and verify ownership by proxy middleware like cognito. 
 

+ Architecture overview 
