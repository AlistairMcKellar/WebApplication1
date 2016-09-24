define(["knockout", "webApiMethods"], function (ko, webApiMethods) {
    return function testing() {
        var self = this;

        self.someValue = ko.observable();
        self.someValueWithValue = ko.observable("hello");
        self.testedValue = ko.computed(function () {
            if (self.someValue()) {
                return self.someValue() + " " + "Transaction Summary";
            }
            return "Transaction Summary";
        });

        webApiMethods.get("api/test", { id: "1" }, function (data) {
            self.someValue(data.someValue);
        });
    };
});