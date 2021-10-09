import React from 'react';
import PagesHome from './components/pages/Home';

function App() {
  const code = new URLSearchParams(window.location.search).get('code');
  return (
    <div className="App">
      <PagesHome/>
    </div>
  );
}

export default App;
