import React from 'react';
import { connect } from 'react-redux';

import './style.css';

class Form extends React.Component{
    
    render() {
        let {countHandler, typeHandler, sendRequest, status} = this.props;
        return (
            <div>
                <form className="form">
                    <input className="field" type="number" min="1" max="10" placeholder="1" onChange={countHandler}/>
                    <select className="field" name="animalsType" onChange={typeHandler}>
                        <option value="cats" default>Koty</option>
                        <option value="shibes">Psy</option>
                        <option value="birds">Ptaki</option>
                        <option value="random">Losowo</option>
                    </select>
                    <button className="submitBtn" disabled={status} onClick={sendRequest}>
                        {status?'Ładowanie danych':'Szukaj'}
                    </button>
                   
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        status: state.fetching
    }
}



export default connect(mapStateToProps, null)(Form);