import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'
function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>BUY ICE CREAMS</button>
    </div>
  )
}
const mapStateToProps=state => {
    return {
        numOfIceCreams:state.iceCream.numOfIceCreams //here the first numOfCakes is the props reflecting the numOfCakes in the redux store 
    }
}
const mapDispatchToProps=dispatch => {
    return {
        buyIceCream:()=> dispatch(buyIceCream())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IceCreamContainer)