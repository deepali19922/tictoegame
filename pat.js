var i = 1;
while (i <= 25) {
    document.getElementById("partter").innerHTML += '* &nbsp;';
    if (i % 5 == 0) {
        document.getElementById("partter").innerHTML += '<br>';
    }
    i++;
}
var i = 1, a = 1;
while (i <= 25) {
    document.getElementById("partter").innerHTML += a + '  &nbsp;';
    a++;
    if (i % 5 == 0) {
        document.getElementById("partter").innerHTML += '<br>';
        a = 1
    }
    i++;
}
{
    var i, j;
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= 5; j++) {
            document.getElementById("partte1").innerHTML += j;

        }
        document.getElementById("partte1").innerHTML += '<br>';

    }
}
{
    var m, n;
    for (m = 1; m <= 5; m++)    //rows
    {
        for (n = 1; n <= m; n++) {
            document.getElementById("partte2").innerHTML += m;

        }
        document.getElementById("partte2").innerHTML += '<br>';

    }

}
{
    var m, n;
    for (m = 1; m <= 5; m++)    //rows
    {
        for (n = 1; n <= 5; n++) {
            document.getElementById("partte3").innerHTML += m;

        }
        document.getElementById("partte3").innerHTML += '<br>';

    }

}

function one() {
    var i = 1;
    var a = document.getElementById("one").value;
    for (i = 1; i <= a; i++) {
        document.getElementById('partte4').innerHTML += "*";
    }
}

function two() {

    var a = document.getElementById("two").value;
    for (i = 1; i <= a; i++) {
        for (var j = 1; j < a; j++) {
            document.getElementById('partte5').innerText += "*";

        }
        document.getElementById('partte5').innerHTML += "<br>";

    }
}


function three() {
    var i = document.getElementById("three").value;
    var j = 1;
    while (j <= i * i) {
        document.getElementById("partte6").innerHTML += '* &nbsp;';
        if (j % i == 0) {
            document.getElementById("partte6").innerHTML += '<br>';
        }
        j++;
    }

}
function four() {
    var i = document.getElementById('four').value;
    var n = 1;
    var a = 1;
    while (n <= i * i) {
        document.getElementById("partte7").innerHTML += a + ' &nbsp;';

        if (n % i == 0) {
            document.getElementById("partte7").innerHTML += '<br>';
            a++;
        }
        n++
    }


}
function five() {
    var i = document.getElementById('five').value;

    for (var j = 1; j < i; j++) {
        for (var k = 1; k <= j; k++) {
            document.getElementById("partte8").innerHTML += '* ';

        }
        document.getElementById("partte8").innerHTML += '<br>';


    }

}
function six() {

    var i;
    var k = 1;
    var j;
    for (i = 1; i <= 5; i++) {
        for (j = 1; j <= i; j++) {
            document.getElementById(partte9).innerHTML += k + '&nbsp;';
            k = k + 2;
        }
        document.getElementById(partte9).innerHTML += '<br>';

    }
}

function seven() {
    var n = document.getElementById('seven').value;
    var i = 1, a = 1;
    while (i <= n * n) {
        document.getElementById('partte10').innerHTML += a;
        if (i % 5 == 0) {
            document.getElementById("partte10").innerHTML += '<br>';
            a++;
        }
        i++;
    }
}
function eight() {
    var n = document.getElementById('eight').value;
    var p = 1;
    var i;
    for (i = 1; i < n * n + 1; i++) {
        if (p >= i) {
            document.getElementById('partte11').innerHTML += ' *  &nbsp;';

        }
        if (i % 5 == 0) {
            document.getElementById('partte11').innerHTML += '<br>';
            p += 6

        }
    }

}
function nine() {
    var n = document.getElementById('nine').value;
    var i, p = 1, next = 6;
    for (i = 1; i < n * n + 1; i++) {
        if (p == i) {
            b = 1;
            document.getElementById('part9').innerHTML += b + ' &nbsp;';
            p += 6;

        }
        else if (next == i) {
            document.getElementById('part9').innerHTML += b + ' &nbsp;';
            next += 5;

        }
        else {
            b++
            document.getElementById('part9').innerHTML += b + ' &nbsp;';

        } if (i % 5 == 0) {
            document.getElementById('part9').innerHTML += '<br>';

        }

    }
}

function ten() {
    var n = document.getElementById('ten').value;
    var k = 1;
    var o = 1;
    for (i = 1; i <= n;) {
        if (i <= o) {
            document.getElementById('10').innerHTML += k;
            k++
        }

        if (i < k) {
            document.getElementById('10').innerHTML += '<br>';
            k = 1
            o++;
            i++;
        }

    }





    //      var i,j,x=n;
    //      for(i=1;i<=n*n+1;i++){
    //         if(i<x){
    //             document.getElementById('10').innerHTML+= ' &nbsp;';

    //         }else
    //         {
    //             document.getElementById('10').innerHTML+='*';

    //         }
    //         if(i%n==0){
    //             x=x+n-1;
    //             document.getElementById('10').innerHTML+='<br>';


    //         }
    //      }
}
function eleven() {
    var n = document.getElementById("el").value;
    var starcount = 0;
    var i;
    for (i = 1; i <= n;) {
        if (starcount < i) {
            document.getElementById("eleven").innerHTML += '*';
            starcount++;
        }
        else {
            document.getElementById("eleven").innerHTML += '<br>';
            starcount = 0;
            i++;

        }
    }

}
function plus() {
    var row, col;
    for (row = 1; row <= 15; row++) {
        for (col = 1; col <= 15; col++) {
            if (col == 8 || row == 8) {
                document.getElementById("plus20").innerHTML += '&nbsp; *&nbsp;';
            } else {
                document.getElementById("plus20").innerHTML += '&nbsp;&nbsp;&nbsp; &nbsp;';

            }
        }
        document.getElementById("plus20").innerHTML += '<br>';


    }
}
function starr() {
    var row, col;
    for (row = 1; row <= 5; row++) {
        for (col = 1; col <= 5; col++) {
            if (row == col || row + col == 6) {
                document.getElementById("starr").innerHTML += '*';

            } else {
                document.getElementById("starr").innerHTML += '&nbsp; &nbsp;';

            }
        }

        document.getElementById("starr").innerHTML += '<br>';

    }

}

function shap() {
    var block = 51;
    const colArray = [];
    let box = document.getElementById("box1");

    for (let c = 0; c < 5; c++) {
        let rowArray = [];
 if(c%2==0)
     {
            for (var row = 0; row < 10; row++) 
            {
            block = block - 1;
            rowArray.push(block)
            }
     }
 else{
            block=block - 10;
            let value=block;
            for(var row=0;row<10;row++)
            {
                rowArray.push(value);
                value=value + 1
            }
        }
        colArray.push(rowArray);
        
    }

for (let col = 0; col < colArray.length; col++) {
    for (let row = 0; row < colArray[col].length; row++) {
        box.innerHTML += "<div class='box'>" + colArray[col][row] + "</div>";

    }

}

}




// var box = document.getElementById("number");
// let block =101;
// const colArray = [];

// for(let c=0;c<10;c++){
//    let rowArray = [];

//    for(var row=0;row<10;row++)
//    {
//        block=block-1;
//        rowArray .push(block)
//    }
// console.table(rowArray);
// colArray.push(rowArray);

// }

// for (let col = 0; col < colArray.length; col++) {
// for(let row = 0; row<colArray[col].length;row++){
// box.innerHTML += "<div class='box'>" +colArray[col][row]+"</div>";
//    console.table(colArray[col][row]+"=>"+col+","+row);

// }

// }
// </script>
// </html>

