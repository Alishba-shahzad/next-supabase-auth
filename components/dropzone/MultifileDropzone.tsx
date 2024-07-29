import { useDropzone } from "react-dropzone";
import { useState, useEffect } from "react";
import BlockContent from "./BlockContent";
import RejectionFiles from "./RejectionFiles";
import MultiFilePreview from "./MultiFilePreview";
import { UploadMultiFileProps } from "./type";
import CloseModalButton from "src/assets/icon/close/CloseModalButton";

export default function UploadMultiFile({
  loading,
  error,
  validator,
  showPreview = false,
  files,
  onUpload,
  onRemove,
  onRemoveAll,
  helperText,
  sx,
  handleCloseModal,
  ...other
}: UploadMultiFileProps) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
    acceptedFiles,
  } = useDropzone({
    ...other,
  });


  const fileMessage = `a_maximum_of_10_files_are_allowed_in_a_single_upload`;

  return (
    <div
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 lg:w-3/5 bg-white shadow-xl rounded-2xl p-8 m-auto ${sx}`}
    >
      <div className="flex justify-end -mt-4 -mr-4">
        <button className="h-8 w-8" onClick={handleCloseModal}>
          <CloseModalButton />
        </button>
      </div>
      <h5 className="font-bold text-lg">{"upload_by_device"}</h5>
      <div
        {...getRootProps()}
        className={`outline-none border-dashed border-2 border-gray-300 rounded-xl bg-white p-8 mt-4 ${
          isDragActive ? "opacity-72" : ""
        } ${isDragReject || error ? "border-red-400 bg-red-50" : ""}`}
      >
        <input {...getInputProps()} />
        <BlockContent fileName={undefined} fileMessage={fileMessage} />
      </div>

      {fileRejections.length > 0 && (
        <RejectionFiles fileRejections={fileRejections} />
      )}

      <MultiFilePreview
        files={files}
        showPreview={showPreview}
        onRemove={onRemove}
        loading={false}
      />

      {files.length > 0 && (
        <>
          <p className="text-base mt-2 ml-2">
            {`finance_screen.selected_files`}: {files?.length}
          </p>
          <div className="flex justify-center mt-4 items-center space-x-4">
            <button
              className="text-center mr-2 py-2 px-4 border rounded-md text-sm font-medium border-gray-300"
              onClick={onRemoveAll}
            >
              {"Cancel"}
            </button>
            <button
              className={`py-2 px-4 bg-blue-600 text-white rounded-md text-sm font-medium ${
                loading ? "cursor-not-allowed opacity-50" : ""
              }`}
              onClick={onUpload}
              disabled={loading}
            >
              {"upload"}
            </button>
          </div>
        </>
      )}

      {helperText && <p className="mt-2 text-sm text-gray-600">{helperText}</p>}
    </div>
  );
}
