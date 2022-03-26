import './App.css'

import { useEffect, useState } from 'react'
import {
  useWallet,
  useConnectedWallet,
  WalletStatus,
} from '@terra-money/wallet-provider'

import * as execute from './contract/execute'
import * as query from './contract/query'
import { ConnectWallet } from './components/ConnectWallet'

const URL_TMP = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=%s"

function App() {
  const [count, setCount] = useState(null)
  const [updating, setUpdating] = useState(true)
  const [resetValue, setResetValue] = useState(0)
  const [url, setUrl] = useState('')
  const [qrUrl, setQrUrl] = useState('')
  const [isQrUrlSubmitted, setIsQrUrlSubmitted] = useState(false)

  const { status } = useWallet()

  const connectedWallet = useConnectedWallet()

  useEffect(() => {
    const prefetch = async () => {
      if (connectedWallet) {
        setCount((await query.getCount(connectedWallet)).count)
      }
      setUpdating(false)
    }
    prefetch()
  }, [connectedWallet])

  const onClickIncrement = async () => {
    setUpdating(true)
    await execute.increment(connectedWallet)
    setCount((await query.getCount(connectedWallet)).count)
    setUpdating(false)
  }

  const onClickReset = async () => {
    setUpdating(true)
    console.log(resetValue)
    await execute.reset(connectedWallet, resetValue)
    setCount((await query.getCount(connectedWallet)).count)
    setUpdating(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let user_url = URL_TMP.replace("%s", url)
    setIsQrUrlSubmitted(true)
    setQrUrl(user_url)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <div style={{ display: 'inline' }}>
          COUNT: {count} {updating ? '(updating . . .)' : ''}
          <button onClick={onClickIncrement} type="button">
            {' '}
            +{' '}
          </button>
        </div>
        {status === WalletStatus.WALLET_CONNECTED && (
          <div style={{ display: 'inline' }}>
            <input
              type="number"
              onChange={(e) => setResetValue(+e.target.value)}
              value={resetValue}
            />
            <button onClick={onClickReset} type="button">
              {' '}s
              reset{' '}
            </button>
          </div>
        )}
        <ConnectWallet />
      </header> */}
      <form onSubmit={handleSubmit}>
        <input class="name formEntry" placeholder="Name" type='text' value={url} onChange={(e) => setUrl(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
      <button onClick={() => window.open(qrUrl)}>{isQrUrlSubmitted ? "View QR Code" : "Not Submitted"}</button>
    </div>
  )
}

export default App
