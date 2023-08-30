import { JsonRpcProvider } from 'ethers';
import { BnsResolver } from '../src';
import { getEnvVar } from '../utils/env-validation';
describe('BnsResolver', () => {
  let bnsResolver: BnsResolver;
  describe('Common tests', () => {
    it('should create an instance of BnsResolver', async () => {
      const provider = new JsonRpcProvider(getEnvVar('PUBLIC_RPC'));

      await expect(BnsResolver.init('invalid')).rejects.toThrow();

      expect((bnsResolver = await BnsResolver.init(provider)));
      expect((bnsResolver = await BnsResolver.init(getEnvVar('PUBLIC_RPC'))));
    });
  });
});
