const RANGE = document.getElementById("range");

RANGE.addEventListener('input',(e)=>{
    const VALUE = +e.target.value;
    const LABEL = e.target.nextElementSibling;

    const RANGE_WIDTH = getComputedStyle(e.target).getPropertyValue('width');
    const LABEL_WIDTH = getComputedStyle(LABEL).getPropertyValue('width');

    const NUM_WIDTH = +RANGE_WIDTH.substring(0,RANGE_WIDTH.length-2);
    const NUM_LABEL_WIDTH = +LABEL_WIDTH.substring(0,LABEL_WIDTH-2);

    const MAX = +e.target.max;
    const MIN = +e.target.min;
    
    const LEFT = VALUE * (NUM_WIDTH / MAX) - NUM_LABEL_WIDTH / 2 + scale(VALUE,MIN,MAX,10,-10);
    
    LABEL.style.left = `${LEFT-20}px`;

    LABEL.innerHTML = VALUE;

})


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}