/**
 * Created by af121111 on 13/12/16.
 */
import React from 'react';
import { Button } from 'react-bootstrap';

const Sensor = (props) => {
    return (
        <li>
            <Button
                bsSize="large"
                style={Sensor.styles.img}
                onClick={() => props.getSens(props.sensor.id)}
                name={props.sensor.type}
            >{props.sensor.name}</Button>
        </li>
    );
};

Sensor.propTypes = {
    sensor: React.PropTypes.object.isRequired,
    getSens: React.PropTypes.func.isRequired,
};

Sensor.styles = {
    img: {
        marginBottom: '1em',
    },
};

export default Sensor;