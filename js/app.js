import Moralis  from 'moralis'; 
// import the external library
import { EvmChain } from '@moralisweb3/evm-utils';

try {
    const address = '0x1234567890123456789012345678901234567890';

    const chain = EvmChain.ETHEREUM;

    await Moralis.start({
        apiKey: 'HPv3BCMpE4QCggWHASRGICvAN3uyXZgngh5EBDcfIjqR89rMzMlOZ3vWW5RrQh9i',
        // ...and any other configuration
    });

    const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
    });

    console.log(response?.result);
} catch (e) {
    console.error(e);
}