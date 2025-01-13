import React from 'react'
import logo from '../logo.svg';
import '../pages.css'

const HomePage = () => {
  return (
    <div className='PageForm'>
      <main className="HomePage">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Ожи<code>да</code>ние...
          </p>
      </main>
    </div>
  )
};

export default HomePage;
