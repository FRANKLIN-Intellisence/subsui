import { createPublicClient, createWalletClient, http, custom, getContract } from 'viem'
import { liskSepolia } from 'viem/chains'

// import { EthereumProvider } from '@walletconnect/ethereum-provider'
import { publicActionsL2 } from 'viem/op-stack'
import { CONTRACT_ADDRESS } from './constants';
import { ABI } from './abi';

export const publicClient = createPublicClient({
    chain: liskSepolia,
    transport: http(),
}).extend(publicActionsL2());

// eg: Metamask
export const walletClient = createWalletClient({
    chain: liskSepolia,
    transport: custom(window.ethereum),
})


export const contract = getContract({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    client: { public: publicClient, wallet: walletClient }
})
// // eg: WalletConnect
// const provider = await EthereumProvider.init({
//     projectId: "abcd1234",
//     showQrModal: true,
//     chains: [1],
// })

// export const walletClientWC = createWalletClient({
//     chain: liskSepolia,
//     transport: custom(provider),
// })