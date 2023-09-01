import { JsonRpcProvider } from 'ethers';
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
      const provider = new JsonRpcProvider(getEnvVar('PUBLIC_RPC'));

      await expect(BnsResolver.init('invalid')).rejects.toThrow();

      expect((bnsResolver = await BnsResolver.init(provider)));
      expect((bnsResolver = await BnsResolver.init(getEnvVar('PUBLIC_RPC'))));
    });
  });

  describe('resolveName', () => {
    it('resolveName: test1.sxt - success resolution', async () => {
      const addr = await bnsResolver.resolveName('test1.sxt');
      expect(addr).toEqual('0x084B5B4967b6EaB4EeDc628C12c7E63292cD5FC6');
    });

    it('resolveName: test2.sxt - name expired', async () => {
      const addr = await bnsResolver.resolveName('test2.sxt');
      expect(addr).toEqual(null);
    });

    // add TLD expired test
  });

  describe('resolveName', () => {
    it('lookupAddress: 0x084B5B4967b6EaB4EeDc628C12c7E63292cD5FC6 - success resolution', async () => {
      const addr = await bnsResolver.lookupAddress(
        '0x084B5B4967b6EaB4EeDc628C12c7E63292cD5FC6'
      );
      expect(addr).toEqual('test1.sxt');
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
