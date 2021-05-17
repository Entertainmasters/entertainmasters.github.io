const counters = document.querySelectorAll('.numbergraph');
const speed = 100;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc) 
            setTimeout(updateCount, 1)
        } else {
            count.innerText = target;
        }
    }
    updateCount();
});