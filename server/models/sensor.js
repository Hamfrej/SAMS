var mongo = require('../services/database');

/**
 * @param {string} name - The name of the sensor.
 * @param {string} access_key - Sensors access_key.
 * @param {string} ip_addres - IP Adress of the sensor.
 */
var sensorSchema = mongo.Schema({
    sensor_name: String,
    access_key: String,
    ip_address: String,
    output1: Boolean,
    output2: Boolean,
    output3: Boolean
});

var Sensor = mongo.model('Sensor', sensorSchema);

module.exports = Sensor;
