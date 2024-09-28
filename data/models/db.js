//nhúng thư viện Mongo đã tạo
const { MongoClient } = require('mongodb');

//khai báo url kết nối
const url = "mongodb://localhost:27017";
//khai báo tên database
const dbName = 'Ticker_Movie';

//hàm kết nối
async function connectDb() {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Kết nối thành công đến server');
    return client.db(dbName);
}
module.exports = connectDb;