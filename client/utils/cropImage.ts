export default async function getCroppedImg(
  imageSrc: string,
  points: any[]
): Promise<string> {


  const image = await createImage(imageSrc);



  const canvas = document.createElement("canvas");

  const ctx = canvas.getContext("2d");


  if (!ctx) {
    throw new Error("Canvas error");
  }



  canvas.width = image.naturalWidth;

  canvas.height = image.naturalHeight;



  ctx.drawImage(
    image,
    0,
    0
  );



  const xs = points.map(
    (p)=>p.x
  );

  const ys = points.map(
    (p)=>p.y
  );



  const minX = Math.max(
    0,
    Math.min(...xs)
  );


  const maxX = Math.min(
    image.naturalWidth,
    Math.max(...xs)
  );



  const minY = Math.max(
    0,
    Math.min(...ys)
  );


  const maxY = Math.min(
    image.naturalHeight,
    Math.max(...ys)
  );



  const cropWidth =
    maxX - minX;


  const cropHeight =
    maxY - minY;



  // Keep original ratio

  const aspectRatio =
    cropWidth / cropHeight;



  const outputWidth = 1000;

  const outputHeight =
    Math.round(
      outputWidth / aspectRatio
    );



  const output =
    document.createElement("canvas");



  output.width = outputWidth;

  output.height = outputHeight;



  const outputCtx =
    output.getContext("2d");



  if(!outputCtx){

    throw new Error(
      "Output canvas error"
    );

  }



  outputCtx.drawImage(

    canvas,

    minX,
    minY,
    cropWidth,
    cropHeight,


    0,
    0,

    outputWidth,
    outputHeight

  );



  return output.toDataURL(
    "image/jpeg",
    0.95
  );


}





function createImage(
  url:string
):Promise<HTMLImageElement>{


  return new Promise(
    (resolve,reject)=>{


      const img =
      new Image();



      img.onload = () =>
      resolve(img);



      img.onerror =
      reject;



      img.crossOrigin =
      "anonymous";



      img.src = url;



    }
  );


}