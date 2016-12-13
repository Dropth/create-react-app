/**
 * Created by af121111 on 13/12/16.
 */
import React from 'react';

const mouseOverColor = '#ADD8E6';
const mouseOutColor = 'white';

const SensVal = (props) => {
    return (
        <li
            style={SensVal.styles.li}
            onMouseOver={(e) => { e.target.style.backgroundColor = mouseOverColor; }}
            onMouseOut={(e) => { e.target.style.backgroundColor = mouseOutColor; }}
            /*onClick={() => props.playPreview(props.track.preview_url)}*/
        >
            {props.sensVal.name}
        </li>
    );
};

SensVal.propTypes = {
    sensVal: React.PropTypes.object.isRequired,
    /*playPreview: React.PropTypes.func.isRequired,*/
};

SensVal.styles = {
    li: {
        fontSize: '1.5em',
        padding: '0.2em',
        listStyleType: 'none',
        backgroundColor: mouseOutColor,
    },
};

export default SensVal;