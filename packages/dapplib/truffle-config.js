require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remember solid idea arctic obscure genius'; 
let testAccounts = [
"0x5d8fc8574862688f362e7b8bed181e41fda66989e58b95b5f91b99f46ccf921e",
"0x029cabd8b3f74d8a763bb228d85997e3f3ec7027a25333ab40b9318e97846271",
"0x1173d38abbb5f94eb1481e15c32e1ef81b20c1716d62fef207e1fe6f13922a48",
"0xa4b7969f086ed4a2f559dfc98af5a794989852c27d713c6bef4ce0fcfdac06d6",
"0x0d9b8c76ec76bdab4dc32745a5013c865804f41f5e6d11730774177ae65c1545",
"0x9c1866e6e5ecb95b6bb79bac9c64f036ff372daccf28d805d25c5ca7bfa41b2a",
"0xdc5e16260b1470867b4c24293fda778e39681685ac654d9a7db29ae096b6f7b9",
"0xd30a3bcd970ef7cac2932a9bba832e52774e6fc6c1525376ba7ea0695c287d4d",
"0x47a130a0d123879ab1e2ad81ab4410fd4cfd24df63491b8f70cb03a99992871b",
"0xb623f903b60ab9bbf4cd65927007c794976c61427d56d269d8ef1802dad45c42"
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

