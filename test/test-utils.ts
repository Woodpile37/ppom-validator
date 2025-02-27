import { ControllerMessenger } from '@metamask/base-controller';
import * as ControllerUtils from '@metamask/controller-utils';

import { PPOMController } from '../src/ppom-controller';
import { StorageKey } from '../src/ppom-storage';

export const buildStorageBackend = (obj = {}) => {
  return {
    read: async (_key: StorageKey): Promise<any> => Promise.resolve(),
    write: async (_key: StorageKey, _data: any): Promise<void> =>
      Promise.resolve(),
    delete: async (_key: StorageKey): Promise<void> => Promise.resolve(),
    dir: async (): Promise<StorageKey[]> => Promise.resolve([]),
    ...obj,
  };
};

export const simpleStorageBackend = buildStorageBackend();

export const DUMMY_ARRAY_BUFFER_DATA = new ArrayBuffer(123);

export const storageBackendReturningData = buildStorageBackend({
  read: async (_key: StorageKey): Promise<any> =>
    Promise.resolve(DUMMY_ARRAY_BUFFER_DATA),
});

export const VERSION_INFO = [
  {
    name: 'blob',
    chainId: '0x1',
    version: '1.0.0',
    checksum:
      '409a7f83ac6b31dc8c77e3ec18038f209bd2f545e0f4177c2e2381aa4e067b49',
    signature:
      '0x304402206d433e9172960de6717d94ae263e47eefacd3584a3274a452f8f9567b3a797db02201b2e423188fb3f9daa6ce6a8723f69df26bd3ceeee81f77250526b91e093614f',
    filePath: 'blob',
  },
  {
    name: 'data',
    chainId: '0x1',
    version: '1.0.3',
    checksum:
      '409a7f83ac6b31dc8c77e3ec18038f209bd2f545e0f4177c2e2381aa4e067b49',
    signature:
      '0x304402206d433e9172960de6717d94ae263e47eefacd3584a3274a452f8f9567b3a797db02201b2e423188fb3f9daa6ce6a8723f69df26bd3ceeee81f77250526b91e093614f',
    filePath: 'data',
  },
];

const PPOM_VERSION_PATH = 'https://ppom_cdn_base_url/ppom_version.json';

export const buildFetchDataSpy = (
  versionData: any = {
    status: 200,
    json: () => VERSION_INFO,
  },
  blobData: any = {
    status: 200,
    arrayBuffer: () => new TextEncoder().encode('test\n'),
  },
) => {
  return jest
    .spyOn(ControllerUtils, 'timeoutFetch' as any)
    .mockImplementation((url: any) => {
      if (url === PPOM_VERSION_PATH) {
        return versionData;
      }
      return blobData;
    });
};

export const buildFetchSpy = (
  versionData: any = {
    status: 200,
    json: () => VERSION_INFO,
  },
  blobData: any = {
    status: 200,
    arrayBuffer: () => new ArrayBuffer(123),
  },
  eTag?: number,
) => {
  return jest
    .spyOn(ControllerUtils, 'timeoutFetch' as any)
    .mockImplementation((url: any) => {
      if (url === PPOM_VERSION_PATH) {
        return {
          headers: {
            get: () => eTag ?? Math.round(Math.random() * 100),
          },
          ...versionData,
        };
      }
      return blobData;
    });
};

class PPOMClass {
  #jsonRpcRequest: any;

  new = (jsonRpcRequest: any) => {
    this.#jsonRpcRequest = jsonRpcRequest;
    return this;
  };

  validateJsonRpc = async () => {
    return Promise.resolve();
  };

  free = () => undefined;

  testJsonRPCRequest = async (method: string, args2: any) =>
    await this.#jsonRpcRequest(method ?? 'eth_blockNumber', args2);
}

export const buildPPOMController = (args?: any) => {
  const controllerMessenger = new ControllerMessenger();
  const ppomController = new PPOMController({
    storageBackend: storageBackendReturningData,
    provider: () => undefined,
    chainId: '0x1',
    onNetworkChange: () => undefined,
    messenger: controllerMessenger.getRestricted({
      name: 'PPOMController',
    }),
    securityAlertsEnabled: true,
    onPreferencesChange: () => undefined,
    state: {},
    ppomProvider: {
      ppomInit: () => undefined,
      PPOM: new PPOMClass(),
    },
    cdnBaseUrl: 'ppom_cdn_base_url',
    ...args,
  });
  return ppomController;
};

// eslint-disable-next-line jsdoc/require-jsdoc
export async function flushPromises() {
  // Wait for promises running in the non-async timer callback to complete.
  // From https://github.com/facebook/jest/issues/2157#issuecomment-897935688
  return new Promise(jest.requireActual('timers').setImmediate);
}
