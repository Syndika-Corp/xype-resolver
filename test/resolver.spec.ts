import { ethers } from 'ethers';
import { BnsResolver } from '../src';
import { getEnvVar } from '../utils/env-validation';
import { getAddress } from 'ethers/lib/utils';

describe('BnsResolver', () => {
  let bnsResolver: BnsResolver;

  const PUBLIC_RPC_NODES = [
    'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
    'https://endpoints.omniatech.io/v1/eth/sepolia/public',
  ];

  describe('Common tests', () => {
    it('should create an instance of BnsResolver', async () => {
      const provider = new ethers.providers.JsonRpcProvider(
        PUBLIC_RPC_NODES[0]
      );

      await expect(BnsResolver.init('invalid')).rejects.toThrow();

      expect((bnsResolver = await BnsResolver.init(provider)));
      expect((bnsResolver = await BnsResolver.init(PUBLIC_RPC_NODES[0])));
    });
  });

  describe('resolveName', () => {
    it('resolveName: test1.sxt - success resolution', async () => {
      const addr = await bnsResolver.resolveName('max.sxt');
      expect(addr).toEqual(
        getAddress('0x772b207659fbf9b33f5bc698694931946948054e')
      );
    });

    it('resolveName: test2.sxt - name expired', async () => {
      const addr = await bnsResolver.resolveName('test2.sxt');
      expect(addr).toEqual(null);
    });

    it('resolveName: invalid name format', async () => {
      const addr = await bnsResolver.resolveName('test2.sxt.eth');
      expect(addr).toEqual(null);
    });

    // add TLD expired test
  });

  describe('lookupAddress', () => {
    it('lookupAddress: 0x084B5B4967b6EaB4EeDc628C12c7E63292cD5FC6 - success resolution', async () => {
      const addr = await bnsResolver.lookupAddress(
        '0x772b207659fbf9b33f5bc698694931946948054e'
      );
      expect(addr).toEqual('max.sxt');
    });

    it('lookupAddress: 0xf2EA5Fd6538EAb3B0466f1b1A447C742d8b30eFe - expired', async () => {
      const addr = await bnsResolver.lookupAddress(
        '0xf2EA5Fd6538EAb3B0466f1b1A447C742d8b30eFe'
      );
      expect(addr).toEqual(null);
    });
  });

  //@todo Finish tests when contracts are ready
});
