import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [people, setPeople] = useState(data);
  const handleClickClear = () => {
    setPeople([])
  }

  return (
    <main>
      <div className="container">
        <h3>{ people.length } Birthdays</h3>
        <List peoples={people} />
        <button onClick={() => handleClickClear()}>Clear all</button>
      </div>
    </main>
  );
}

export default App;
