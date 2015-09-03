/**
 * Created by dinesh on 03/09/15.
 */
exports.loadConfig = function () {
    config = [];
    config.url = "127.0.0.1";
    config.port = "3000";
    config.baseUrl = "http://" + config.url + ":" + config.port;
    return config;
};