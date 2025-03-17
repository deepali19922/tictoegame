function Reverse() {
    var x = document.getElementById('num').value;
    x = Number(x);
    var rem, Reverse = 0;
    while (x > 0) {
        rem = x % 10;
        Reverse = Reverse * 10 + rem;
        x = parseInt(x / 10);
    }


    document.getElementById('result').innerText = "reverse number =" + Reverse;
}
// ---------------------------------------------------------------------------------------------------------
function Sum() {


    var x = document.getElementById('num1').value;
    var rem, plus = 0;
    while (x > 0) {
        rem = x % 10;
        plus = plus + rem;
        x = parseInt(x / 10);
    }
    document.getElementById('result1').innerText = "Sum =" + plus;

}
// ---------------------------------------------------------------------------------------------------------

function oddeven() {
    var n = document.getElementById('num2').value;

    if (n >= 0) {
        if (n % 2 == 0)
            document.getElementById('result2').innerText = "even ";
        else
            document.getElementById('result2').innerText = "odd ";

    }
    else
        document.getElementById('result2').innerText = "not odd and even ";

}

// ---------------------------------------------------------------------------------------------------------

function sameornot() {
    var a = document.getElementById('num3').value;
    var b = document.getElementById('num4').value;
    if (a == b) {
        document.getElementById('result3').innerText = "Same";
    }
    else
        document.getElementById('result3').innerText = "not same";
}

// ---------------------------------------------------------------------------------------------------------

var feet = document.getElementById('feet');
var inch = document.getElementById('inch');

feet.addEventListener('input', function () {
    let f = this.value;

    let i = f * 12;
    inch.value = i;
});


inch.addEventListener('input', function () {
    let i = this.value;

    let f = i / 12;

    if (!Number.isInteger(f)) {
        f = f.toFixed(2);
    };
    inch.value = f;
});

// ---------------------------------------------------------------------------------------------------------
function yes() {
    var f = document.getElementById('fno').value;
    var s = document.getElementById('sno').value;
    if (s % f == 0) {

        document.getElementById('result4').innerText = "yess ";
    } else {
        document.getElementById('result4').innerText = "no ";
    }

}

function Rull() {
    var d1 = document.getElementById("divisi").value;
    if (d1 >= 0) {
        if (d1 % 2 == 0 && d1 % 3 == 0) {
            document.getElementById('resultdivisi').innerText = "both Divisible by 2 and 3 ";
        }
        else if (d1 % 2 == 0) {
            document.getElementById('resultdivisi').innerText = "Divisible by 2 ";

        } else if (d1 % 3 == 0) {
            document.getElementById('resultdivisi').innerText = "Divisible by 3 ";

        } else {
            document.getElementById('resultdivisi').innerText = " Not Divisible by 2 3 ";

        }
    }
}
function see() {
    var c1 = document.getElementById("check").value;
    if (c1 >= 0) {
        if (c1 >= 10 && c1 <= 99) {
            document.getElementById('resultcheck').innerText = "It is two digit ";
        } else if (c1 >= 1 && c1 <= 9) {
            document.getElementById('resultcheck').innerText = "It is one digit ";
        }
        else {
            document.getElementById('resultcheck').innerText = "It is two  more digit"
        }
    }
};
function large() {
    var l1 = document.getElementById("lar1").value;
    var l2 = document.getElementById("lar2").value;
    var l3 = document.getElementById("lar3").value;
    let max = 0;
    if (l1 >= l2) {
        max = l1;
    } else {
        max = l2;

    }
    if (l3 >= max) {
        max = l3;
    }
    document.getElementById("max").innerText = "large = " + max;

}

function cas() {
    var a = document.getElementById("check1").value;
    var b = a.toUpperCase();
    if (a == b) {
        document.getElementById('resultcase').innerText = "It is upercase ";
    }
    else {
        document.getElementById('resultcase').innerText = "It is lowercase ";

    }
}
function change() {
    var num = parseInt(document.getElementById("change1").value);

    if (num >= 1000 && num <= 9999) {
        let b = num % 10;
        num = parseInt(num / 10);
        let c = num % 10;
        num = parseInt(num / 10);
        let d = num % 10;
        num = parseInt(num / 10);
        document.getElementById('resultchange').innerText = b + "" + d + "" + c + "" + num;
    }
    else {
        document.getElementById('resultchange').innerText = "your number is only 4 digit "
    }


}



function Factori() {
    var fact = document.getElementById("fact").value;
    var reslt = 1;
    for (var f = 1; f <= fact; f++) {
        reslt *= f
    }
    document.getElementById("resultfact").innerText = reslt;
}
function check() {
    var r = parseInt(document.getElementById("roll").value);
    if (r >= 1 && r <= 100) {
        box.style.display = "flex";
    }
    else {
        box.style.display = "none";
        alert("your roll number is wrong")
    }
}
function reslt() {


    var m1 = parseInt(document.getElementById("marks1").value);
    var m2 = parseInt(document.getElementById("marks2").value);
    var m3 = parseInt(document.getElementById("marks3").value);
    var box = document.getElementById("box").value;
    var tot = m1 + m2 + m3;
    var avg = tot / 3;
    var pass = 35;
    var per = (tot / 300) * 100
    if (tot >= 35) {
        document.getElementById("resultroll").innerText = " pass" + tot + avg + per;

    } else {
        document.getElementById("resultroll").innerText = "fail";

    }


}

