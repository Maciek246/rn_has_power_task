import { ROOT_URL } from '../constants';

export function fetch_photos(type, count){
    return async (dispatch) => {
        dispatch({type: 'FETCH_PHOTOS'})
        
        if(type === 'random'){
            let animals = ['birds', 'cats', 'shibes'];
            let index = Math.floor(Math.random() * animals.length);
            type = animals[index];
        }
        
        fetch(ROOT_URL + `${type}?count=${count}`,{
            method: 'GET'
        }).then(res => {
            if(res.ok){
                return res.json();
            }
        }).then(json => {
            dispatch({type: 'FETCH_PHOTOS_SUCCESS', payload: json})
        }).catch(err => {
            dispatch({type: 'FETCH_PHOTOS_FAIL'})
        })
    }
}