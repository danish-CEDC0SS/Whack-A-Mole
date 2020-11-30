function fun1() {
    a=a+1;
    var x = document.getElementById("a30");
    x.innerHTML=a;
    if(a>HighScore){
        document.getElementById("a32").innerHTML=a;
        HighScore=a;
    }
}
a = 0;
// function fun2() {
//     a=0; b=21;
//         runLoop = async () => {
//         for (i = 0; i < 21; i++) {
//             b=b-1;
//             document.getElementById("a31").innerHTML=b+'s';
//             y = document.display='block';
//             await new Promise(resolve => setTimeout(resolve,700));
//             y[j].style.display='none';
//             console.log(j, '213');
//         }
//     }
//         runLoop();
// }
HighScore=0;
function fun2() {
    a=0; b=21; let c="";
    document.getElementById("a30").innerHTML="0";
        runLoop = async () => {
        for (i = 0; i < 21; i++) {
            b=b-1;
            document.getElementById("a31").innerHTML=b+'s';
            y = document.getElementsByClassName("a11");
            j = Math.floor(Math.random() * 9);
            if(c==j){
                if(j<=6)
                   j=j+2;
                else{
                    j=j-2;
                }
            }
            y[j].style.display='block';
            await new Promise(resolve => setTimeout(resolve,750));
            y[j].style.display='none';
            console.log(j, '213');
            c=j;
        }
    }
        runLoop();
}
// function fun2() {
//     function fun3(){
//     for (i = 0; i < 9; i++) {
//         y = document.getElementsByClassName("a11");
//         j = Math.floor(Math.random() * 9);
//         y[j].style.display='block'
//         // setTimeout(" y[j].style.display='block';",1000);
//         console.log(j, '213');
//     }
// }setTimeout(fun3,1000);
// }