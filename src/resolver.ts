import {
  Contract,
  JsonRpcProvider,
  ZeroAddress,
  getAddress,
  namehash,
  isError,
} from 'ethers';
import {
  BNS_REGISTRY_ADDRESS,
  DOMAIN_SEPARATOR,
  REGISTRY_ABI,
  RESOLVER_ABI,
} from './constants';
import type { Web3Connection } from './types/web3-connection.type';

export class BnsResolver {
  /**
   * Initiate BnsResolver class
   *
   * @param _provider JsonRpcProvider provider
   * @param _bnsRegistry BnsRegistry smart-contract
   * @returns New BnsResolver instance
   */
  constructor(
    private _provider: JsonRpcProvider,
    private _bnsRegistry: Contract
  ) {}

  /**
   * Creates the BnsResolver instance with specified Web3Connection type
   *
   * @param connection A string representing RPC URL or the JsonRpcProvider object
   * @returns New BnsResolver instance
   */
  public static async init(connection: Web3Connection): Promise<BnsResolver> {
    const provider =
      connection instanceof JsonRpcProvider
        ? connection
        : new JsonRpcProvider(connection);

    // add network support check
    const bnsRegistry = new Contract(
      BNS_REGISTRY_ADDRESS[Number((await provider.getNetwork()).chainId)],
      REGISTRY_ABI,
      provider
    );
    return new BnsResolver(provider, bnsRegistry);
  }

  /**
   * Resolves the name matching it with the corresponding Ethereum address registered in Bloprime Name Service
   *
   * @param name The alias name e.g. 'alex.sxt'
   * @returns Returns the Ethereum address or null if the alias expired or doesn't exist
   */
  public async resolveName(name: string): Promise<string | null> {
    // Example of supported format: alex.sxt
    if (name.split(DOMAIN_SEPARATOR).length != 2) {
      return null;
    }

    // Get the Top Level Domain
    const tld = name.split(DOMAIN_SEPARATOR)[1];
    try {
      const node = namehash(name);
      const parentNameHash = namehash(tld);

      // Get the name and TLD expiration
      const nameExpiration = await this._bnsRegistry.expiration(node);
      const tldExpiration = await this._bnsRegistry.expiration(parentNameHash);
      const currentTimestampInSeconds = this.getCurrentTimestamp();

      // Domain is not valid if it or it's tld are expired
      if (
        nameExpiration == null ||
        tldExpiration == null ||
        nameExpiration < currentTimestampInSeconds ||
        tldExpiration < currentTimestampInSeconds
      ) {
        return null;
      }

      // Get the resolver address from TLD
      const resolver = await this._bnsRegistry.resolver(parentNameHash);
      if (resolver == null || resolver === ZeroAddress) {
        return null;
      }
      // Setup Resolver contract
      const resolverContract = new Contract(
        resolver,
        RESOLVER_ABI,
        this._provider
      );

      // Resolve the address
      const address: string = getAddress(await resolverContract.addr(node));
      if (address == null || address === ZeroAddress) {
        return null;
      }
      return address;
    } catch (error) {
      // No data was returned
      if (isError(error, 'BAD_DATA') && error.value === '0x') {
        return null;
      }
      // Something reverted
      if (isError(error, 'CALL_EXCEPTION')) {
        return null;
      }
      throw error;
    }
    return null;
  }

  /**
   * This function performs reverse resolution returning the primary alias of the given address.
   * It also performs the reverse check
   *
   * @param address The Ethereum address e.g. '0x084B5B4967b6EaB4EeDc628C12c7E63292cD5FC6'
   * @returns Returns the alias or null
   */
  public async lookupAddress(address: string): Promise<string | null> {
    address = getAddress(address);
    const node = namehash(address.substring(2).toLowerCase() + '.addr.reverse');
    try {
      // @note The expiration will be checked in reverse check

      // Get the resolver address
      const resolver = await this._bnsRegistry.resolver(node);
      if (resolver == null || resolver === ZeroAddress) {
        return null;
      }

      // Setup Resolver contract
      const resolverContract = new Contract(
        resolver,
        RESOLVER_ABI,
        this._provider
      );

      // Get domain name
      const name: string = await resolverContract.name(node);

      // Perform the reverse check
      const check = await this.resolveName(name);
      if (check !== address) {
        return null;
      }
      return name;
    } catch (error) {
      // No data was returned
      if (isError(error, 'BAD_DATA') && error.value === '0x') {
        return null;
      }
      // Something reverted
      if (isError(error, 'CALL_EXCEPTION')) {
        return null;
      }
      throw error;
    }
    return null;
  }

  private getCurrentTimestamp(): number {
    return Math.floor(Date.now() / 1000);
  }
}
