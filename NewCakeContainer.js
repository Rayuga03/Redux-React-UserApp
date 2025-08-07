import React,{useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'
function NewCakeContainer(props) {
    const [number,setNumber]=useState(1)
  return (
    <div>
        <h2>Number of Cakes - {props.numOfCakes}</h2>
        <input type='text' value={number} onChange={e=>setNumber(e.target.value)}></input>
        <button onClick={()=> props.buyCake(number)}>BUY {number} CAKES</button>
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
        buyCake: number => dispatch(buyCake(number))
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)