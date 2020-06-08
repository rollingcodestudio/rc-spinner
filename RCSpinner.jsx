import React, { Component } from "react";

export default class LoadingScreen extends Component {
  render() {
    return (
      <div class="container">
        {/* Spinner */}
        <div class="row" style="height: 65vh;">
          <div class="col"></div>
          <div class="col-md-2 my-auto shadow bg-light rounded py-4">
            <div class="m-auto" style="width: 4rem; height: 4rem;">
              <div class="spinner"></div>
              <p class="m-0 p-0 strong rclogo-center">{"< >"}</p>
            </div>
            <h1 class="mt-3 lead text-gray text-center">cargando datos...</h1>
          </div>
          <div class="col"></div>
        </div>
        {/* /Spinner */}
      </div>
    );
  }
}
