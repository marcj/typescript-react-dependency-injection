import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import deepkitLogo from './assets/deepkit_white.svg'

import './App.css'
import { Logger } from "./logger.ts";

function App(props: object, logger: Logger) {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
                <a href="https://deepkit.io" target="_blank">
                    <img src={deepkitLogo} className="logo deepkit" alt="Deepkit logo"/>
                </a>
            </div>
            <h1>Vite + React + Deepkit</h1>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>

            <button onClick={() => logger.log('Hi there')}>Log message</button>


            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
