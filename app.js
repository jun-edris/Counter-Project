let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


//forEach function
btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        // creates an Array of classes of the buttons
        const change = event.currentTarget.classList;
        //checks the current clicked if it has a class of increase.
        if(change.contains('increase')) {
            count++;
        }
        //checks the current clicked if it has a class of decrease.
        else if(change.contains('decrease')) {
            count--;
        }
        else {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        }
        else if(count < 0) {
            value.style.color = "red";
        }
        else {
            value.style.color = "#102A42";
        }

        value.textContent = count;
            
    });
});