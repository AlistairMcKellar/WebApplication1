define(["webApiMethods", "knockout", "methodUnderTest", "komapping"], function (webApiMethods, ko, testing, komapping) {
    describe("testing that we can mock out a web api call for instant returns", function () {

        beforeEach(function () {
            spyOn(webApiMethods, "get").and.callFake(function (url, params, success) {
                success({someValue : "thisValue"});
            });
        });

        it("computed value is corrected", function () {
            var testingLocal = new testing();
            expect(webApiMethods.get).toHaveBeenCalled();
            expect(testingLocal.testedValue()).toEqual("thisValue Transaction Summary");
        });
    });
});