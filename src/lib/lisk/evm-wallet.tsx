import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultConfig,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
    liskSepolia,
    mainnet,
} from 'wagmi/chains';
import {
    QueryClientProvider,
    QueryClient,
} from "@tanstack/react-query";
import { ReactNode } from 'react';


export const wagmiConfig = getDefaultConfig({
    appName: 'Subsui',
    projectId: '0x33728831c9CB9ff5e9072f5c7C7178767d75dDA2',
    chains: [mainnet, liskSepolia],
});

const queryClient = new QueryClient();
const EvmWallet = ({ children }: { children: ReactNode }) => {
    return (
        <WagmiProvider config={wagmiConfig} >
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
};

export default EvmWallet;