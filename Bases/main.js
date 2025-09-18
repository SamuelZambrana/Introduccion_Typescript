System.register("validations", [], function (exports_1, context_1) {
    "use strict";
    var Validations;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (Validations) {
                /**
                 * Validates if the input is a non-empty string.
                 * @param input - The string to validate.
                 * @returns True if the input is a non-empty string, otherwise false.
                 */
                function isNonEmptyString(input) {
                    return typeof input === 'string' && input.trim().length > 0;
                }
                Validations.isNonEmptyString = isNonEmptyString;
                /**
                 * Validates if the input is a valid email address.
                 * @param email - The email address to validate.
                 * @returns True if the email is valid, otherwise false.
                 */
                function isValidEmail(email) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    return emailRegex.test(email);
                }
                Validations.isValidEmail = isValidEmail;
            })(Validations || (Validations = {}));
        }
    };
});
//# sourceMappingURL=main.js.map