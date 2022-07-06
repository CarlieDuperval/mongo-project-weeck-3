import { createBlockchain } from "../src/services/blockchain.services"

describe('Blockchain Test Suite', () => {
    it('should create a Blockchain', async () => {
        await createBlockchain({
            name : 'solana',
            language:'Rust',
            marketCap:1,
            supportsSmartContracts: true,
        });
    });
});