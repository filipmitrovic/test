var laforma = document.getElementById('the-form'); 
console.log(laforma)

laforma.addEventListener('submit', function(event){
    event.preventDefault();
    var okidokey = confirm('All ok?');
    console.log(okidokey);

    if(okidokey === true) {
    console.log('All is ok!');
    } else {
        console.log('Nothing is good!');   
    }

    var name = promt('What is your name?');
    console.log(name);
});

var variabelName = document.getElementById('id-i-HTML');
console.log (variabelName);

variabelName.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('bra jobbat');
});
