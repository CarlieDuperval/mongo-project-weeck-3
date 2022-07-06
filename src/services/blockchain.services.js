import { getBlockchainCollection } from "../gateway/mongo.js"

export const createBlockchain = async (blockchain)=> {
    const col = await getBlockchainCollection();   
    const { insertedId , } =  await col.insertOne(blockchain);  // insert on item in the collection, insertOne
    // TODO : we should validate name is unique
    return insertedId;
};

export const getBlockchain = async (name) => {
    const col = await getBlockchainCollection();  
    const blockchain = await col.findOne({ name });

    return blockchain;
};

// geAllBlockchain
export const getAllBlockchains = async () => {
    //TODO : filter by deleteAt flag so we dont return deleted blockchain
    const col = await getBlockchainCollection();  
    const blockchains = await col.find({ }).toArray();

    return blockchains;
};

export const updateBlockchain = async (name, updateObject) => {
    const col = await getBlockchainCollection(); 
    // TODO: Update should not allow the name filed to be updated
    await col.updateOne({ name }, { $set: updateObject });
};

// Soft delete
export const deleteBlockchain = async (name) => {
    await updateBlockchain(name , { deletedAt: new Date() });
};