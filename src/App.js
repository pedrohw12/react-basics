import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [user, setUser] = useState({
    name: "",
    country: "",
  });

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    const userCountry = localStorage.getItem("userCountry");

    if (userName && userCountry) {
      setUser({
        name: userName,
        country: userCountry,
      });
    }
  }, []);

  useEffect(() => {
    console.log(2)
  },[user.name])

  function handleRegister(e) {
    e.preventDefault();
    if (!name || !country) {
      return alert('Precisa preencher os campos')
    }
    localStorage.setItem("userName", name);
    localStorage.setItem("userCountry", country);
    setUser({ name, country });
  }

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column", width: 400 }}>
        <input placeholder="Nome" onChange={(e) => setName(e.target.value)} />
        <input
          placeholder="País"
          onChange={(e) => setCountry(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Cadastrar
        </button>
        <p>User name: {user.name}</p>
        <p>User country: {user.country}</p>
      </div>
    </div>
  );
}

export default App;
