
console.log("Hello from Typescript")


class Validations {

    
    NameValidation() {
        const element = document.getElementById('inputName') as HTMLInputElement;
        const input = element.value;
        const output = document.getElementById('NameValidationMessage');

        if (output !== null)
        {
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

       
    }


    LastNameValidation() {

        const element = document.getElementById('inputLastName') as HTMLInputElement;
        const input = element.value;
        const output = document.getElementById('LastNameValidationMessage');

        if (output !== null)
        {
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


    }

     
    PhoneNumberValidation() {

        const element = document.getElementById('inputPhone') as HTMLInputElement;
        const output = document.getElementById('PhoneValidationMessage');
        const input = element.value;
        const telRE = /^[2-9]\d{2}-\d{3}-\d{4}$/;

        if (output != null)
        {
            if (!input.match(telRE)) {
                output.innerHTML = "<span style='color: blue'>* Entered wrong telephone number.Use format(XXX-XXX-XXX)</span>";
            }
            else {
                output.innerHTML = '';
            }

        }

    }

      
    EmailValidation() {
        const element = document.getElementById('inputEmail') as HTMLInputElement;
        const output = document.getElementById('EmailValidationMessage');
        const input = element.value;
        const mailRE = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if (output != null)
        {
            if (!input.match(mailRE)) {
                output.innerHTML = "<span style='color: blue'>* You have entered wrong email</span>";
            }
            else {
                output.innerHTML = '';
            }

        }
      


    }

    CourseNumberValidation() {

        const element = document.getElementById('inputCourseN') as HTMLInputElement;
        const input: string = element.value;
        const output = document.getElementById('CourseNumberMessage');

        if (output != null)
        {
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


    }


}

window.onload = () => {

    const obj = new Validations();
    const nameInput = document.getElementById('inputName');
    const lastnameInput = document.getElementById('inputLastName');
    const emailInput = document.getElementById('inputEmail');
    const phoneInput = document.getElementById('inputPhone');
    const courseNumberInput = document.getElementById('inputCourseN');


    if (nameInput != null)
    {

        nameInput.onblur = obj.NameValidation;
    }


    if (lastnameInput != null)
    {

        lastnameInput.onblur = obj.LastNameValidation;
    }

    if (emailInput != null)
    {

        emailInput.onblur = obj.EmailValidation;
    }

    if (phoneInput != null)
    {

        phoneInput.onblur = obj. PhoneNumberValidation;
    }

    if (courseNumberInput != null) {

        courseNumberInput.onblur = obj.CourseNumberValidation;
    }




};




   