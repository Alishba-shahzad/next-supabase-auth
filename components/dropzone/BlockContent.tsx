// import { UploadIllustration } from "../../assets";

export default function BlockContent({
  fileName,
  fileMessage,
}: {
  fileName: string | undefined;
  fileMessage: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center space-y-4">
      {/* <UploadIllustration className="w-36" /> */}
      <div className="p-6">
        {fileName ? (
          <p>{fileName}</p>
        ) : (
          <p className="text-gray-500">
            Drop your files here or browse through your machine.
          </p>
        )}
        <p className="text-gray-900 font-bold">{fileMessage}</p>
        <div className="text-center mt-4">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md text-lg min-w-[120px]">
            Browse
          </button>
        </div>
      </div>
    </div>
  );
}
