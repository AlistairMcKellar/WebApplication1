define(['jquery'], function ($) {
    var webApiMethods = function () {
        var self = this;
        self.get = function (url, params, success) {
            $.getJson(url, params, success);
        };
    };

    return new webApiMethods();
});