import React, { Component } from "react";
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Toolbar } from "../toolbar/toolbar";
import { AddCategory } from "../add/add-category";
import { Categories } from "../categories/categories";
import { MyProvider} from "../provider/provider";
import EditCategory from "../edit/edit-category";
import DeleteCategory from "../delete/delete-category";

class App extends Component {
  public render(): JSX.Element {
    return (
      <div className="App">

        <MyProvider>

        {/* Wrapper for the Routing Mechanism: */}
        <BrowserRouter>

          <header>
            <Toolbar />
          </header>

          <main>
            <Switch>
              <Route path="/categories" component={Categories} exact />
              <Route path="/add" component={AddCategory} exact />
              <Route path="/edit" component={EditCategory} exact />
              <Route path="/delete" component={DeleteCategory} exact />
              {/* <Route path="/about" component={About} exact /> */}
              <Redirect from="/" to="/categories" exact />
            </Switch>
          </main>

        </BrowserRouter>
        </MyProvider>
      </div>

    );
  }
}


//   public addCategory = (e: any) => {
//     alert("in");
//     this.setState({
//         showAddModal: true
//     });
// };

// public showAddModal = (e: React.MouseEvent<HTMLButtonElement>) => {
//   this.setState({
//       showAddModal: !this.state.showAddModal
//   });
// };

export default App;