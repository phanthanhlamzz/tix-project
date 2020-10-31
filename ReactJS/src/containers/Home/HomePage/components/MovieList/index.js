import React, { Component } from "react";
import {actMovieList} from './modules/action';
import { connect } from "react-redux";

class MovieList extends Component {
  componentDidMount(){
    this.props.getMovieList();
  }
  movieItemsRender = (data)=>{
    return data.map((item,index)=>{
      return(
        <div key={index} className="tix-movie-card">
          <img src={item.hinhAnh} />
          <h6>{item.tenPhim}</h6>
          <button className="btn btn-success">Đặt vé</button>
        </div>
      )
    });
  }
  render() {
    if(this.props.data){
      //console.log(this.props.data);
      return (
        <section className="tix-movie-list">
          <div>
          {this.movieItemsRender(this.props.data)}
          </div>
        </section>
      );
    }else{
      return (<p>Loading</p>)
    }
  
  }
}

const mapStateToProps = (state) =>{
  return {
      loading:state.movieListReducer.loading,
      data:state.movieListReducer.data,
      err:state.movieListReducer.err,
      
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
      getMovieList : () =>{
          dispatch(actMovieList());
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (MovieList);