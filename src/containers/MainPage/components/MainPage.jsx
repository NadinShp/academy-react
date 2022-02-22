import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {increment} from './actions';

function MainPage(){
    const value = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    return(
        <>
            <h1>Main Page!</h1>
            <h3>Counter: {value}</h3>
            <button type="button" onClick={()=>dispatch(increment(1))}>ADD</button>
        </>
    )
};
export default connect()(MainPage);