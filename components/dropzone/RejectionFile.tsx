// import { FileRejection } from "react-dropzone";
// import { fData } from "../../utils/formatNumber";
// import getFileData from "../../utils/getFileData";

// type Props = {
//   fileRejections: FileRejection[];
// };

// export default function RejectionFiles({ fileRejections }: Props) {
//   return (
//     <div className="border border-red-400 bg-red-100 p-4 mt-4 rounded">
//       {fileRejections.map(({ file, errors }) => {
//         const { path, size } = getFileData(file);

//         return (
//           <div key={path} className="my-2">
//             <p className="font-semibold truncate">
//               {path} - {size ? fData(size) : ""}
//             </p>

//             <ul className="text-sm">
//               {errors.map((error) => (
//                 <li key={error.code}>{error.message}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
