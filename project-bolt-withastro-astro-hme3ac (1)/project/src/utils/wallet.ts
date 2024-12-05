import { PublicKey } from '@solana/web3.js';

export async function connectWallet(): Promise<{ publicKey: PublicKey } | null> {
  try {
    if ('solana' in window) {
      const resp = await window.solana.connect();
      return resp;
    }
    return null;
  } catch (error) {
    console.error('Error connecting to wallet:', error);
    return null;
  }
}

export function formatAddress(address: string): string {
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}