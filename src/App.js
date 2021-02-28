import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';

import './App.css';

const App = () => {
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div className="App">
      <MDEditor
        value={value}
        onChange={setValue}

      />
      <MDEditor.Markdown source={value} />
    </div>
  );
}

export default App;
