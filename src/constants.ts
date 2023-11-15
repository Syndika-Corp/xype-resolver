export const BNS_REGISTRY_ADDRESS = {
  1: '0xa58234a10B1b4556792F3fAB29F2D2fdD1e99Be6',
  5: '0xa58234a10B1b4556792F3fAB29F2D2fdD1e99Be6',
  11155111: '0xa58234a10B1b4556792F3fAB29F2D2fdD1e99Be6',
} as Record<number, string>;

export const REGISTRY_ABI = [
  'function resolver(bytes32) view returns (address)',
  'function expiration(bytes32) view returns (uint256)',
];

export const RESOLVER_ABI = [
  'function name(bytes32) view returns (string)',
  'function addr(bytes32) view returns (address)',
];

export const DOMAIN_SEPARATOR = '.';
