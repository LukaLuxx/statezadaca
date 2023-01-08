import React, { useState } from "react";
import "./App.css";

function App() {
    const [users, setUser] = useState([
        {
            ime: "Branko",
            prezime: "Branković",
            dob: 32,
        },
        {
            ime: "Janko",
            prezime: "Janković",
            dob: 42,
        },
        {
            ime: "Marko",
            prezime: "Marković",
            dob: 52,
        },
    ]);
    return (
        <div className="App">
            {users.map((user) => (
                <h1>
                    {" "}
                    <hr />
                    Ime:{user.ime} <br />
                    Prezime:{user.prezime} <br />
                    Dob:{user.dob} <hr />
                </h1>
            ))}
        </div>
    );
}

export default App;
