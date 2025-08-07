import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
function cakecontainer(props) {
  return (
    <div>
        <h2>Number of Cakes - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>BUY CAKE</button>
    </div>
  )
}
const mapStateToProps=state => {
    return {
        numOfCakes:state.cake.numOfCakes //here the first numOfCakes is the props reflecting the numOfCakes in the redux store 
    }
}
const mapDispatchToProps=dispatch => {
    return {
        buyCake:()=> dispatch(buyCake())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(cakecontainer)