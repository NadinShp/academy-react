import { useEffect } from 'react';
import {useDispatch} from 'react-redux';
import * as actions from './actions';

// import Person from './components/Person';
// import {requestPeople} from './actions';
// import {showLoader} from './actions';
// import MovieList from './components/MovieList';
export default function MainPage(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actions.getMainPageData.request());
    }, [dispatch])
    return(
        <>
            <h1>Main Page</h1>
            {/* <MovieList /> */}
            {/* <button type="button" onClick={()=>dispatch(showLoader)}>Get people list</button> */}
            {/* <Person /> */}
        </>
    )
};
