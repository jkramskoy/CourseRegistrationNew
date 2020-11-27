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
            else if (input.length >= 50) {
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
    //Phone Validation
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
    //Email validation
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
    return Validations;
}());
window.onload = function () {
    var obj = new Validations();
    var nameInput = document.getElementById('inputName');
    var lastnameInput = document.getElementById('inputLastName');
    var emailInput = document.getElementById('inputEmail');
    var phoneInput = document.getElementById('inputPhone');
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
};
// NameValidation() {
//console.log(element.value);
// console.log(document.getElementsByName('inputName'));
//console.log(document.getElementsByName('NameValidationMessage'));
// const elements = (<HTMLTextAreaElement>document.getElementsByName('inputName'));
var outputs = document.getElementsByName('NameValidationMessage');
//  for (let i = 0; i < elements.length; i++) {
//     if (elements[i].value.length === 0) {
//        outputs[i].innerHTML = "<span style='color: red'>* Field Name is required</span>";
//      } else if (elements[i].value.length >= 50) {
//        outputs[i].innerHTML = "<span style='color: red'>* Field Name length should be less than 50</span>";
//      }
//     else {
//       outputs[i].innerHTML = '';
//     }
// }
/*
const input = elements.value;

const output = document.getElementById('NameValidationMessage') as HTMLInputElement;;

if (input.length === 0) {
    output.innerHTML = "<span style='color: red'>* Field Name is required</span>";
}
else if (input.length >= 50) {
    output.innerHTML = "<span style='color: red'>* Field Name length should be less than 50</span>";
}
else {
    output.innerHTML = '';
}

console.log(element.value);

// }
*/
// let nameInputs = document.getElementsByName('inputName');
// let emailInput = document.getElementById('inputEmail');
// let phoneInput = document.getElementById('inputPhone');
//  if (nameInputs != null) {
//     nameInputs.forEach(elm => elm.onblur = obj.NameValidation);
//nameInput.onblur = obj.NameValidation();
//  }
//     nameInput.onblur = obj.NameValidation;
// emailInput.onblur = obj.EmailValidation();
// phoneInput.onblur = obj.PhoneNumberValidation();
//# sourceMappingURL=script.js.map