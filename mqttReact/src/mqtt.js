import  { Data, Datum, Sensor, Positive, Percent, OnOff, OpenClose}  from './object';
import axios from 'axios';

/*function fetch(request, callback) {
    axios.get(request)
        .then(response => {
            callback(response.data);
        });
}*/

var mqtt = require('mqtt')

const SensorType = {
    pos: 'POSITIVE_NUMBER',
    per:'PERCENT',
    onof:'ON_OFF',
    opcl:'OPEN_CLOSE',
}
let cpt=0;

let tempChambre=0;
let tempSalle=0;
let yeux=0;
let attention=0;

let tab = [];

export function getBroker(url,callback) {

    console.log("coucou")

    var client  = mqtt.connect({ host: url, port: 8080 })

    client.on('connect', function () {
        client.subscribe('value/#')
    })

    client.on('message', function (topic, message) {

        //console.log(message.toString())
        //console.log(sensor(topic,message).name)
        sensor(topic,message);

        console.log(message.toString())

        if(tempChambre !== 0 && tempSalle !== 0 && yeux !== 0 && attention !== 0)
            callback(tab);

    })

    fetch(tab,callback);
}

export function getSensor() {return tab;}

function createSensor(nom,data,isok) {

    var obj = JSON.parse(data);

    let name = nom.split("/")[1];
    let id = name;
    let res;
    let dat = new Datum(obj.value);

    switch (obj.type) {
        case SensorType.pos:
            res = new Positive(id, name, obj.type, dat);
            //
            break;
        case SensorType.per:
            res = new Percent(id, name, obj.type, dat);
            break;
        case SensorType.onof:
            res = new OnOff(id, name, obj.type, dat);
            break;
        case SensorType.opcl:
            res = new OpenClose(id, name, obj.type, dat);
            break;
        default:
            throw {name: 'SensorType', message: 'Le type transmis n\'est pas reconnu'};
    }

    Object.assign(res.data, dat);

    return res;

}

function sensor (message,data) {
    let name = message.split("/")[1];
    var obj = JSON.parse(data);


    if (name === "temperatureChambre") {
        if(tempChambre === 0) {
            let t = createSensor(message,data,true);
            tempChambre = t;
            Object.assign(t, tempChambre);
        }
        else {
            tempChambre.data.value = obj.value;
        }

    }
    else if (name === "temperatureSalleA111") {
        if (tempSalle !== 0) {
            tempSalle.data.value = obj.value;
        }
        else {
            let t = createSensor(message,data,true);
            tempSalle = t;
            Object.assign(t, tempSalle);
        }

    }
    else if (name === "MesYeux") {
        if (yeux !== 0) {
            yeux.data.value = obj.value;
        }
        else {
            let t = createSensor(message,data,false);
            yeux = t;
            Object.assign(t, yeux);
        }

    }
    else if (name === "MonAttention") {
        if (attention !== 0) {
            attention.data.value = obj.value;
        }
        else {
            let t = createSensor(message,data,false);
            attention = t;
            Object.assign(t, attention);
        }

    }

    tab[0] = tempChambre;
    tab[1] = tempSalle;
    tab[2] = yeux;
    tab[3] = attention;

    return tab;
}