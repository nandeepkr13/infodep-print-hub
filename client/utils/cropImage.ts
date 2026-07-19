export default async function getCroppedImg(
  imageSrc: string,
  pixelCrop: any,
  rotation = 0
): Promise<string> {

  const image = await createImage(imageSrc);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Canvas context not available");
  }


  const radians = (rotation * Math.PI) / 180;


  const sin = Math.abs(Math.sin(radians));
  const cos = Math.abs(Math.cos(radians));


  const boundingBoxWidth =
    image.width * cos + image.height * sin;

  const boundingBoxHeight =
    image.width * sin + image.height * cos;



  const tempCanvas = document.createElement("canvas");
  const tempCtx = tempCanvas.getContext("2d");


  if (!tempCtx) {
    throw new Error("Temp canvas error");
  }


  tempCanvas.width = boundingBoxWidth;
  tempCanvas.height = boundingBoxHeight;


  tempCtx.translate(
    boundingBoxWidth / 2,
    boundingBoxHeight / 2
  );


  tempCtx.rotate(radians);


  tempCtx.drawImage(
    image,
    -image.width / 2,
    -image.height / 2
  );



  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;


  ctx.drawImage(
    tempCanvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );



  return canvas.toDataURL(
    "image/jpeg",
    0.95
  );
}



function createImage(
  url: string
): Promise<HTMLImageElement> {

  return new Promise((resolve, reject) => {

    const image = new Image();


    image.onload = () => {
      resolve(image);
    };


    image.onerror = (error) => {
      reject(error);
    };


    image.crossOrigin = "anonymous";


    image.src = url;

  });
}