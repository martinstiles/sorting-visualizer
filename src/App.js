import React from 'react'
import Header from './views/header.js'
import SortingSection from './views/sorting/sortingSection'

function App() {
  return (
    <div className="App">
      <Header> Sorting visualizer </Header>
      <SortingSection />
    </div>
  );
}

export default App;
