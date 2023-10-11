export const BNS_REGISTRY_ADDRESS = {
  1: '0x77A10a68f1BC651a0CD965F696B4C32b7202b016',
  5: '0x77A10a68f1BC651a0CD965F696B4C32b7202b016',
  11155111: '0x77A10a68f1BC651a0CD965F696B4C32b7202b016',
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
