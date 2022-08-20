import { Fragment, useContext } from 'react'
import 'styles/dashboard/autoMint.scss'
import DropDown from 'components/DropDown'
import Input from 'components/Input'
import Button from 'components/Button'
import ButtonGroup from 'components/ButtonGroup'
import Proggress from 'components/Proggress'
import Switch from 'components/Switch'
import { AutoMintContext } from 'contexts/autoMintContext'
// import { VcheckValidateMintInputs } from 'apiHandler/inputChecking';

import ApiHandler from 'apiHandler/node'
import Result from 'components/Result'

import { toast } from 'react-toastify'

const dropdownData = [
  { title: 'Your Wallet', data: 'Your Wallet' },
  { title: 'Private', data: 'priveate' },
]

const selectWalletData = [
  { title: 'MetaMask Wallet', data: 'MetaMask Wallet' },
  { title: 'Burner Wallet', data: 'Burner Wallet' },
]

const signatureData = [
  { title: 'Signed', data: 'Signed' },
  { title: 'Pre Signed', data: 'Pre Signed' },
]

const modeData = [
  { title: 'Flash Bot', data: 'Flash Bot' },
  { title: 'Normal', data: 'Normal' },
]

const AutoMint = ({ callBack }) => {
  const {
    contractAddress,
    flagAbi,
    setFlagAbi,
    mintAbi,
    setMintAbi,
    mintInputs,
    setMintInputs,
    flagOutputs,
    setFlagOutputs,
    activeBtn,
    setActiveBtn,
    selectWallet,
    setSelectWallet,
    mode,
    setMode,
    tasks,
    setTasks,
    mintPrice,
    mintInputsRendered,
    edit,
  } = useContext(AutoMintContext)
  const node = new ApiHandler()

  const getFromContractAdress = async () => {
    try {
      let response = await node.checkContract(contractAddress.current)
      setFlagAbi({
        items: response.flagAbi.allFlagFunctions,
        defaultValue:
          response.flagAbi.defaultFlagFunction ||
          response.flagAbi.allFlagFunctions[0],
      })
      setMintAbi({
        items: response.mintAbi.allMintFunctions,
        defaultValue:
          response.mintAbi.defaultMintFunction ||
          response.mintAbi.allMintFunctions[0],
      })

      toast('Success', {
        type: 'success',
        style: { fontSize: '1.5rem' },
      })
    } catch (error) {
      toast('The contract isn’t correct, check the address again', {
        type: 'error',
        style: { fontSize: '1.5rem' },
      })
    }
  }

  const getContractAddress = (value) => {
    contractAddress.current = value
  }

  const mintCallBack = (key, data) => {
    setMintInputs(data.inputs)

    mintInputsRendered.current = {}
  }

  const flagCallBack = (key, data) => {
    setFlagOutputs(data.outputs)
  }

  const onButtonGroupChange = (activeBtn) => {
    setActiveBtn(activeBtn)
  }

  const onSelectWalletChange = (key, data) => {
    setSelectWallet(key)
  }

  const onModeChange = (key, data) => {
    setMode(key)
  }

  const onSetMintPrice = (value) => {
    mintPrice.current = value
  }

  const onMintInputsChange = (value, title) => {
    mintInputsRendered.current = {
      ...mintInputsRendered.current,
      [title]: value,
    }
  }

  // Create Task
  const onCreateTask = () => {
    // Placeholder for validate

    const editTarget = tasks.filter((task) => task.id === edit.current.id)[0]

    if (editTarget) {
      editTarget.contractAddress = contractAddress.current
      editTarget.mintPrice = mintPrice.current
      editTarget.mode = mode
    } else {
      setTasks((prev) => [
        ...prev,
        {
          id: tasks.length,
          contractAddress: contractAddress.current,
          mintPrice: mintPrice.current,
          fee: 12,
          mode: mode,
          status: 'idl',
        },
      ])
    }

    edit.current = null

    callBack()
  }

  return (
    <div className='container'>
      <div className='container__scroll'>
        <DropDown
          title='Select Wallet'
          placeholder={'Your Wallet'}
          items={selectWalletData}
          callBack={onSelectWalletChange}
        />

        {selectWallet === 'Private Key' && (
          <Input title='Your Private Key' placeholder='54132136463fdsa' />
        )}

        {/* <DropDown
          title="RPC"
          placeholder={'Your Wallet'}
          items={dropdownData}
        /> */}

        {/* <Input title="RPC HTTPS URL *" placeholder="https://google.com" />

        <Input title="RPC WSS URL *" placeholder="https://google.com" /> */}

        <Input
          title='Contract Address *'
          placeholder='dsf21135413541sdfa'
          callBack={getContractAddress}
          value={edit?.current?.contractAddress}
          require={true}
        />

        <div className='container__multi-input'>
          <Input title='ABI *' placeholder='Fetch' />
          <Button
            text='Get'
            callBack={getFromContractAdress}
            padding='0.7rem 1rem'
          />
        </div>

        {selectWallet !== 'Private Key' && (
          <DropDown
            title='Signature Type'
            placeholder={'Normal'}
            items={signatureData}
          />
        )}

        <DropDown
          title='Mode'
          placeholder={'Normal'}
          items={modeData}
          callBack={onModeChange}
          value={edit?.current?.mode}
        />

        {console.log(mintAbi)}
        <DropDown
          title='Mint Function'
          placeholder={'Mint -[1]'}
          items={mintAbi?.items || []}
          defaultValue={mintAbi?.defaultValue || []}
          callBack={mintCallBack}
        />

        {/* Mint function input generating */}
        <div className='container__2row-input'>
          {mintInputs.map((item, index) => (
            <Fragment key={index}>
              <Input
                title={item.name}
                placeholder={item.name}
                callBack={onMintInputsChange}
              />
            </Fragment>
          ))}
        </div>

        <div className='container__multi-input'>
          <Input
            title='Mint Price *'
            placeholder='[1]'
            callBack={onSetMintPrice}
            value={edit?.current?.mintPrice}
          />

          {selectWallet === 'Private Key' && (
            <Input title='Ton Count/Repeat' placeholder='3' />
          )}
        </div>

        <ButtonGroup
          items={['Auto', 'Multiplier', 'Custom']}
          activeDefault={0}
          callBack={onButtonGroupChange}
        />

        {activeBtn === 'Multiplier' && <Proggress min={0} max={100} sign='%' />}

        {activeBtn === 'Custom' && (
          <div className='container__multi-input'>
            <DropDown
              title='Max Fee Per Gas'
              placeholder={'8'}
              items={dropdownData}
              fontSize='1rem'
            />
            <DropDown
              title='Max Peiority Fee'
              placeholder={'8'}
              items={dropdownData}
              fontSize='1rem'
            />
            <DropDown
              title='Gas Limit'
              placeholder={'8'}
              items={dropdownData}
              fontSize='1rem'
            />
          </div>
        )}

        {mode !== 'Main Flag' && (
          <div className='container__multi-input'>
            <DropDown
              title='Flip State Function'
              placeholder={'Mint -[1]'}
              items={flagAbi?.items || []}
              defaultValue={flagAbi?.defaultValue || []}
              callBack={flagCallBack}
            />
          </div>
        )}
        {/* Flag function input generating */}
        {flagOutputs.map((item, index) => (
          <div className='container__multi-input' key={index}>
            <Input title={item.type} placeholder={item.type} />
          </div>
        ))}

        <Input
          title='Custom Hex Data'
          placeholder='dsf21135413541sdfa'
          callBack={getContractAddress}
        />

        {activeBtn !== 'Multiplier' && (
          <div className='container__multi-input'>
            {activeBtn !== 'Custom' && (
              <Input
                title='Custom Gas Limit'
                placeholder='50000'
                callBack={getContractAddress}
              />
            )}

            <Result />
          </div>
        )}

        <Switch title='Timer Enable?' mode='row' />

        <div className='container__multi-input'>
          <DropDown
            title='Years'
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
          <DropDown
            title='Mounth'
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
          <DropDown
            title='Day'
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
        </div>

        <div className='container__multi-input'>
          <DropDown
            title='Hours'
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
          <DropDown
            title='Minutes'
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
          <DropDown
            title='Seconds'
            placeholder={'8'}
            items={flagAbi?.items || []}
            callBack={flagCallBack}
          />
        </div>

        <Button
          text={edit?.current ? 'Update Task' : 'Create Task'}
          callBack={onCreateTask}
        />
      </div>
    </div>
  )
}

export default AutoMint
