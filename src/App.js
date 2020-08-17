import React from 'react';
import {Route, Switch} from "react-router-dom";
import Content from "./Content";
import ContactPage from "./ContactPage";



function App() {
  return (
   <Switch>
     <Route path='/' exact render={() => <Content />}/>
     <Route path='/contacts' exact render={() => <ContactPage />}/>
   </Switch>
  );
}

export default App;
