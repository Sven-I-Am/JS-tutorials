(() => {
    let testMouse = document.getElementById('testMouse');
    let testKey = document.getElementById('testKey');
    let listener;
    let counter;
    document.getElementById("apply").addEventListener("click", function(){
        counter = 0;
        document.getElementById('target').innerText = counter;
        testKey.value='';
        testMouse.removeEventListener('click', didEvent);
        testMouse.removeEventListener('dblclick', didEvent);
        testMouse.removeEventListener('mousedown', didEvent);
        testMouse.removeEventListener('mouseup', didEvent);
        testMouse.removeEventListener('mouseover', didEvent);
        testMouse.removeEventListener('mouseout', didEvent);
        testMouse.removeEventListener('mousemove', didEvent);
        testMouse.removeEventListener('wheel', didEvent);
        testMouse.removeEventListener('contextmenu', didEvent);
        testKey.removeEventListener('keydown', didEvent)
        testKey.removeEventListener('keyup', didEvent)
        testKey.removeEventListener('keypress', didEvent)
        testKey.removeEventListener('input', didEvent)


        let listeners = document.getElementsByClassName('select');

        console.log(listeners);
        for (i=0; i<listeners.length;i++) {
            if (listeners[i].selected){
                listener = listeners[i].value;
            }
        }

        if (listener==="click" || listener==="dblclick" || listener==="mousedown" || listener==="mouseup" || listener==="mouseover" || listener==="mouseout" || listener==="mousemove" || listener==="wheel" || listener==="contextmenu"){
            testMouse.style.display='block';
            testKey.style.display='none';
            if(listener==="click"){
                testMouse.addEventListener('click', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'click' event</b></p><p>the function triggers when the element gets left clicked.</p>"
            } else if(listener==="dblclick"){
                testMouse.addEventListener('dblclick', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'dblclick' event</b></p><p>the function triggers when the element gets double left clicked.</p>"
            } else if(listener==="mousedown"){
                testMouse.addEventListener('mousedown', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'mousedown' event</b></p><p>the function triggers when the left mouse button goes <i>DOWN</i> on the element.</p>"
            } else if(listener==="mouseup"){
                testMouse.addEventListener('mouseup', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'mouseup' event</b></p><p>the function triggers when the left mouse button goes <i>UP</i> on the element.</p>"
            } else if(listener==="mouseover"){
                testMouse.addEventListener('mouseover', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'mouseover' event</b></p><p>the function triggers when the mouse comes into the element boundaries.</p>"
            } else if(listener==="mouseout"){
                testMouse.addEventListener('mouseout', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'mouseout' event</b></p><p>the function triggers when the mouse goes out of the element boundaries.</p>"
            } else if(listener==="mousemove"){
                testMouse.addEventListener('mousemove', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'mousemove' event</b></p><p>the function triggers when the mouse moves within the element boundaries.</p>"
            } else if(listener==="wheel"){
                testMouse.addEventListener('wheel', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'mousemove' event</b></p><p>the function triggers when the mouse wheel is used within the element boundaries.</p>"
            } else if(listener==="contextmenu"){
                testMouse.addEventListener('contextmenu', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'click' event</b></p><p>the function triggers when a context menu is opened on the element (usually this happens by right clicking).</p>"
            }
        }else if (listener==="keydown" || listener==="keyup" || listener==="keypress" || listener==="input") {
            testMouse.style.display='none';
            testKey.style.display='block';
            if(listener==="keydown"){
                testKey.addEventListener('keydown', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'keydown' event</b></p><p>the function triggers when a key is tapped <i>DOWN</i> in the element.</p>"
            } else if(listener==="keyup"){
                testKey.addEventListener('keyup', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'keyup' event</b></p><p>the function triggers when a key is let go (key comes <i>UP</i>) in the element.</p>"
            } else if(listener==="keypress"){
                testKey.addEventListener('keypress', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'keypressed' event</b></p><p>the function triggers when a key is pressed and <i>HELD</i> in the element.</p>"
            } else if(listener==="input"){
                testKey.addEventListener('input', didEvent)
                document.getElementById('def').innerHTML = "<p><b>'input' event</b></p><p>the function triggers when the input in the element changes.</p>"
            }
        }


    } )


    function didEvent(){
        console.log('listener = ' + listener);
        counter++;
        document.getElementById('target').innerText = counter;
    }

})();

