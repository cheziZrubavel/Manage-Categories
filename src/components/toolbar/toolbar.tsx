import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import { MContext } from "../provider/provider";

interface ToolbarState {
    //   category: CategoryModel[],
    //   location: LocationModel[],
    categoryWasClicked: boolean
    currentCategory: any,
    title: string
    //   showAddModal: boolean
}

export class Toolbar extends Component<any, ToolbarState> {
    static contextType = MContext;
    public constructor(props: any) {
        super(props);
        this.state = {
            categoryWasClicked: false,
            currentCategory: null,
            title: ""
            //   showAddModal: true
        };
    }
    public clearCategory = () => {
        // alert("cc");
        this.context.setMessage("");
    };
    
    componentDidUpdate() {
        let value = this.context.state.message;
        // let v2 = JSON.stringify(value);
      };

    public render(): JSX.Element {
        return (
            <div className="toolbar">
                
                {/* <MContext.Consumer>
                 {(context: any) => {(this.updateS)}} 
                 {/* onClick={(e: any) => { this.addCategory(e)}} */}
                {/* </MContext.Consumer> */}

                <Navbar bg="light" expand="lg">
                
                    { this.context.state.message ? <Navbar.Brand >{this.context.state.message}</Navbar.Brand> : <Navbar.Brand>Categories</Navbar.Brand>}
                {/* localStorage.getItem("categoryWasClicked") */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        
                            {this.context.state.message ? <NavLink to="/edit" activeClassName="active-route" exact >Edit</NavLink> : <NavLink to="/add" activeClassName="active-route" exact >Add Category</NavLink>} &nbsp;&nbsp;
                            {this.context.state.message && <NavLink to="/delete" activeClassName="active-route" exact >Delete</NavLink>}&nbsp;&nbsp;
                            {this.context.state.message && <NavLink to="/add" activeClassName="active-route" exact >View</NavLink >}&nbsp;&nbsp;
                            
                            <NavLink to="/categories" onClick={this.clearCategory} activeClassName="active-route" exact >All Categories</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* <AddCategoryModal onClose={this.showAddModal} showAddModal={this.state.showAddModal}>A</AddCategoryModal> */}
            </div>
        )
    }
}

Toolbar.contextType = MContext;

export default Toolbar;