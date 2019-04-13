import React, { Component } from "react";
class Cliente extends Component {
  state = {};
  render() {
    return (
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Fluid jumbotron</h1>
          <p>Bienvenidos ala Seccion de Clientes</p>
          <button type="button" class="btn btn-success">
            Cliente
          </button>
        </div>
      </div>
    );
  }
}

export default Cliente;
