window.addEventListener("load", function(){
    document.getElementById("btn").onclick = function(){
        let strings = document.getElementById("text").value;
        let arr = strings.split("\n");
        let array = [];
        for (let i = 0; i <= arr.length; i++) {
            if(arr[i] !== undefined) {
                let parser = document.createElement('a');
                parser.href = arr[i];
                console.log(parser.hostname);
                if(parser.protocol !== 'file:') {
                    array.push(parser.protocol + '//' + parser.hostname);
                }
            }
        }
        document.getElementById("result").value = array.join("\n");
    };
});