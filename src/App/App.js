import React, {Component} from "react";
import {Redirect, Route, Switch} from "react-router";
import WorkLog from "../Worklog/WorkLog";
import Employes from "../Employes/Employes";

export class App extends Component {

  render() {

    return <div>
      <Switch>
        <Route exact path={"/"} render={() => <Employes/>}/>

        <Route exact path={"/employes"} render={() => <Employes/>}/>
        <Route exact path={"/worklog"} render={() => <WorkLog/>}/>
        <Route exact path={"/404"} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
        <Redirect from={'*'} to={'/404'}/>
      </Switch>
    </div>;
  }

}
