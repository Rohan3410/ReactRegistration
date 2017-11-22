import React,{ Component } from 'react';
import RegisterPage from './RegisterPage';
import express from 'express';

class App extends Component{
    constructor(props){
       super(props);
       this.state={ data:[] };

    }
    loadDataFromServer(){
        express.get(this.props.url)
        .then(res =>{
            this.setState({ data:res.data });
        })
    }
}