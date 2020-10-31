import React, { Component } from 'react';
import Carousel from './components/Carousel';
import FormSearch from './components/FormSearch';
import MovieList from './components/MovieList';

export default class HomePage extends Component {
 
    render() {
        return (
            <React.Fragment>
                <Carousel />
                <FormSearch />
                <MovieList />
            </React.Fragment>
        )
    }
}





