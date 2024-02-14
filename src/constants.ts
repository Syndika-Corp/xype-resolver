export const XYPE_REGISTRY_ADDRESS = {
  1: '0x5db0E9eD56EF5B3760cE7887BAf215a39dE8d61E',
  5: '',
  11155111: '0x2C1E6E5F4cd8Aa0f103e8653ea109A0b8b1aAf70',
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
