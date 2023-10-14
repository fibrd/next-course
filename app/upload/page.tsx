"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import React, { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="cld-uploaded-image"
        />
      )}
      <CldUploadWidget
        uploadPreset="tburcdrf"
        options={{ sources: ["local"], multiple: false, maxFiles: 5 }}
        onUpload={(result, widget) => {
          if (result.event === "success") {
            const info = result.info as CloudinaryResult;
            setPublicId(info.public_id);
          }
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
