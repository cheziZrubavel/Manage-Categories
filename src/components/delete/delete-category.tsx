import React, { Component } from "react";
import "./delete-category.css";


interface CategoriesState {
  categoryWasClicked: boolean,
  currentCategory: any,
  showDeleteModal: boolean
}

export class DeleteCategory extends Component<any, CategoriesState> {

  public constructor(props: any) {
    super(props);
    this.state = {

      categoryWasClicked: false,
      currentCategory: null,
      showDeleteModal: true
    };
  }

  public onClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert("close");
    // this.props.onClose && this.props.onClose(e);
  };

  public save = (event: React.FormEvent<HTMLFormElement>) => {
    alert("save");
    event.preventDefault();
    // let target = event.target;
    // const formData = new FormData(target as HTMLFormElement);
    // this.props.onRegister(formData);
};

  public render(): JSX.Element {
    return (
      <div className="deleteCategory">
        <br/>
        <h2>Delete Category</h2>
        <br />
        <form onSubmit={this.save}>
          Name: &nbsp;
          <input type="text"></input>
          <br/><br/>
          <div className="actions">
            <button type="button" className="btn btn-success" onClick={(e: React.MouseEvent<HTMLButtonElement>) => { this.onClose(e); }}>Close</button> &nbsp;
            <button type="submit" className="btn btn-danger" >Save</button>
          </div>
        </form>
      </div>
    );

  }
}

export default DeleteCategory;