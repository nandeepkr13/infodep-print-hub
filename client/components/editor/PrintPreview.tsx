"use client";

type PrintPreviewProps = {
  frontImage:string;
  backImage:string;
};


export default function PrintPreview({

frontImage,
backImage

}:PrintPreviewProps){


const printPage = ()=>{


const printArea =
document.getElementById("print-area");


if(!printArea) return;


const win =
window.open("","_blank");


if(!win) return;


win.document.write(`

<html>

<head>

<style>


@page{

size:A4;
margin:0;

}


body{

margin:0;

}


#print-area{

width:210mm;
height:297mm;
position:relative;

}


img{

position:absolute;

}



</style>

</head>


<body>


${printArea.outerHTML}


</body>

</html>


`);


win.document.close();


win.onload=()=>{

win.print();

win.close();

};


};



return (




<div

id="print-area"

className="
bg-white
shadow-xl
relative
"

style={{

width:"210mm",
height:"297mm"

}}

>


{/* FRONT */}

{frontImage && (

<img

src={frontImage}

alt="Front"

style={{

position:"absolute",

top:"20mm",

left:"20mm",

width:"85.6mm",

height:"54mm",

objectFit:"contain"

}}

/>

)}



{backImage && (

<img

src={backImage}

alt="Back"

style={{

position:"absolute",

top:"90mm",

left:"20mm",

width:"85.6mm",

height:"54mm",

objectFit:"contain"

}}

/>

)}



<button

onClick={printPage}

className="
mt-6
bg-orange-600
text-white
px-8
py-3
rounded-xl
"

>

🖨 Print A4

</button>


</div>


);


}