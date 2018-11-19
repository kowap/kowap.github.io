window.addEventListener("load", function(){
    document.getElementById("btn").onclick = function(){
        let strings = document.getElementById("text").value;
        let arr = strings.split("\n");
        let array = [];
        for (let i = 0; i <= arr.length; i++) {
            let parser = document.createElement('a');
            parser.href = arr[i];
            if(parser.hostname !== 'localhost' && parser.protocol !== 'file') {
                array.push(parser.protocol + '//' + parser.hostname);
            }
        }
        document.getElementById("result").value = array.join("\n");
    };
});