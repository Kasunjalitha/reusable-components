const counterContainer = document.getElementsByClassName('counter-container');



const bindComponent = (container) => {

    const countervalue = container.getElementsByClassName('counter-value')[0];
    const incrementBtn = container.getElementsByClassName('counter-increment')[0];
    const decrementBtn = container.getElementsByClassName('counter-decrement')[0];
    const resetBtn = container.getElementsByClassName('counter-reset')[0];


    let i = 0;

    incrementBtn.addEventListener('click', () => {
        i += 1;
        countervalue.innerText = i; 
    });

    decrementBtn.addEventListener('click', () => {
        i > 0 ? i -= 1 : 0;
        countervalue.innerText = i; 
    });

    resetBtn.addEventListener('click', () => {
        i = 0;
        countervalue.innerText = i;
    })
}



for(let i=0; i<counterContainer.length; i++){
    bindComponent(counterContainer[i]);
}