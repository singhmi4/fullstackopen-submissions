import React, { useState } from 'react';


const App = () => {
  const [ persons, setPersons ] = use([
    { name: 'Arto Hellas' }
  ]);
  const [ newName, setNewName ] = useState('');

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        
      </form>
    </div>
  );
};

export default App;
