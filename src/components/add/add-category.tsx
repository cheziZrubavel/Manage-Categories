import React, { Component } from "react";
import "./add-category.css";


interface CategoriesState {
  categoryWasClicked: boolean,
  currentCategory: any
}

export class AddCategory extends Component<any, CategoriesState> {

  public accArr: {}[] = [];
  public allEntries: {}[] = [];

  public constructor(props: any) {
    super(props);
    this.state = {
      categoryWasClicked: false,
      currentCategory: null
    };
  }

  public onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("close");
    // this.props.onClose && this.props.onClose(e);
  };

  // get the category name and add to localStorage
  public save = (event: React.FormEvent<HTMLFormElement>) => {
    alert("save");
    event.preventDefault();
    let target = event.target;
    const formData = new FormData(target as HTMLFormElement);
    this.accArr = [];
    for (const entry of formData) {
      let res: any = entry.reduce((acc, curr: any, i, arr) => ({ ...acc, ["name"]: arr[i] }), []);
      this.accArr.push(res);
    };
    let tempo = localStorage.getItem("categoryArr");
    if (tempo) {
      this.allEntries = JSON.parse(tempo);
    };
    Array.prototype.push.apply(this.allEntries, this.accArr)
    // console.log(this.allEntries);
    localStorage.setItem("categoryArr", JSON.stringify(this.allEntries));
  };

  public render(): JSX.Element {
    return (
      <div className="addCategory">
        <br />
        <h2>Add Category</h2>
        <br />
        <form onSubmit={this.save}>
          Name: &nbsp;
          <input type="text" name="name" autoFocus={true}/>
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

export default AddCategory;