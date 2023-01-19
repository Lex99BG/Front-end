var m = 1000, d=0;
var d0 = m*290+m*300;
let arrTxt= new Array("д1= ","д2= ","д3= ","д4= ","д5= ","д6= ","д7= ","д8= ");
let arr= new Array(2,-7,1,0,0,0,m,m);
let arrA= new Array(1,2,1,0,0,1,0,0);
let arrB= new Array(-2,1,0,-1,0,0,1,0);
let arrC= new Array(2,3,1,0,-1,0,0,1);

function Val() 
{
    for(let i=0;i<arr.length;i++)
    {
        document.getElementById("a"+i).innerHTML = arrA[i]; 
        document.getElementById("b"+i).innerHTML = arrB[i];
        document.getElementById("c"+i).innerHTML = arrC[i];  
    }
}

function Sum()
{
    for(var j=0;j<arr.length;j++)
    {
        d=(arr[5]*(arrA[j]) + arr[6]*(arrB[j]) + arr[7]*(arrC[j]))-arr[j];
        document.getElementById("d"+(j+1)).innerHTML =arrTxt[j]+d;
    }

	document.getElementById("d0").innerHTML ="Z0=д0= "+d0;
}
