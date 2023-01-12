require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth script assume install industry food strong'; 
let testAccounts = [
"0xff27ee0dbfe49b3fee30adafe3c45f69905fcaf353ee5ad85b51438c9d0e0671",
"0x8025fc23b3e30568d4fa0e056fb14c412e55494e58305f8fa054a18b59d9fcf8",
"0xed274b6b97cd3ed40a96a1b7b9be4cf339fdfffd53adbf987094b5c5ed4e5a14",
"0xb6b1f4f8296ae64572034e3765d500084a812a3402e296be4decc52427b03e11",
"0xcf828c9861afedf96e27b2c187c13b5b6896d98cd5cdcac1e34487f6409d7cd3",
"0x7808d19f7b50f7cfb2b562c39e9759e86ddef4e650f6eafd11a095d5b4be4ae2",
"0x2f71f303a8ff7dc5e646ce7ae2e060354c57cb1188d6bac4bd1d2f146eb50713",
"0x80ce8d4adec1692890fbcdd5b777580b328b7257173539d759d056c1f6748738",
"0x211db8a4d91856c638b1c90418965ce3ce72b0120dfe9176d64a10fdad05a7e0",
"0x07ea0b728c72fa7d1c7aecf436596ab71578db6de8592de36a363191c95b67f9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

