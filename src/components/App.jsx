import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';


class App extends Component{
    constructor(props){
        super(props);
        this.books = [
            {title: "z/OS JCL", author: "Murach"},
            {title: "Fifth Dscipline", author: "Peter Senge"},
            {title: "Rainbow Six", author: "Tom Clancy"}
        ];
        this.state = {
            bookNumber: 2
        };
    }

goToNextBook = () => {
    let tempBookNumber = this.state.bookNumberbookNumber;
    tempBookNumber++;
    if (tempBookNumber === this.books.length){
        tempBookNumber = 0;
    }
    this.setState({
        bookNumber: tempBookNumber
    });
}

    render(){
        return  (
            <div className="container-fluid">
                <TitleBar/>
                <div className="row">
                    <div className="col-md-4">
                        {/* Buootn here to move to prev book */}
                    </div>    
                    <div className="col-md-4">
                        {/* display book with cover */}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>    
                    <div className="col-md-4">
                        {/* button here to move to next book */}
                        <button onClick={this.goToNextBook}>Next Book</button>
                    </div>
                </div>
            </div>
        )   
    }
}

export default App;
