/**
 * Created by af121111 on 21/11/16.
 */

export class Data {
    constructor() {
    }
}

export class TimeSeries extends Data {
    constructor(values,labels) {
        super();
        this._values=values;
        this._labels=labels;
    }
    get values() {
        return this._values;
    }
    set values(value) {
        this._values = value;
    }
    set labels(label) {
        this._labels = label;
    }
    get labels() {
        return this._labels;
    }

    ajouter (val,date) {
        this._values.push(val);
        this._labels.push(date);
    }
}

export class Datum extends Data {
    constructor(value) {
        super();
        this._value = value;
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
    }

}

export class Sensor {

    constructor(id,name,type) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._data = new Data();
    }

    get id() {
        return this._id;
    }
    set id(nId) {
        this._id = nId;
    }

    get name() {
        return this._name;
    }
    set name(nom) {
        this._name = nom;
    }

    get type() {
        return this._type;
    }
    set type(t) {
        this._type = t;
    }

    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }

    toString() {return "ID = " + this._id + ", Name = " + this._name + ", Type = " + this._type + ", Data = " + this._data.value;}

}

export class Positive extends Sensor {

    constructor(id,name,type) {
        super (id,name,type);

        this._data = new Datum();
    }
}

export class Percent extends Sensor {

    constructor(id,name,type) {
        super (id,name,type);

        this._data = new Datum();
    }
}

export class OnOff extends Sensor {

    constructor(id,name,type) {
        super (id,name,type);

        this._data = new Datum();
    }
}

export class OpenClose extends Sensor {

    constructor(id,name,type) {
        super (id,name,type);

        this._data = new Datum();
    }
}