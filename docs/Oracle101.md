---
id: Oracle101
title: Oracle101
sidebar_label: Oracle
slug: /Oracle
---

This is a edited copy from [Pyth](https://docs.pyth.network/how-pyth-works/design-overview) network's oracle document.


# Why? 

Oracle brings data on-chain. Conventional oracle can publishes continuous real-world financial and crypto market data. High-fidelity, first party data originating off-chain is supplied at sub-second speeds with cross-chain publishing and sophisticated aggregation that can both capture data richness and indicate conviction. This price data can be consumed by on-chain programs and off-chain applications.



# How does it work?(Python Oracle )



1. Publishers submit pricing information to Pyth's on-chain program. 
2. Pyth has multiple data publishers for every product to improve the accuracy and robustness of the system. 
3. Pyth's on-chain program combines publishers' data to produce a single aggregate price and confidence interval.
4. Consumers read the price information produced by the on-chain program.


