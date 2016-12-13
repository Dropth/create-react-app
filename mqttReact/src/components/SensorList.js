/**
 * Created by Florian on 29/11/2016.
 */

import React from 'react';
import Sensor from './Sensor';

const SensorList = (props) => {
    const sensors = props.sensors.map((sensor) =>
        <Sensor key={sensor.id} sensor={sensor} getSens={props.getSens} />);

    return (
        <div className="col-md-4" style={SensorList.styles.div}>
            <ul style={SensorList.styles.ul}>
                {sensors}
            </ul>
        </div>
    );
};

SensorList.styles = {
    div: {
        width: 370,
        marginLeft: 30,
        textAlign: 'right',
        maxHeight: '85vh',
        overflowY: 'auto',
    },
    ul: {
        listStyle: 'none',
    },
};

SensorList.propTypes = {
    sensors: React.PropTypes.array.isRequired,
};

export default SensorList;
/**
 * Created by af121111 on 13/12/16.
 */
