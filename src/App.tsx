import React from 'react';
import Headcom from './component/Headcom';
import Footercom from './component/Footercom';
import Todo from './component/Todocom';


function App() {

  

  return (
    <div>
      {/* header section */}
      <Headcom></Headcom>

      {/* todo section */}
      <div className='mx-auto max-w-4xl'>
        <Todo></Todo>
      </div>
      {/* footer section */}
      <Footercom></Footercom>
    </div>
  );
}

export default App;
