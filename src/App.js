import React from 'react'
import Header from './views/header.js'
import SortingSection from './views/sorting/sortingSection'

function App() {
  const style = {
    //textAlign: 'center',
    display: 'table',
    marginLeft: 'auto',
    marginRight: 'auto',
  }

  return (
    <div style={style}>
      <Header />
      <SortingSection />
    </div>
  );
}

export default App;
