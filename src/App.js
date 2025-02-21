import React, { useState } from "react";
import "./App.css";

function App() {
  const [amigos, setAmigos] = useState([]); // Estado para almacenar la lista de amigos
  const [nombreInput, setNombreInput] = useState(""); // Estado para el campo de entrada
  const [ganador, setGanador] = useState(""); // Estado para almacenar el ganador

  // Función para añadir un amigo
  const añadirAmigo = () => {
    if (nombreInput.trim()) {
      setAmigos([...amigos, nombreInput.trim()]); // Añadir el nombre al array
      setNombreInput(""); // Limpiar el campo de entrada
    } else {
      alert("Por favor, ingresa un nombre válido.");
    }
  };

  // Función para realizar el sorteo
  const realizarSorteo = () => {
    if (amigos.length > 0) {
      const indiceGanador = Math.floor(Math.random() * amigos.length); // Índice aleatorio
      setGanador(amigos[indiceGanador]); // Establecer el ganador
    } else {
      alert("No hay amigos en la lista. Añade algunos primero.");
    }
  };

  return (
    <div className="container">
      <h1>El Amigo Secreto</h1>
      <div className="input-section">
        <input
          type="text"
          value={nombreInput}
          onChange={(e) => setNombreInput(e.target.value)}
          placeholder="Ingresa el nombre de tu amigo"
        />
        <button onClick={añadirAmigo}>Añadir Amigo</button>
      </div>
      <div className="lista-amigos">
        <h2>Lista de Amigos</h2>
        <ul>
          {amigos.map((amigo, index) => (
            <li key={index}>{amigo}</li>
          ))}
        </ul>
      </div>
      <button onClick={realizarSorteo}>Realizar Sorteo</button>
      <div className="ganador">
        <h2>El amigo secreto es:</h2>
        <p>{ganador}</p>
      </div>
    </div>
  );
}

export default App;