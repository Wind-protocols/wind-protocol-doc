---
id: Solana-srcs
title: Solana-sources
sidebar_label: Solana-srcs
slug: /Solana-srcs
---


You should start your journey on Solana with 

# Mango Eco system 

+ [Mango](https://docs.mango.markets/mango/account-delegation)'s document.

# Serum Eco system 

+ [Serum](https://docs.projectserum.com/)'s document. 
+ [Serum's API](https://docs.bonfida.com/#project-serum)'s document. 
+ [Anchor](https://project-serum.github.io/anchor/tutorials/tutorial-3.html)'s document. 


# Bonfida Eco system 
https://docs.bonfida.org/collection/overview
+ [Bonfida](https://docs.bonfida.org/collection/overview)'s document. 


# Solana documents 

+ [Solana](https://docs.solana.com/)'s document. 

# Core concepts of Solana  

+ [Intereaction overview](https://docs.solana.com/developing/programming-model/overview)

An app interacts with a Solana cluster by sending it transactions with one or more instructions. The Solana runtime passes those instructions to programs deployed by app developers beforehand. An instruction might, for example, tell a program to transfer lamports from one account to another or create an interactive contract that governs how lamports are transferred. Instructions are executed sequentially and atomically for each transaction. If any instruction is invalid, all account changes in the transaction are discarded.

+ [Runtime overview](https://docs.solana.com/developing/programming-model/runtime)

The runtime only permits the owner program to debit the account or modify its data. The program then defines additional rules for whether the client can modify accounts it owns. In the case of the System program, it allows users to transfer lamports by recognizing transaction signatures. If it sees the client signed the transaction using the keypair's private key, it knows the client authorized the token transfer.

