import React from 'react';
import Note from './components/Note';

const App = ({ notes }) => {

  const result = notes.map(note => note.content);

  console.log(result);

  return (
    <div>
        <ul>
          {notes.map((note, i) => 
            <Note key={note.id} note={note} />
          )}
        </ul>
    </div>
  );
};

export default App;