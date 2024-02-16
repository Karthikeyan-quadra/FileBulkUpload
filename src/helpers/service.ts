// import "@pnp/sp/webs";
// import "@pnp/sp/files";
// import "@pnp/sp/folders";
// import { addSP } from "./pnpconfig";
// // import { IFile } from "@pnp/sp/files";

// export async function Upload(file: File, filePath: string) {
//   try {
//     const fileNamePath: any = encodeURI(file.name);
//     console.log(fileNamePath);
//     const decodedFileNamePath = decodeURIComponent(fileNamePath);
//     console.log(decodedFileNamePath);

//     const sp = addSP();
//     let result: any;

//     if (file.size <= 10485760) {
//       // small upload
//       result = await sp.web.getFolderByServerRelativePath("BulkUpload").files.addUsingPath(decodedFileNamePath, file, { Overwrite: true });
//       console.log(result);
//     } else {
//       // large upload
//       result = await sp.web.getFolderByServerRelativePath("BulkUpload").files.addChunked(decodedFileNamePath, file, data => {
//         console.log(`progress`);
//       }, true);
//     }

//     console.log(`Result of file upload: ${JSON.stringify(result)}`);
//   } catch (error) {
//     console.error("Error during file upload:", error);
//   }
// }




import "@pnp/sp/webs";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import { addSP } from "./pnpconfig";
export async function UploadFile(file: File, filePath: string) {
    try {
      const fileNamePath: any = encodeURI(file.name);
      console.log(fileNamePath);
      const decodedFileNamePath = decodeURIComponent(fileNamePath);
      console.log(decodedFileNamePath);
  
      const sp = addSP();
      let result: any;
  
      if (file.size <= 10485760) {
        // small upload
        result = await sp.web.getFolderByServerRelativePath("BulkUpload").files.addUsingPath(decodedFileNamePath, file, { Overwrite: true });
      } else {
        // large upload
        result = await sp.web.getFolderByServerRelativePath("BulkUpload").files.addChunked(decodedFileNamePath, file, data => {
          console.log(`progress`);
        }, true);
      }
  
      console.log(`Result of file upload: ${JSON.stringify(result)}`);
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  }