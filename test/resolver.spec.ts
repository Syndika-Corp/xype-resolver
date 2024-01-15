import { JsonRpcProvider, getAddress } from 'ethers';
import { BnsResolver } from '../src';
import { getEnvVar } from '../utils/env-validation';

describe('BnsResolver', () => {
  let bnsResolver: BnsResolver;

  const PUBLIC_RPC_NODES = [
    'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
    'https://endpoints.omniatech.io/v1/eth/sepolia/public',
  ];

  describe('Common tests', () => {
    it('should create an instance of BnsResolver', async () => {
      const provider = new JsonRpcProvider(PUBLIC_RPC_NODES[0]);

      await expect(BnsResolver.init('invalid')).rejects.toThrow();

      expect((bnsResolver = await BnsResolver.init(provider)));
      expect((bnsResolver = await BnsResolver.init(PUBLIC_RPC_NODES[0])));
    });
  });

  describe('resolveName', () => {
    it('resolveName: test1.sxt - success resolution', async () => {
      const addr = await bnsResolver.resolveName('ion.eps');
      expect(addr).toEqual(
        getAddress('0xb305c1f2200a17E0502416B1746aB88C9B5C449f')
      );
    });

    it('resolveName: test2.sxt - name expired', async () => {
      const addr = await bnsResolver.resolveName('abc2.sxt');
      expect(addr).toEqual(null);
    });

    it('resolveName: invalid name format', async () => {
      const addr = await bnsResolver.resolveName('test2.sxt.eth');
      expect(addr).toEqual(null);
    });

    // add TLD expired test
  });

  describe('lookupAddress', () => {
    it('lookupAddress: 0xb305c1f2200a17E0502416B1746aB88C9B5C449f - success resolution', async () => {
      const addr = await bnsResolver.lookupAddress(
        '0xb305c1f2200a17E0502416B1746aB88C9B5C449f'
      );
      expect(addr).toEqual('ion.eps');
    });

    it('lookupAddress: 0xf2EA5Fd6538EAb3B0466f1b1A447C742d8b30eFe - expired', async () => {
      const addr = await bnsResolver.lookupAddress(
        '0xf2EA5Fd6538EAb3B0466f1b1A447C742d8b30eFe'
      );
      expect(addr).toEqual(null);
    });
  });
});
