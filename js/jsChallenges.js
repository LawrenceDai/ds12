/*
// Challenge 1 Part 1
document.querySelector("#subscribe").addEventListener("click", function() {
    if (this.checked) {
        document.querySelector("#emailDiv").style.display = "block";
    } else {
        document.querySelector("#emailDiv").style.display = "none";
    }
})

// Challenge 1 Part 2
document.addEventListener("click", function(){
    let currentTime = new Date();
    alert("Current time: " + currentTime);
})
*/

/*
// Challenge 2
document.querySelector('#sameAddress').addEventListener('click',function () {
    if (this.checked) {
        document.querySelector('#home').value = document.querySelector('#bill').value
        document.querySelector('#home').disabled = true
    } else {
        document.querySelector('#home').value = ""
        document.querySelector('#home').disabled = false
    }
})

document.querySelector('#bill').addEventListener('input', function () {
    if (document.querySelector('#sameAddress').checked) {
        document.querySelector('#home').value = document.querySelector('#bill').value
    }
})
*/

/*
// Challenge 3
function challenge3() {
    if (document.querySelector("input[name='standing']:checked") != null & document.querySelector("input[name='gradDate']:checked") != null) {
        return [document.querySelector("input[name='standing']:checked").value, document.querySelector("input[name='gradDate']:checked").value]
    } else {
        alert('please select both class standing and grad date')
        return false
    }
}
*/
