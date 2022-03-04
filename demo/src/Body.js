import React, {useState} from 'react';

function Body() {
  const [name, setName] = useState(0);
  console.log('rendering');
  return <div>
      <input value={name} onInput={e=> setName(e.target.value)}/>
      <p>Name is set to: {name}</p>
  </div>;
}

export default Body;
