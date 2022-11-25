import React from 'react';
import './styles/App.css';

import {Testimony} from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
          <h1>Testimonies</h1>
          <Testimony
            name='Emma Watson'
            country='England'
            position='CEO'
            company='Facebook'
            img='emma'
            testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nunc. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nunc.'
           />
          <Testimony
            name='Abdul Kalam'
            country='India'
            position='president'
            company='Google'
            img='abdul'
            testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nunc. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nunc.'/>
          <Testimony
            name='Bill Gates'
            country='USA'
            position='CEO'
            company='Microsoft'
            img='blanquito'
            testimony='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nunc. Sed euismod, nunc vel ultricies lacinia, nisl nisl aliquet nisl, nec aliquet nisl nisl eu nunc.'/>
      </div>
    </div>
  );
}

export default App;
