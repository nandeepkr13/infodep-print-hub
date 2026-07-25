let cv:any = null;


function loadOpenCV():Promise<any>{

return new Promise((resolve,reject)=>{


if(cv){

resolve(cv);

return;

}



const existing =
document.querySelector(
"script[src='/opencv.js']"
);



if(existing){


const check = setInterval(()=>{


const loaded =
(window as any).cv;


if(loaded){

clearInterval(check);

cv=loaded;

resolve(cv);

}


},100);


return;


}





const script =
document.createElement("script");


script.src="/opencv.js";


script.async=true;



script.onload=()=>{


const check =
setInterval(()=>{


const loaded =
(window as any).cv;



if(loaded){


clearInterval(check);


cv=loaded;


resolve(cv);


}



},100);



};



script.onerror=()=>{

reject(
new Error("OpenCV loading failed")
);

};



document.body.appendChild(script);



});


}




export default async function getCroppedImg(
 imageSrc:string,
 points:any[]
):Promise<string>{



const cv = await loadOpenCV();



if(!cv){

throw new Error(
"OpenCV not ready"
);

}




const image =
await createImage(imageSrc);




const canvas =
document.createElement("canvas");


canvas.width =
image.naturalWidth;


canvas.height =
image.naturalHeight;



const ctx =
canvas.getContext("2d");



if(!ctx){

throw new Error(
"Canvas error"
);

}



ctx.drawImage(
image,
0,
0
);





const src =
cv.imread(canvas);





const width = 600;

const height = 400;





const srcTri =
cv.matFromArray(

4,

1,

cv.CV_32FC2,

[

points[0].x,
points[0].y,


points[1].x,
points[1].y,


points[2].x,
points[2].y,


points[3].x,
points[3].y

]

);






const dstTri =
cv.matFromArray(

4,

1,

cv.CV_32FC2,

[

0,0,

width,0,

width,height,

0,height

]

);






const M =
cv.getPerspectiveTransform(
srcTri,
dstTri
);





const dst =
new cv.Mat();





cv.warpPerspective(

src,

dst,

M,

new cv.Size(
width,
height
)

);






const output =
document.createElement("canvas");



output.width=width;

output.height=height;



cv.imshow(
output,
dst
);






src.delete();

srcTri.delete();

dstTri.delete();

M.delete();

dst.delete();





return output.toDataURL(
"image/jpeg",
0.95
);



}





function createImage(
url:string
):Promise<HTMLImageElement>{


return new Promise((resolve,reject)=>{


const img =
new Image();



img.onload=()=>resolve(img);



img.onerror=reject;



img.crossOrigin="anonymous";



img.src=url;



});


}