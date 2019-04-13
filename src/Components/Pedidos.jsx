import React, { Component } from "react";
class Pedidos extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p>Bienvenidos ala Seccion de Pedidos</p>
          <button type="button" class="btn btn-warning">
            Pedidos
          </button>
        </div>
      </div>
    );
  }
}

export default Pedidos;
