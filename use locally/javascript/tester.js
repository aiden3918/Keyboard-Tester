document.getElementById('body').addEventListener('keydown', e => {
    if (e.code[0] == 'F' || e.metaKey || e.ctrlKey || e.altKey || e.key == 'Tab' || e.key == 'Enter' || e.key == 'CapsLock' || 
    e.key == 'Shift' || e.key == 'ContextMenu' || e.code[0] == 'A' || e.key == 'Insert' || e.key == 'Home' || e.key == 'PageUp' ||
    e.key == 'Delete' || e.key == 'End' || e.key == 'PageDown' || e.key == 'Escape' || 
    /*key exception handling*/ e.key.length > 10) {
        e.preventDefault();
        document.getElementById('key-input').textContent += '[' + e.key + ']';
    } else {document.getElementById('key-input').textContent += e.key;}
    try {
        if (document.getElementById(e.code).style.borderColor = 'gray') {
            document.getElementById(e.code).style.borderColor = 'green'; 
            document.getElementById(e.code).style.animation = 'changeColor 0.5s'; 
        }
        console.log(`e.key: ${e.key} \n e.code: ${e.code}`);
    } catch (TypeError) {console.log("exemption key: keyboard ignored")}; 
});

document.getElementById('reset').onclick = function() {
    document.getElementById('key-input').textContent = 'Input log: ';
    for (let i=0; i<103; i++) {document.getElementsByClassName('key')[i].style.borderColor = 'gray';}
}