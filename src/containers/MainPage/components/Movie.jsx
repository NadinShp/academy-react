import getMainPageData from '../actions';
export default function Movie(movie){
    console.log(getMainPageData);
    return(
        <>
            {/* <a href={movie}>{movie}</a> */}
            <p>page with information about function</p>
        </>
    )
}