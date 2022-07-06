import { MongoClient } from "mongodb"

export const getDb = async () => {
    const client = new MongoClient(process.env.MONGO_URL);
    await client.connect();

    return client.db('mongo-week3-express');
};

// create a function to get block chain

export const getBlockchainCollection = async () => {
    const db = await getDb();   // get data bas
    return db.collection('blockchains');
};


// extra work : Creat a new collection 
export const getSmallContract = async () => {
    const db = await getDb();   // get data bas
    return db.collection('smart-Contracts');
};


