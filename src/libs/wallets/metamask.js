import Web3 from 'web3'
import { ethers } from 'ethers'
const AbiCoder = require('web3-eth-abi')

const toFixed = (x) => {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1])
    if (e) {
      x *= Math.pow(10, e - 1)
      x = '0.' + new Array(e).join('0') + x.toString().substring(2)
    }
  } else {
    var e = parseInt(x.toString().split('+')[1])
    if (e > 20) {
      e -= 20
      x /= Math.pow(10, e)
      x += new Array(e + 1).join('0')
    }
  }
  return x
}

class MetaMask {
  constructor(ethereum) {
    this.ethereum = ethereum
    this.flashbotUrl = 'https://relay.flashbots.net'
    this.web3Endpoint =
      'https://eth.getblock.io/mainnet/?api_key=91953f06-fc0a-4a48-87fc-145e8cf6d385'
  }

  #isMetaMaskInstalled = () => {
    return Boolean(this.ethereum && this.ethereum.isMetaMask)
  }
  #isMetaMaskInstalledLocally = (ethereum) => {
    return Boolean(ethereum && ethereum.isMetaMask)
  }
  getBalance = async (address) => {
    try {
      const web3 = new Web3(this.web3Endpoint)
      const resBalance = await web3.eth.getBalance(address)
      return { status: 200, content: { balance: resBalance } }
    } catch (e) {
      return { status: 400, content: { message: e.message } }
    }
  }

  calculateEtherValue = async (
    value,
    maxFeePerGas,
    maxPriorityFeePerGas,
    gasLimit
  ) => {
    const etherValue = toFixed(
      parseInt(gasLimit) * parseFloat(maxFeePerGas / 1e9) +
        parseFloat(maxPriorityFeePerGas / 1e9) +
        parseFloat(value)
    )

    const rounding = parseFloat(
      parseFloat(String(etherValue)).toFixed(3).replace(/0+$/, '') + 0.001
    )

    return rounding
  }

  estimateGas = async (
    fromAddress,
    contractAddress,
    data,
    value,
    maxFeePerGas,
    maxPriorityFeePerGas
  ) => {
    try {
      const web3 = new Web3(this.web3Endpoint)
      const gasEstimate = await web3.eth.estimateGas({
        from: fromAddress,
        to: contractAddress,
        value: web3.utils.toHex(
          web3.utils.toWei(Number(value).toString(), 'ether')
        ),
        data: data,
        maxFeePerGas: web3.utils.toHex(
          web3.utils.toWei(Number(maxFeePerGas).toString(), 'gwei')
        ),
        maxPriorityFeePerGas: web3.utils.toHex(
          web3.utils.toWei(Number(maxPriorityFeePerGas).toString(), 'gwei')
        )
      })

      if (String(gasEstimate).toLowerCase().includes('revert'))
        return { status: 200, content: { result: false } }

      return { status: 200, content: { result: true } }
    } catch (e) {
      const RETURN_DATA = ['supply', 'insufficient', 'value', 'limit']
      if (
        String(e.message).toLowerCase().includes('value') ||
        String(e.message).toLowerCase().includes('incorrect') ||
        String(e.message).toLowerCase().includes('limit') ||
        String(e.message).toLowerCase().includes('incorrect ')
      ) {
        return {
          status: 400,
          content: { message: e.message }
        }
      }
      if (String(e.message).toLowerCase().includes(RETURN_DATA)) {
        return {
          status: 400,
          content: { message: e.message }
        }
      }
      if (String(e.message).toLowerCase().includes('revert')) {
        return { status: 200, content: { result: false } }
      }
      return {
        status: 400,
        content: { message: e.message }
      }
    }
  }

  onLoadConnect = async (ethereum) => {
    try {
      if (this.#isMetaMaskInstalledLocally(ethereum)) {
        const accounts = await ethereum.request({ method: 'eth_accounts' })
        const ethereumAddress = accounts[0]
        if (String(ethereumAddress).includes('0x')) return true
      }
      return false
    } catch {
      return false
    }
  }

  onClickConnect = async () => {
    try {
      if (this.#isMetaMaskInstalled()) {
        await this.ethereum.request({ method: 'eth_requestAccounts' })
        const accounts = await this.ethereum.request({ method: 'eth_accounts' })
        const ethereumAddress = accounts[0]
        return { status: 200, content: { address: ethereumAddress } }
      }
      return {
        status: 400,
        content: { message: 'MetaMask Not Found ! \n Please Install MetaMask' }
      }
    } catch (e) {
      return {
        status: 400,
        content: { message: e.message }
      }
    }
  }

  encodedMintAbiData = async (mintAbi, args) => {
    return await AbiCoder.encodeFunctionCall(mintAbi, args)
  }

  signTx = async (
    address,
    value,
    gasLimit,
    maxFeePerGas,
    maxPriorityFeePerGas,
    contractAddress,
    mintAbi,
    flagAbi,
    args,
    flagArgs
  ) => {
    try {
      if (maxFeePerGas <= maxPriorityFeePerGas)
        return {
          status: 400,
          content: {
            message: 'Max Fee Per Gas must be more than Max Priority Fee'
          }
        }

      const web3 = new Web3(this.web3Endpoint)

      const utils = ethers.utils

      const maxFee = web3.utils.toHex(
        web3.utils.toWei(Number(maxFeePerGas).toString(), 'gwei')
      )

      const maxPriorityFee = web3.utils.toHex(
        web3.utils.toWei(Number(maxPriorityFeePerGas).toString(), 'gwei')
      )

      const oldValue = value

      value = web3.utils.toHex(
        web3.utils.toWei(Number(value).toString(), 'ether')
      )

      if (mintAbi == null)
        return {
          status: 400,
          content: {
            message: 'Please Select Your Mint ABI Function.'
          }
        }

      const data = AbiCoder.encodeFunctionCall(mintAbi, args)

      if (!String(flagAbi.name).toLowerCase().includes('main')) {
        if (flagAbi == null)
          return {
            status: 400,
            content: {
              message: 'Please Select Your Flag.'
            }
          }

        const resCheckFlag = await this.checkFlag(
          flagAbi,
          contractAddress,
          flagArgs
        )

        if (resCheckFlag.status === 400)
          return {
            status: 400,
            content: { message: resCheckFlag.content.message }
          }
      } else {
        const resEstimateGas = await this.estimateGas(
          address,
          contractAddress,
          data,
          oldValue,
          maxFeePerGas,
          maxPriorityFeePerGas
        )
        if (resEstimateGas.status === 400) return resEstimateGas
      }

      const nonce = await web3.eth.getTransactionCount(address, 'pending')

      const tx = {
        nonce: nonce,
        chainId: 1,
        type: 2,
        value: value,
        data: data,
        gasLimit: parseInt(gasLimit),
        maxFeePerGas: maxFee,
        maxPriorityFeePerGas: maxPriorityFee,
        to: contractAddress
      }

      const signingDataHashed = utils.keccak256(utils.serializeTransaction(tx))

      const signature = await this.ethereum.request({
        method: 'eth_sign',
        params: [address, signingDataHashed]
      })

      const signedTransaction = utils.serializeTransaction(tx, signature)

      return { status: 200, content: { rawTx: signedTransaction } }
    } catch (e) {
      console.log(e)
      return { status: 400, content: { message: e.message } }
    }
  }

  checkFlag = async (flagAbi, contractAddress, flagArgs) => {
    try {
      const web3 = new Web3(this.web3Endpoint)

      const contract = new web3.eth.Contract([flagAbi], contractAddress)

      let result = await contract.methods[flagAbi.name]().call()

      if (flagArgs != null && flagArgs.length > 0) {
        if (String(result) == String(flagArgs[0]))
          return { status: 200, content: { result: true } }
        else return { status: 200, content: { result: false } }
      }

      return { status: 200, content: { result: result } }
    } catch (e) {
      console.log(e)
      return { status: 400, content: { message: e.message } }
    }
  }

  sendSignedTx = async (signedTx, isFlashbot) => {
    try {
      if (isFlashbot) {
        const flashbotWeb3 = new Web3('https://rpc.flashbots.net')
        const tx = await flashbotWeb3.eth.sendSignedTransaction(signedTx)
        return {
          status: 200,
          content: { data: tx?.transactionHash || tx?.blockHash }
        }
      }
      const flashbotWeb3 = new Web3(this.web3Endpoint)
      const tx = await flashbotWeb3.eth.sendSignedTransaction(signedTx)
      return {
        status: 200,
        content: { data: tx?.transactionHash || tx?.blockHash }
      }
    } catch (e) {
      console.log(e)
      return {
        status: 400,
        content: { message: e.message }
      }
    }
  }
  sendTx = async (
    fromAddress,
    value,
    gasLimit,
    maxFeePerGas,
    maxPriorityFeePerGas,
    contractAddress,
    mintAbi,
    args
  ) => {
    try {
      const web3 = new Web3(this.web3Endpoint)

      const data = AbiCoder.encodeFunctionCall(mintAbi, args)

      const transactionParameters = {
        from: fromAddress,
        to: contractAddress,
        value: web3.utils.toHex(
          web3.utils.toWei(Number(value).toString(), 'ether')
        ),
        maxPriorityFeePerGas: web3.utils.numberToHex(
          web3.utils.toWei(Number(maxPriorityFeePerGas).toString(), 'gwei')
        ),
        maxFeePerGas: web3.utils.numberToHex(
          web3.utils.toWei(Number(maxFeePerGas).toString(), 'gwei')
        ),
        gasLimit: parseInt(gasLimit),
        data: data
      }

      const resTx = await this.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters]
      })

      return { status: 200, content: { data: resTx } }
    } catch (e) {
      console.log(e)
      return { status: 400, content: { message: e.message } }
    }
  }
}

export default MetaMask
