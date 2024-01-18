import { JsonRpcProvider, getAddress } from 'ethers';
import { XypeResolver } from '../src';
import { getEnvVar } from '../utils/env-validation';

describe('XypeResolver', () => {
  let xypeResolver: XypeResolver;

  const PUBLIC_RPC_NODES = [
    'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
    'https://endpoints.omniatech.io/v1/eth/sepolia/public',
  ];

  describe('Common tests', () => {
    it('should create an instance of XypeResolver', async () => {
      const provider = new JsonRpcProvider(PUBLIC_RPC_NODES[0]);

      await expect(XypeResolver.init('invalid')).rejects.toThrow();

      expect((xypeResolver = await XypeResolver.init(provider)));
      expect((xypeResolver = await XypeResolver.init(PUBLIC_RPC_NODES[0])));
      expect(
        (xypeResolver = await XypeResolver.init(
          provider,
          Number((await provider.getNetwork()).chainId)
        ))
      );
    });
  });

  describe('resolveName', () => {
    it('resolveName: test1.sxt - success resolution', async () => {
      const addr = await xypeResolver.resolveName('xxx.sxt');
      expect(addr).toEqual(
        getAddress('0xc46DA945f66EBe2E55f49EF9e401ec9eA7C3eC61')
      );
    });

    it('resolveName: test2.sxt - name expired', async () => {
      const addr = await xypeResolver.resolveName('abc2.sxt');
      expect(addr).toEqual(null);
    });

    it('resolveName: invalid name format', async () => {
      const addr = await xypeResolver.resolveName('test2.sxt.eth');
      expect(addr).toEqual(null);
    });

    // add TLD expired test
  });

  describe('lookupAddress', () => {
    it('lookupAddress: 0xb305c1f2200a17E0502416B1746aB88C9B5C449f - success resolution', async () => {
      const addr = await xypeResolver.lookupAddress(
        '0xedFD627da84F2175276138d17d9e788651988E38'
      );
      expect(addr).toEqual('str2.epsr');
    });

    it('lookupAddress: 0xf2EA5Fd6538EAb3B0466f1b1A447C742d8b30eFe - expired', async () => {
      const addr = await xypeResolver.lookupAddress(
        '0xf2EA5Fd6538EAb3B0466f1b1A447C742d8b30eFe'
      );
      expect(addr).toEqual(null);
    });
  });
});
