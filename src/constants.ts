export const BNS_REGISTRY_ADDRESS = {
  1: '0x13FCAb43cd9deA934528350eAd71754949b73303',
  5: '0x13FCAb43cd9deA934528350eAd71754949b73303',
  11155111: '0x13FCAb43cd9deA934528350eAd71754949b73303',
} as Record<number, string>;

export const REGISTRY_ABI = [
  'function resolver(bytes32) view returns (address)',
  'function ttl(bytes32) view returns (uint64)',
];

export const RESOLVER_ABI = [
  'function name(bytes32) view returns (string)',
  'function addr(bytes32) view returns (address)',
];

export const DOMAIN_SEPARATOR = '.';
