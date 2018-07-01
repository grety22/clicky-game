import React, { Component } from 'react';
import Footer from './Footer';
import Jumbo from './Jumbo';
import Navbar from './Navbar';

var imgSrcArray = ['1', '2', '3', '4', '5', '6','7','8','9','10','11','12','13','14','15','16'];

class Image extends Component {
    handleClick(){
        console.log('Hola mundo');
        const newArray = imgSrcArray.sort();
        imgSrcArray = newArray;
    }

    render() {
        return (
            <div className="col-3">
                <img onClick={this.handleClick} alt="clickygame" className="img-responsive g-imag g-img-container" src={this.props.src}/>
            </div>
        )
    }
}

class ImageContainer extends Component {
    handleClick(){
        alert('hola mundo');
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                      {
                          this.props.imgSrc.map((option)=>{
                            return <Image key={option} onClick={this.handleClick} src={require(`./images/${option}.png`)} /> 
                          })
                      }
                </div>
            </div>
        );
    }
}

class Header extends Component {
  render() {
    
    return (
      <div >
        <Navbar/>
        <Jumbo/>
        <ImageContainer imgSrc={imgSrcArray}/>
        <Footer/>
      </div>
    );
  }
}

export default Header;