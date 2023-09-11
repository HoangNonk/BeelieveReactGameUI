const Caver = require('caver-js');
const caver = new Caver('https://klaytn-baobab-rpc.allthatnode.com:8551');
const fs = require('fs');
// Dia chi:
const contractAddress = '0x3dde6ED47354B765D479CF0c6b819Dad2F3e176D';

// Định nghĩa ABI của smart contract
const contractABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_id',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_types',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_index',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_mgUrl',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_picture',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_ownerId',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bool',
                name: '_isActive',
                type: 'bool',
            },
        ],
        name: 'creatNewPiece',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_id',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'seller',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'buyer',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'price',
                type: 'uint256',
            },
        ],
        name: 'exchangePiece',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_id',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_index',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_imgUrl',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'string',
                name: '_picture',
                type: 'string',
            },
        ],
        name: 'giveRandomPieceEvent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '_id',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '_price',
                type: 'uint256',
            },
        ],
        name: 'sellPieceEvent',
        type: 'event',
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'string',
                name: '_picture',
                type: 'string',
            },
            {
                indexed: false,
                internalType: 'address',
                name: '_address',
                type: 'address',
            },
        ],
        name: 'upgradeNFTBigEvent',
        type: 'event',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string',
            },
        ],
        name: 'PieceSpecial',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'all',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'allPiece',
        outputs: [
            {
                internalType: 'uint256',
                name: 'id',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'types',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: 'index',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: 'imgUrl',
                type: 'string',
            },
            {
                internalType: 'string',
                name: 'picture',
                type: 'string',
            },
            {
                internalType: 'address',
                name: 'ownerId',
                type: 'address',
            },
            {
                internalType: 'bool',
                name: 'isActive',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_id',
                type: 'uint256',
            },
        ],
        name: 'buyPiece',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_types',
                type: 'uint256',
            },
            {
                internalType: 'string',
                name: '_imgUrl',
                type: 'string',
            },
            {
                internalType: 'string',
                name: '_picture',
                type: 'string',
            },
            {
                internalType: 'uint256',
                name: '_index',
                type: 'uint256',
            },
        ],
        name: 'createPiece',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_address',
                type: 'address',
            },
        ],
        name: 'getAllPieceByAddress',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'types',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'index',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'imgUrl',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'picture',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: 'ownerId',
                        type: 'address',
                    },
                    {
                        internalType: 'bool',
                        name: 'isActive',
                        type: 'bool',
                    },
                ],
                internalType: 'struct CollectionBeelieve.Piece[]',
                name: '',
                type: 'tuple[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'getAllPieceForSale',
        outputs: [
            {
                components: [
                    {
                        internalType: 'uint256',
                        name: 'id',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'types',
                        type: 'uint256',
                    },
                    {
                        internalType: 'uint256',
                        name: 'index',
                        type: 'uint256',
                    },
                    {
                        internalType: 'string',
                        name: 'imgUrl',
                        type: 'string',
                    },
                    {
                        internalType: 'string',
                        name: 'picture',
                        type: 'string',
                    },
                    {
                        internalType: 'address',
                        name: 'ownerId',
                        type: 'address',
                    },
                    {
                        internalType: 'bool',
                        name: 'isActive',
                        type: 'bool',
                    },
                ],
                internalType: 'struct CollectionBeelieve.Piece[]',
                name: '',
                type: 'tuple[]',
            },
            {
                internalType: 'uint256[]',
                name: '_price',
                type: 'uint256[]',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [],
        name: 'giveRandomPiece',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'idForPrice',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        name: 'idForSale',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
        ],
        name: 'ownerByAddressCount',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        stateMutability: 'view',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_id',
                type: 'uint256',
            },
            {
                internalType: 'uint256',
                name: '_price',
                type: 'uint256',
            },
        ],
        name: 'sellPiece',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_picture',
                type: 'string',
            },
            {
                internalType: 'address',
                name: '_address',
                type: 'address',
            },
        ],
        name: 'upgradeNFTBig',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];

//Connect
const contract = new caver.klay.Contract(contractABI, contractAddress);

caver.klay
    .getBlockNumber()
    .then((blockNumber) => {
        console.log('Kết nối thành công! Số block hiện tại:', blockNumber);
    })
    .catch((error) => {
        console.error('Kết nối thất bại:', error);
    });

// Gọi hàm all pice

contract.methods
    .getAllPieceForSale()
    .call()
    .then((result) => {
        //data ntf
        const dataArray = result[0];
        let convertedData = [];

        for (let index = 0; index < Object.entries(dataArray).length; index++) {
            const value = {
                id: dataArray[index][0],
                types: dataArray[index][1],
                index: dataArray[index][2],
                imgUrl: dataArray[index][3],
                picture: dataArray[index][4],
                ownerId: dataArray[index][5],
                isActive: dataArray[index][6],
                price: result[1][index],
            };
            convertedData.push(value);
        }

        // Chuyển đối tượng thành chuỗi key-value
        const keyValueString = convertedData
            .map((item) => {
                const keyValuePairs = Object.entries(item).map(([key, value]) => {
                    return `\t${key}: "${value}"`;
                });
                return `{\n ${keyValuePairs.join(', \n')} \n}`;
            })
            .join(',\n');

        // Đường dẫn đến tệp tin data.js
        const filePath = 'data.js';

        // Ghi dữ liệu vào tệp tin
        fs.writeFile(
            filePath,
            `\n\nexport const NFT__DATA = [\n${keyValueString}\n];\n\n`,
            (err) => {
                if (err) {
                    console.error('Lỗi khi ghi dữ liệu vào tệp tin:', err);
                } else {
                    console.log('Dữ liệu đã được ghi vào tệp tin data.js.');
                }
            }
        );
    })
    .catch((error) => {
        console.error('Lỗi khi gọi phương thức all pice :', error);
    });
