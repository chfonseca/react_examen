import React, { Component } from "react";
class Productos extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Fluid jumbotron</h1>
          <p>Bienvenidos ala Seccion de Productos</p>
          <button type="button" class="btn btn-danger">
            Productos
          </button>
        </div>
      </div>
    );
  }
}

export default Productos;
