import { Wallet, HDNodeWallet } from "ethers";

interface Account {
  privatekey: string;
  address: string;
  balance: string;
}

export function generateAccount(
  seedPhrase: string = "",
  index: number = 0
): { account: Account; seedPhrase: string } {
  let wallet: HDNodeWallet;

  if (seedPhrase == "") {
    const mnemonic = Wallet.createRandom().mnemonic;
    if (!mnemonic) {
      throw new Error("Failed to generate mnemonic");
    }
    seedPhrase = mnemonic.phrase;
  }
  wallet = HDNodeWallet.fromPhrase(seedPhrase, `m/44'/60'/0'/0/${index}`);

  const { address } = wallet;
  const account = { address, privatekey: wallet.privateKey, balance: "0" };

  return { account, seedPhrase };
}
