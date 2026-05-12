import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then((response) => response.json())
      .then((toysData) => setToys(toysData));
  }, []);

  function handleAddToy(newToy) {
    setToys([...toys, newToy]);
  }

  function handleUpdateToy(updatedToy) {
  const updatedToys = toys.map((toy) => {
    if (toy.id === updatedToy.id) {
      return updatedToy;
    } else {
      return toy;
    }
  });

  setToys(updatedToys);
}

  function handleDeleteToy(deletedToyId) {
  const updatedToys = toys.filter((toy) => toy.id !== deletedToyId);
  setToys(updatedToys);
}

  return (
    <>
      <Header />
      <ToyForm onAddToy={handleAddToy} />

      <div className="buttonContainer">
        <button>Add a Toy</button>
      </div>

<ToyContainer
  toys={toys}
  onDeleteToy={handleDeleteToy}
  onUpdateToy={handleUpdateToy}
/>   </>
  );
}

export default App;
