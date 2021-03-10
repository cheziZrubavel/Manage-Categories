import React, { Component } from "react";
import { MContext } from "../provider/provider";
import "./edit-category.css";


interface CategoriesState {
  categoryWasClicked: boolean,
  currentCategory: any,
  currentVal: string,
  newVal: string
}

export class EditCategory extends Component<any, CategoriesState> {

  public accArr: {}[] = [];
  public allEntries: {}[] = [];
  static contextType = MContext;

  public constructor(props: any) {
    super(props);
    this.state = {
      categoryWasClicked: false,
      currentCategory: null,
      currentVal: '',
      newVal: ''
    };
  }
  componentDidMount() {
    this.setState({
      currentVal: this.context.state.message
    });
  }
  public valueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value;
    if (inputVal) {
      this.setState({
        newVal: inputVal
      });
    }
  }

  public onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("close");
    // this.props.onClose && this.props.onClose(e);
  };

  // get the category name and add to localStorage
  public save = (event: React.FormEvent<HTMLFormElement>) => {
    alert("save");
    event.preventDefault();
    let tempo = localStorage.getItem("categoryArr");
    if (tempo) {
      let allCategories = JSON.parse(tempo);
      let res = allCategories.find((x: { name: string; }) => x.name === this.state.currentVal);
      let index = allCategories.indexOf(res);
      allCategories.fill(res.name = this.state.newVal, index, index++);
      localStorage.setItem("categoryArr", JSON.stringify(allCategories));
    };
  };

  public render(): JSX.Element {
    return (
      <div className="editCategory">
        <br />
        <h2>Edit Category</h2>
        <br />
        <form onSubmit={this.save}>
          Name: &nbsp;
          <input type="text" defaultValue={this.state.currentVal} onChange={this.valueHandler} autoFocus={true} />
          <br /><br />
          <div className="actions">
            <button type="button" className="btn btn-success" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { this.onClose(e); }}>Close</button> &nbsp;
            <button type="submit" className="btn btn-danger" >Save</button>
          </div>
        </form>
      </div>
    );

  }
}

EditCategory.contextType = MContext;

export default EditCategory;