const availableChars = [];

document.getElementById('body').addEventListener('keydown', e => {
    if (/*e.code[0] == 'F' || */e.code == 'Pause' || e.code == 'Print Screen') {
         e.preventDefault();
        document.getElementById('key-input').value += '[' + e.key + ']';
    }
    console.log(e);
    console.log(`Event key: ${e.key} \n Event code: ${e.code}`); 
    //e.code differentiates between versions of same key
    //i.e. number row and number pad are recognized as "digit" and "numpad" respectively
    //should use e.code when storing key pressed as a value 
});

document.getElementById('reset').onclick = function() {document.getElementById('key-input').value = "";}