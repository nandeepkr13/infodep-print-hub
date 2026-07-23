"use client";

import { useState } from "react";

import UploadCard from "./UploadCard";
import ImageEditor from "../editor/ImageEditor";
import PrintPreview from "../editor/PrintPreview";


export default function Hero() {


  const [frontImage,setFrontImage] = useState("");

  const [backImage,setBackImage] = useState("");
  const [editedFrontImage,setEditedFrontImage] = useState("");
const [editedBackImage,setEditedBackImage] = useState("");



  return (

<section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen">


<div className="max-w-7xl mx-auto px-6 py-24">


<h1 className="
text-5xl
font-extrabold
text-center
text-gray-900
mb-12
">

Infodep Print Hub 🚀

</h1>



<div className="
grid
lg:grid-cols-2
gap-10
">


{/* FRONT */}

<div>

<h2 className="
text-xl
font-bold
text-blue-700
mb-4
">

Aadhaar Front Side

</h2>


<UploadCard

onImageSelect={setFrontImage}

/>


</div>





{/* BACK */}

<div>


<h2 className="
text-xl
font-bold
text-blue-700
mb-4
">

Aadhaar Back Side

</h2>


<UploadCard

onImageSelect={setBackImage}

/>


</div>


</div>





{/* Editor */}

{frontImage && (

<div className="mt-16">


<h2 className="
text-3xl
font-bold
mb-6
text-blue-700
">

Edit Front Image

</h2>


<ImageEditor
  image={frontImage}
  onSave={setEditedFrontImage}
/>
{backImage && (

<div className="mt-16">

<h2 className="text-3xl font-bold mb-6 text-blue-700">
Edit Back Image
</h2>

<ImageEditor
  image={backImage}
  onSave={setEditedBackImage}
/>

</div>

)}

</div>

)}





{/* Print Preview */}

{frontImage && backImage && (

<div className="mt-16">


<h2 className="
text-3xl
font-bold
mb-6
text-blue-700
">

A4 Print Preview

</h2>


<PrintPreview

frontImage={editedFrontImage || frontImage}

backImage={editedBackImage || backImage}

/>


</div>

)}



</div>


</section>


  );

}