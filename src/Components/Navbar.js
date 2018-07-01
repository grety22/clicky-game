import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return(
        <div>
            <nav class="fixed-top g-nav navbar navbar-expand-lg navbar-light bg-light">
                <a class="g-text-h navbar-brand" href="#">Click-Game</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="g-text-h-score nav-link">Score:</a>
                        </li>
                        <li class="nav-item active">
                            <a id="score" class="g-text-h nav-link">0</a>
                        </li>
                        <li class="nav-item">
                            <a class="g-text-h nav-link">|</a>   
                        </li>
                        <li class="nav-item">
                            <a class="g-text-h-topscore nav-link">Top Score:</a>
                        </li>
                        <li class="nav-item">
                            <a id="topScore" class="g-text-h nav-link">0</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}

export default Navbar;