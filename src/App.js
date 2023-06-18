import React, { useState } from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).length;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <body>    
      <div className='box1'>
    <h1>Responsive Paragraph<br></br>Word Counter</h1>
    <textarea
      rows="5"
      cols="50"
      placeholder="Type something..."
      value={text}
      onChange={handleChange}
    />
    <p>Word Count: {wordCount}</p>
  </div></body>

  );
}

export default App;
