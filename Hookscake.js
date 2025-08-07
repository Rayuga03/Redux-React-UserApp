import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {buyCake} from '../redux'
function  Hookscake() {
    const numOfCakes = useSelector(state =>state.cake.numOfCakes)
    const dispatch=useDispatch()
  return (
    <div>
       <h2>Num of cakes -{numOfCakes} </h2>
       <button onclick ={()=>dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default Hookscake