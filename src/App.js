import React from 'react';
import BuyAcorn from './containers/BuyAcorn';
import EatAcorn from './containers/EatAcorn';
import DisplayAcorn from './containers/DisplayAcorn';

//the App gets the props from the AppContainer currently, check the string
const App = (props) => (
  <main>

    <BuyAcorn />
    <DisplayAcorn><h1>{props.string}{props.number}</h1></DisplayAcorn>
    <EatAcorn />
  </main>
);

export default App;