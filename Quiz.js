const Caver = require('caver-js');
const caver = new Caver('https://klaytn-baobab-rpc.allthatnode.com:8551');
const fs = require('fs');
// Dia chi:
const contractAddress = '0x4868017bb628C9A548C1c33e9fe2820e7a015326';

// Định nghĩa ABI của smart contract
const contractABI = require('./abiQuiz');
const contract = new caver.klay.Contract(contractABI, contractAddress);

caver.klay
 .getBlockNumber()
 .then((blockNumber) => {
  console.log('Kết nối thành công! Số block hiện tại:', blockNumber);
 })
 .catch((error) => {
  console.error('Kết nối thất bại:', error);
 });

// Gọi hàm getAll
contract.methods
 .getAll() // Tem ham
 .call()
 .then((result) => {
  console.log(result);
  //data quiz
  const dataArray = result;
  let convertedData = [];

  for (let index = 0; index < Object.entries(dataArray).length; index++) {
   const value = {
    id: result[index].id,
    location: result[index].location,
    URI: result[index].URI,
    correct: result[index].correct,
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
  const filePath = 'DataQuiz.js';

  // Ghi dữ liệu vào tệp tin
  fs.writeFile(
   filePath,
   `export const NFT__DATA = [\n${keyValueString}\n];`,
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
  console.error('Lỗi khi gọi phương thức getAll:', error);
 });
