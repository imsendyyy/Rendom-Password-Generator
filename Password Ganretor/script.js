const upprcase = "QWERTYUIOPLKJHGFDSAZXCVBNM"
const lovercase = "qwertyuioplkjhgfdsazxcvbnm"
const number = "0123654987"
const special = "!@#$%^..&*(@#)?><@#}..{@#][/*-+.."
const passwordbox = document.querySelector("#Password")

const allChar = upprcase + lovercase + number + special
const length = document.querySelector("#length")

function  generatePassword() {
        let password = ""
        // password += upprcase[Math.floor(Math.random()*upprcase.length)]
        // password += lovercase[Math.floor(Math.random()*lovercase.length)]
        // password += number[Math.floor(Math.random()*number.length)]
        // password += special[Math.floor(Math.random()*special.length)]
    
        // while (password.length < length.value){
                // password += allChar[Math.floor(Math.random()*allChar.length)]
            // }
        
            for (let i = 0; i < length.value; i++) {
                    password += allChar[Math.floor(Math.random()*allChar.length)]
                }
                // console.log(length.value)
                passwordbox.value = password
            }
            
            
            
            length.addEventListener("keypress", function(event) {
                    if (event.key === "Enter") {
                          event.preventDefault();
                          document.querySelector("#generateBtn").click();
                        }
                      });

        
                    