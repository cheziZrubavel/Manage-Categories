import React, { Component } from "react";
import "./categories.css";
import { CategoryModel } from "../../models/category-model";
import { LocationModel } from "../../models/location-model";
import { MContext } from "../provider/provider";

interface CategoriesState {
  category: CategoryModel[],
  location: LocationModel[],
  categoryWasClicked: boolean,
  currentCategory: any
}

export class Categories extends Component<any, CategoriesState> {
  public categoryArr: CategoryModel[] = [
      { name: "Restaurants" },
      { name: "Clothes" },
      { name: "Malls" }
      ];
  static contextType = MContext;
  public constructor(props: any) {
    super(props);

    this.state = {
      category: [],
      // [{ name: "Restaurants" },
      // { name: "Clothes" },
      // { name: "Malls" }
      // ],
      location: [{
        name: "Dixie",
        address: "toha 3",
        coordinates: "l49 x w52",
        category: "restaurants"
      },
      {
        name: "Castro",
        address: "alenbi 180",
        coordinates: "l38 x w52",
        category: "clothes"
      },
      {
        name: "Azrieli",
        address: "Menachem Begin 3",
        coordinates: "l29 x w49",
        category: "malls"
      },
      ],
      categoryWasClicked: false,
      currentCategory: null
    };
    
  }

  componentDidMount() {
    let checkLocal = localStorage.getItem("categoryArr");
    if (!!checkLocal) {
      let joined = this.state.category.concat(JSON.parse(checkLocal));
      this.setState({ category: joined });
      // localStorage.setItem("categoryArr", JSON.stringify(joined));
    } else {
      localStorage.setItem("categoryArr", JSON.stringify(this.categoryArr));
    }
  };

  public categoryClicked = (context: any) => (e: any) => {
    e.target.classList.toggle('active');
    let val = e.target as HTMLDivElement;
    console.log(val.textContent);
    context.setMessage(val.textContent);
  }

  public render(): JSX.Element {

    return (
      <div className="categories">
        <h2>Category List</h2><br/><br/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <ul >
                {this.state.category.map((c, i) =>
                  <li className="col-sm-12 col-xl-3" key={`c.name-${i}`} onClick={this.categoryClicked(this.context)}>
                    {c.name}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Categories.contextType = MContext;

export default Categories;