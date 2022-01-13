let tuDienViet=["Một","Hai","Ba","Bốn","Năm","Sáu","Bảy","Tám","Chín","Mười"]
let tuDienAnh=["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten"]
let result="";
let flag=-1;
function dich(){
    let inputW= document.getElementById("input").value;
    for (let i = 0; i < tuDienViet.length; i++) {
        if (tuDienViet.indexOf(inputW)!==flag){
            result =tuDienAnh[tuDienViet.indexOf(inputW)] + "</br>";
            document.getElementById("result").innerHTML =  result  ;
            break;
        } else if(tuDienAnh.indexOf(inputW)!==flag){
            result =tuDienViet[tuDienAnh.indexOf(inputW)] + "</br>";
            document.getElementById("result").innerHTML= result;
            break;
        }
        else {
            document.getElementById("result").innerHTML="Unknow"
            break;
        }
    }
}


