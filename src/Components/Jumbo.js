import React, { Component } from 'react';

class Jumbo extends Component {
    render () {
        return (
            <div class="g-jumbo jumbotron jumbotron-fluid">
                <div class="container ">
                    <h1 class="g-text-h-clk display-4 align-middle font-weight-bold animated bounce">Clicky Game</h1>
                    <p class="g-text-h-msg lead font-weight-bold">Click on an image to earn points, but don't click on any more than once!.</p>
                </div>
            </div>
        )
    }
}

export default Jumbo;