import { useState } from 'react';

export default function MyForm() {
    const [username, setUsername] = useState("");
    const [password, setUserPassword] = useState("");


    return (
        <>
            <form method='POST'>
                <label>Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                </label>
                <br></br>
                <br></br>

                <label>Password

                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setUserPassword(e.target.value)}
                    />
                </label>
                <br></br>
                <br></br>

                <button type='submit'>Submit!</button>
            </form>
            <div>
            </div>
        </>

    )
}