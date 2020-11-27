"use strict";
console.log("Hello from Typescript");
var Validations = /** @class */ (function () {
    function Validations() {
    }
    Validations.prototype.NameValidation = function () {
        var element = document.getElementById('inputName');
        var input = element.value;
        var output = document.getElementById('NameValidationMessage');
        if (output !== null) {
            if (input.length === 0) {
                output.innerHTML = "<span style='color: blue'>* Field Name is required</span>";
            }
            else if (input.length >= 20) {
                output.innerHTML = "<span style='color: blue'>* Field Name length should be less than 50</span>";
            }
            else {
                output.innerHTML = '';
            }
        }
    };
    Validations.prototype.LastNameValidation = function () {
        var element = document.getElementById('inputLastName');
        var input = element.value;
        var output = document.getElementById('LastNameValidationMessage');
        if (output !== null) {
            if (input.length === 0) {
                output.innerHTML = "<span style='color: blue'>* Field Last Name is required</span>";
            }
            else if (input.length >= 50) {
                output.innerHTML = "<span style='color: blue'>* Field Last Name length should be less than 50</span>";
            }
            else {
                output.innerHTML = '';
            }
        }
    };
    Validations.prototype.PhoneNumberValidation = function () {
        var element = document.getElementById('inputPhone');
        var output = document.getElementById('PhoneValidationMessage');
        var input = element.value;
        var telRE = /^[2-9]\d{2}-\d{3}-\d{4}$/;
        if (output != null) {
            if (!input.match(telRE)) {
                output.innerHTML = "<span style='color: blue'>* Entered wrong telephone number.Use format(XXX-XXX-XXX)</span>";
            }
            else {
                output.innerHTML = '';
            }
        }
    };
    Validations.prototype.EmailValidation = function () {
        var element = document.getElementById('inputEmail');
        var output = document.getElementById('EmailValidationMessage');
        var input = element.value;
        var mailRE = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        if (output != null) {
            if (!input.match(mailRE)) {
                output.innerHTML = "<span style='color: blue'>* You have entered wrong email</span>";
            }
            else {
                output.innerHTML = '';
            }
        }
    };
    Validations.prototype.CourseNumberValidation = function () {
        var element = document.getElementById('inputCourseN');
        var input = element.value;
        var output = document.getElementById('CourseNumberMessage');
        if (output != null) {
            if (isNaN(+input)) {
                output.innerHTML = "<span style='color: blue'>* Field should be Numeric</span>";
            }
            else if (input.length === 0) {
                output.innerHTML = "<span style='color: blue'>* Field Price is required</span>";
            }
            else if (input.length >= 3) {
                output.innerHTML = "<span style='color: blue'>* Field length should be less than 3</span>";
            }
            else {
                output.innerHTML = '';
            }
        }
    };
    return Validations;
}());
window.onload = function () {
    var obj = new Validations();
    var nameInput = document.getElementById('inputName');
    var lastnameInput = document.getElementById('inputLastName');
    var emailInput = document.getElementById('inputEmail');
    var phoneInput = document.getElementById('inputPhone');
    var courseNumberInput = document.getElementById('inputCourseN');
    if (nameInput != null) {
        nameInput.onblur = obj.NameValidation;
    }
    if (lastnameInput != null) {
        lastnameInput.onblur = obj.LastNameValidation;
    }
    if (emailInput != null) {
        emailInput.onblur = obj.EmailValidation;
    }
    if (phoneInput != null) {
        phoneInput.onblur = obj.PhoneNumberValidation;
    }
    if (courseNumberInput != null) {
        courseNumberInput.onblur = obj.CourseNumberValidation;
    }
};
//# sourceMappingURL=script.js.map