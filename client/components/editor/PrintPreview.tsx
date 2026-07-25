"use client";

type PrintPreviewProps = {
  frontImage: string;
  backImage: string;
};

export default function PrintPreview({
  frontImage,
  backImage,
}: PrintPreviewProps) {

  const printPage = () => {

    const printArea =
      document.getElementById("print-area");

    if (!printArea) return;

    const win = window.open("", "_blank");

    if (!win) return;

    win.document.write(`
      <html>
      <head>
      <title>Infodep Print Hub</title>

      <style>

      @page{
        size:A4;
        margin:0;
      }

      html,body{
        margin:0;
        padding:0;
      }

      body{
        display:flex;
        justify-content:center;
        align-items:flex-start;
        background:white;
      }

      #print-area{
        width:210mm;
        height:297mm;
        position:relative;
        overflow:hidden;
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

    win.onload = () => {
      win.focus();
      win.print();
      win.close();
    };

  };

  return (

    <div className="mt-10">

      <div
        id="print-area"
        className="bg-white shadow-xl relative mx-auto border"
        style={{
          width: "210mm",
          height: "297mm",
        }}
      >

        {frontImage && (

          <img
            src={frontImage}
            alt="Front"
            style={{
              position: "absolute",
              top: "20mm",
              left: "20mm",
              width: "85.6mm",
              height: "54mm",
              objectFit: "contain",
            }}
          />

        )}

        {backImage && (

          <img
            src={backImage}
            alt="Back"
            style={{
              position: "absolute",
              top: "90mm",
              left: "20mm",
              width: "85.6mm",
              height: "54mm",
              objectFit: "contain",
            }}
          />

        )}

      </div>

      <div className="flex justify-center mt-6">

        <button
          onClick={printPage}
          className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-xl"
        >
          🖨 Print A4
        </button>

      </div>

    </div>

  );

}