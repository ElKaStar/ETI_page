import React from 'react';
import {Route, Switch} from "react-router-dom";
import Content from "./Content";
import ContactPage from "./ContactPage";
import {Relax} from "./Relax";




function App() {
  return (
   <Switch>
     <Route path='/' exact render={() => <Content />}/>
       <Route path='/relax' exact render={() => <Relax />}/>
     <Route path='/contacts' exact render={() => <ContactPage />}/>
   </Switch>
  );
}

export default App;
