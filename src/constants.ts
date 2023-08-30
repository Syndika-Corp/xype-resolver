export const BNS_REGISTRY_ADDRESS = {
  1: '0x39F5FE3Dec8bf4F144C3513B573E5a77C27b4476',
  5: '0x39F5FE3Dec8bf4F144C3513B573E5a77C27b4476',
  11155111: '0x39F5FE3Dec8bf4F144C3513B573E5a77C27b4476',
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
