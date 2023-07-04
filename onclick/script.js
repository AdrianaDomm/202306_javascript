function countClics(buttonId) {
    var countBtn1 = parseInt(document.getElementById("count1").textContent);
    var countBtn2 = parseInt(document.getElementById("count2").textContent);
    if (buttonId === 'btn-1') {
        countBtn1++;
        document.getElementById("count1").textContent = countBtn1;
    } else if (buttonId === 'btn-2') {
        countBtn2++;
        document.getElementById("count2").textContent = countBtn2;
    }
}