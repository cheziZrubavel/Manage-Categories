import React, { Component } from "react";
import "./view.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CategoryModel } from "../../models/category-model";
import { LocationModel } from "../../models/location-model";
import { MContext } from "../provider/provider";

interface viewState {
  category: CategoryModel[],
  location: LocationModel[],
  categoryWasClicked: boolean,
  currentCategory: any,
  showAddModal: boolean
}

export class view extends Component<any, viewState> {

  public constructor(props: any) {
    super(props);
    this.state = {
      category: [{ name: "Restaurants" },
      { name: "Clothes" },
      { name: "Malls" }
      ],
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
      currentCategory: null,
      showAddModal: true

    };
  }

  componentWillMount() {
    let checkLocal = localStorage.getItem("categoryArr");
    if (!!checkLocal){
      // let ls = JSON.stringify(localStorage.getItem("categoryArr"));
      this.state.category.push(JSON.parse(JSON.stringify(checkLocal)));
      console.log("ls:"+this.state.category);
    }
  };

  public categoryClicked = (context: any) => (e: any) => {
    let val = e.target as HTMLDivElement;
    console.log(val.textContent);
    // this.setState({
    //   categoryWasClicked: true,
    //   currentCategory: val.textContent
    // });
    // localStorage.setItem("categoryWasClicked", "true");
    // localStorage.setItem("currentCategory", JSON.parse(JSON.stringify(val.textContent)));
    context.setMessage(val.textContent);
  }

  public render(): JSX.Element {
    
    return (
      <div className="view">
        {/* <h2>Category List</h2>
        <Container >
          <Row className="row">
            {this.state.category.map(c => <ul key={c.name}>
              <Col sm={12} xl={4} className="cat">
                <li>
                  <Accordion>
                  {/* <button onClick={() => { context.setMessage("New Arrival") }}>Send</button> }
        <MContext.Consumer>
          {(context: any) => (
                    <Card onClick={this.categoryClicked(context)}>
                      <Accordion.Toggle as={Card.Header} eventKey="0">
                        {c.name}
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          {this.state.location.filter(l => l.category === c.name)
                            .map(filterd =>
                              <ul key={filterd.name}>
                                <li> {filterd.name} </li>
                                <li> {filterd.address} </li>
                                <li> {filterd.coordinates} </li>
                                <li> {filterd.category} </li>
                              </ul>)}
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>)}
                    </MContext.Consumer>            
                  </Accordion>
                </li>
              </Col>
            </ul>
            )}
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default view;