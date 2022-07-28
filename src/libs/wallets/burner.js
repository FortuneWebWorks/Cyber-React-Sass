import Web3 from 'web3';
const web3Endpoint =
  'https://eth.getblock.io/mainnet/?api_key=91953f06-fc0a-4a48-87fc-145e8cf6d385';
const web3 = new Web3(web3Endpoint);

const signTxData = async (txData) => {
  try {
    const signedTx = await web3.eth.accounts.signTransaction(
      txData,
      privateKey
    );
    return {
      success: true,
      raw: signedTx?.rawTransaction
    };
  } catch (e) {
    return {
      success: false,
      message: e.message
    };
  }
};

export default signTxData;