function day() {
    var day = parseInt(document.getElementById("dayy").value);

    // switch (new Date().getDate()) {
    switch (day) {
        case 0:
            day = "sunday";
            break;
        case 1:
            day = "mon";
            break;
        case 2:
            day = "tue";
            break;
        case 3:
            day = "wed";
            break;
        case 4:
            day = "thu";
            break;
        case 5:
            day = "fri";
            break;
        case 6:
            day = "sat";
            break;
        default:
            day = '3';
            break;

    }
    document.getElementById("resultday").innerText = "day = " + day;

}

function checkkk() {
    var data = document.getElementById("vvoo").value;
    if ((data >= 'a') && (data <= 'z') || (data >= 'A') && (data <= 'Z')) {
        if (data == 'a' || data == 'A' || data == 'e' || data == 'E' || data == 'i' || data == 'I' || data == 'o' || data == 'O' || data == 'u' || data == 'U') {
            document.getElementById("resultvow").innerText = "vowel"
        } else {
            document.getElementById("resultvow").innerText = "conconent"
        }

    } else {
        document.getElementById("resultvow").innerText = "num";

    }
}

function odd() {
    var odd = document.getElementById("oddd").value;
    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            document.getElementById("resultodd").innerText = i;
            console.log(i)
        }
    }
}
function even() {
    var s1 = document.getElementById("s1").value;
    var e1 = document.getElementById("e1").value;

    for (let i = s1; i < e1; i++) {
        if (i % 10 == 0) {
            document.getElementById('resulteven').innerHTML += '<br>';
        }
        if (i % 2 == 0) {
            document.getElementById('resulteven').innerHTML += i + '&nbsp;';
        }
    }
}






function oddsum() {
    let evenCount = 0;
    let oddSum = 0;
    let i = 0;
    var input = document.getElementById('input').value;
    if (i != 10) {
        if (input % 2 === 0) {
            evenCount++;
        } else {
            oddSum += parseInt(input);
        }
        document.getElementById('input').value = '';
        i++;
    }
    document.getElementById('count').innerText = evenCount || 0;
    document.getElementById('sum').innerText = oddSum || 0;
}

for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= i; j++) {
        document.getElementById("partter2").innerHTML += i + '';
        // document.getElementById("partter2").innerHTML += '<br>';


    }
}

function Table() {
    var t = parseInt(document.getElementById("table").value);
    var k = 1;
    for (var i = 1; i <= 10; i++) {
        var r = t * k;

        parseInt(document.getElementById('resulttab').innerHTML += t + '*' + k + '=' + r);
        k++


        document.getElementById('resulttab').innerHTML += '<br>';

    }


}
function prime() {
    var t = parseInt(document.getElementById("prime").value);
    var count = 0, i, j;
    for (i = 2; i <= t; i++) {
        count = 0;
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                count++;
                break;
            }

        }
        if (count == 0) {
            document.getElementById("resultprime").innerHTML += i + "<br>";

        }

    }

}


function oddd(){
     var t = parseInt(document.getElementById("odd").value);

    // var t = 20
    let evenCount = 0;
    let oddCount = 0;       
        var i;
         for(i=1;i<t;i++){
         if(i%2==0){
        // document.write(i+'<br>')
        evenCount++
    }

}
document.getElementById("resultodd2").innerHTML += evenCount + "<br>";
console.log(evenCount);


}

function palindrom(){
    var n = parseInt(document.getElementById("palid").value);
    var c=n,s=0,r;
    while(n>0){
        r=n%10;
        s=r+(s*10);
       n=parseInt(n/10);
        console.log(r)
    }
    if(c==s){
        document.getElementById("resultped").innerHTML += "yes";

    }else{
        document.getElementById("resultped").innerHTML += "No";

    }

}
function Strong(){
    var n = parseInt(document.getElementById("strong").value);
    var r,a=0,c=0;
    c=n;
    while(n>0){
       r=parseInt( n%10);
       a= parseInt((r*r*r)+a);

       n= parseInt(n/10);
    }
    if(c==a){
        document.getElementById("Strong").innerHTML += "yes";

    }else{
        document.getElementById("Strong").innerHTML += "No";
        console.log(a);

    }
    
}
function Perfact(){
    var n = parseInt(document.getElementById("perfact").value);
    var i,sum=0;
    for(i=1;i<n;i++){
        if(n%i==0){
        sum=sum+i;
        }
    }
    if(sum==n){
        document.getElementById("Perfact1").innerHTML += "yes";

    }else{
        document.getElementById("Perfact1").innerHTML += "no";

    }

}