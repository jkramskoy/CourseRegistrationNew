
console.log("Hello from Typescript")


class Validations {

    
    NameValidation() {
        const element = document.getElementById('inputName') as HTMLInputElement;
        const input = element.value;
        const output = document.getElementById('NameValidationMessage');

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

        

        console.log(element.value);
    }

    //Phone Validation
    PhoneNumberValidation() {

        const element = document.getElementById('inputPhone') as HTMLInputElement;
        const output = document.getElementById('PhoneValidationMessage');
        const input = element.value;
        const telRE = /^[2-9]\d{2}-\d{3}-\d{4}$/;

        if (output != null) {
            if (!input.match(telRE)) {
                output.innerHTML = "<span style='color: blue'>* Entered wrong telephone number.Use format(XXX-XXX-XXX)</span>";
            }
            else {
                output.innerHTML = '';
            }

        }

    }

    //Email validation
    EmailValidation() {
        const element = document.getElementById('inputEmail') as HTMLInputElement;
        const output = document.getElementById('EmailValidationMessage');
        const input = element.value;
        const mailRE = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if (output != null) {
            if (!input.match(mailRE)) {
                output.innerHTML = "<span style='color: blue'>* You have entered wrong email</span>";
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
    const emailInput = document.getElementById('inputEmail');
    const phoneInput = document.getElementById('inputPhone');


    if (nameInput != null) {

        nameInput.onblur = obj.NameValidation;
    }
    if (emailInput != null) {

        emailInput.onblur = obj.EmailValidation;
    }
    if (phoneInput != null) {

        phoneInput.onblur = obj. PhoneNumberValidation;
    }




};



   // NameValidation() {

        

        //console.log(element.value);
        
       // console.log(document.getElementsByName('inputName'));
        //console.log(document.getElementsByName('NameValidationMessage'));
       // const elements = (<HTMLTextAreaElement>document.getElementsByName('inputName'));
        const outputs = document.getElementsByName('NameValidationMessage');

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

   