/**
 * Created by af121111 on 13/12/16.
 */
import React from 'react';
import SensVal from './SensVal';

const SensValList = (props) => {
    const sensVal = props.sensVal.map((sensVal) =>
        <SensVal key={sensVal.id} sensoValu={sensVal} /*playPreview={props.playPreview}*/ />);

    return (
        <div className="col-md-3">
            <ul style={{ listStyle: 'none' }}>
                {sensVal}
            </ul>
        </div>
    );
};

SensValList.propTypes = {
    sensVal: React.PropTypes.array.isRequired,
    /*playPreview: React.PropTypes.func.isRequired,*/
};

export default SensValList;