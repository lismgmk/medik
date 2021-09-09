import React, {Component} from "react";
import {getEmployees} from "../Api/api";
import {Route, Switch} from "react-router";
import {getAllEmploues} from "./appReducer";
import {connect} from "react-redux";

class App extends Component {
  state = {
    loading: true,

  };

  componentDidMount() {
    this.props.getAllEmploues()
        .then(() =>
            this.setState({
              loading: false
            }))
  }

  render() {
    const {loading} = this.state;

    if (loading) {
      return "Loading...";
    }
    //
    // const {loading} = this.props;
    //
    // if (loading) {
    //     return "Loading...";
    // }


    return <div>

      {console.log(this.props.emploues)}
      {this.props.emploues.map(i => {
        return <div>
          {`${i.firstName} ${i.lastName}`}
        </div>
      })}

      <Switch>
        {/*<Route exact path={"/emploues"} render={() => <Emploues/>}/>*/}
        <Route path={"*"} render={() => <h1>404: PAGE NOT FOUND</h1>}/>
      </Switch>
    </div>;


  }

}
    //
    // componentDidMount() {
    //     this.props.getAllEmploues()
    // }




// let MapStateToProps = (state) => {
//     return {
//         emploues: state.app.emploues,
//         loading: state.app.loading
//     }
// }


function mapDispatchToProps(dispatch) {

    return {
        getAllEmploues: () => dispatch(getAllEmploues())

    }
}

  let MapStateToProps = (state) => {
  return {
    emploues: state.app.emploues,
  }
}
export default connect(MapStateToProps, mapDispatchToProps)(App)
// export default connect(MapStateToProps, {getAllEmploues})(App)