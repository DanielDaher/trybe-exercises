import React from 'react';
import './App.css';

class HelloWorld extends React.Component {
    render() {
        return (
        <div className = 'main-content'>
            <h1 className = 'helloWorld'>Hello, World!</h1>
            <p>loremipsumloremipsum</p>
        </div>
        );
    }
}

export default HelloWorld