export const BNS_REGISTRY_ADDRESS = {
  1: '0x5e15Be567B44800c88A5775Da5689b6A31e74705',
  5: '0x5e15Be567B44800c88A5775Da5689b6A31e74705',
  11155111: '0x5e15Be567B44800c88A5775Da5689b6A31e74705',
} as Record<number, string>;

export const REGISTRY_ABI = [
  'function resolver(bytes32) view returns (address)',
  'function expiration(bytes32) view returns (uint256)',
  'function owner(bytes32) view returns (address)',
];

export const REGISTRAR_ABI = ['function isDomainPaused() view returns (bool)'];

export const RESOLVER_ABI = [
  'function name(bytes32) view returns (string)',
  'function addr(bytes32) view returns (address)',
];

export const DOMAIN_SEPARATOR = '.';
