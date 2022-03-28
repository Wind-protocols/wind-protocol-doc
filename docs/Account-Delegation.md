---
id: Account-Delegation
title: Account-Delegation
sidebar_label: Account-Delegation
slug: /Account-Delegation
---

This is a edited version from [Mango](https://docs.mango.markets/mango/account-delegation)'s document. The concept of account-delegation it's also relevant for Wind. Thank you Mango. 

# Why? 

+ Account delegation allow users to
1. users to rent out their avatars to others without giving up the ownership. 
2. Leverage our league pool systems by speculating on the winners. 

# How does it work?
 Account Delegation is a implented concept of Solana that allows a Owner of a token to delegate part the authority to that Solana account to a different Solana account. 

Delegation can provide some additional security for more sophisticated key management procedures.

A delegated account _can_, for example:

* Deposit funds
* Place orders
* Cancel orders

A delegated account _cannot_, for example:

* Withdraw funds
* Close the Mango Account
* Change or remove existing account delegation

A Mango Account can have at most one delegate. The owner of the Mango Account continues to have full control of the Mango Account irrespective of delegation.

Only delegate to an account that you trust. Although delegates cannot withdraw funds, there are some other mechanisms by which they could drain your account. For example, by using your account to make bad trades with their personal account.

### Usage(Mango)

A delegate can be set from the Mango UI via the accounts page, or programatically using either the `mango-explorer` package for Python or the `mango-client` library for JS.

If a Mango Account has been delegated to you, it will appear in the Accounts List in the UI, from where you can select it and perform limited operations as you would with any other account.

* [Mango Explorer Documentation](https://github.com/blockworks-foundation/mango-explorer/blob/main/docs/Delegation.md)
* [Mango Client Documentation](https://blockworks-foundation.github.io/mango-client-v3/classes/MangoClient.html#setDelegate)


