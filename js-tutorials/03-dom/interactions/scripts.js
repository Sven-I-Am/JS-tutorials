(() => {
    document.getElementById("run").addEventListener("click", function(){

        let read = document.getElementsByName('read');

        let readInput;
        for (i=0; i<read.length;i++) {
            if (read[i].checked){
                readInput = read[i].value;
            }
        }
        console.log('read: ' + readInput);

        let origin;
        if (readInput==='html') {
            origin=document.getElementById('origin').innerHTML;
        } else {
            origin=document.getElementById('origin').innerText;
        }
        console.log('my script reads this: ' + origin);

        let write = document.getElementsByName('write');
        let writeOutput;
        for (i=0; i<write.length;i++) {
            if (write[i].checked){
                writeOutput = write[i].value;
            }
        }
        console.log('write: ' + writeOutput);

        let target = document.getElementById('target');
        if (writeOutput==='html'){
            target.innerHTML=origin;
        } else {
            target.innerText=origin;
        }
        console.log('my script writes this: ' + target.innerHTML);





    } )


})();

