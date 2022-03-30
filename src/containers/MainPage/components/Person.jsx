// import {useDispatch, useSelector} from 'react-redux';
// import {connect} from 'react-redux';
// import {increment} from './actions';
export default function Person(person){
      // const value = useSelector(state=>state.counter);
    // const dispatch = useDispatch();
    return(
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{person.name}</h5>
        </div>
      </div>
    )
}