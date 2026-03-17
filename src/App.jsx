import { useEffect, useState } from 'react'
import './index.css'

function App() {
    const [code, setCode] = useState("")

    useEffect(() => {
        // If someone opens this page, maybe they got routed here from a deep link?
        // Let's parse the URL
        const path = window.location.pathname
        if (path.startsWith('/join/')) {
            const roomCode = path.replace('/join/', '')
            setCode(roomCode)
        }
    }, [])

    return (
        <div className="container">
            <div className="card">
                <h1>Bidding Tic-Tac-Toe</h1>

                {code ? (
                    <>
                        <p>You've been invited to join a game! (Code: <strong>{code}</strong>)</p>
                        <p className="instruction">If you have the app installed, this link should have opened automatically.</p>
                        <a href={`challengettc://join/${code}`} className="button" style={{ marginTop: '20px', display: 'inline-block' }}>
                            Open in App
                        </a>
                    </>
                ) : (
                    <>
                        <p>The ultimate strategic take on classic Tic-Tac-Toe.</p>
                        <p>Download the app to play against your friends!</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default App
