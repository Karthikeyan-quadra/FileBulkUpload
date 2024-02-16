// import * as React from 'react';
// import styles from './Bulkupload.module.scss';
// import type { IBulkuploadProps } from './IBulkuploadProps';
// import { escape } from '@microsoft/sp-lodash-subset';

// export default class Bulkupload extends React.Component<IBulkuploadProps, {}> {
//   public render(): React.ReactElement<IBulkuploadProps> {
//     const {
//       description,
//       isDarkTheme,
//       environmentMessage,
//       hasTeamsContext,
//       userDisplayName
//     } = this.props;

//     return (
//       <section className={`${styles.bulkupload} ${hasTeamsContext ? styles.teams : ''}`}>
//         <div className={styles.welcome}>
//           <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
//           <h2>Well done, {escape(userDisplayName)}!</h2>
//           <div>{environmentMessage}</div>
//           <div>Web part property value: <strong>{escape(description)}</strong></div>
//         </div>
//         <div>
//           <h3>Welcome to SharePoint Framework!</h3>
//           <p>
//             The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
//           </p>
//           <h4>Learn more about SPFx development:</h4>
//           <ul className={styles.links}>
//             <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
//             <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
//             <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
//           </ul>
//         </div>
//       </section>
//     );
//   }
// }

//Code works
// import * as React from 'react';
// import type { IBulkuploadProps } from './IBulkuploadProps';
// import { UploadFile } from '../../../helpers/service';

// export default function Bulkupload(props: IBulkuploadProps) {
//   const [files, setFiles] = React.useState<File[]>([]);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const selectedFiles = event.target.files;
//       const newFiles: File[] = [];
      
//       // Convert FileList to a regular array
//       for (let i = 0; i < selectedFiles.length; i++) {
//         newFiles.push(selectedFiles[i]);
//       }

//       setFiles((prevFiles) => [...prevFiles, ...newFiles]);
//     }
//   };

//   const handleUpload = async () => {
//     // Iterate over the files and upload them one by one
//     for (const file of files) {
//       await UploadFile(file, "BulkUpload");
//     }
//   };

//   return (
//     <>
//       <input type="file" multiple onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload Files</button>
//     </>
//   );
// }


//working code 2
// import * as React from 'react';
// import type { IBulkuploadProps } from './IBulkuploadProps';
// import { UploadFile } from '../../../helpers/service';

// export default function Bulkupload(props: IBulkuploadProps) {
//   const [files, setFiles] = React.useState<File[]>([]);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const selectedFiles:any = event.target.files;
//       setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
//     }
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();

//     const droppedFiles:any = event.dataTransfer.files;
//     setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleUpload = async () => {
//     for (const file of files) {
//       await UploadFile(file, "BulkUpload");
//     }

//     // Clear the files after uploading
//     setFiles([]);
//   };

//   return (
//     <div
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//       style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
//     >
//       <input type="file" multiple onChange={handleFileChange} style={{ display: 'none' }} />
//       <label htmlFor="fileInput">Choose files</label>
//       <input
//         type="file"
//         id="fileInput"
//         multiple
//         onChange={handleFileChange}
//         style={{ display: 'none' }}
//       />
//       <p>or</p>
//       <p>Drag and drop files here</p>
//       <button onClick={handleUpload}>Upload Files</button>
//     </div>
//   );
// }


// //Drag and drop code works 
// import * as React from 'react';
// import type { IBulkuploadProps } from './IBulkuploadProps';
// import { UploadFile } from '../../../helpers/service';

// export default function Bulkupload(props: IBulkuploadProps) {
//   const [files, setFiles] = React.useState<File[]>([]);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const selectedFiles:any = event.target.files;
//       setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
//     }
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();

//     const droppedFiles:any = event.dataTransfer.files;
//     setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleChooseFiles = () => {
//     // Trigger the hidden file input
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleUpload = async () => {
//     for (const file of files) {
//       await UploadFile(file, "BulkUpload");
//     }

//     // Clear the files after uploading
//     setFiles([]);
//   };

//   // Ref for the file input element
//   const fileInputRef = React.useRef<HTMLInputElement>(null);

//   return (
//     <div
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//       style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
//     >
//       <input
//         type="file"
//         multiple
//         onChange={handleFileChange}
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//       />
//       <label htmlFor="fileInput">Choose files</label>
//       <button onClick={handleChooseFiles}>Choose Files</button>
//       <p>or</p>
//       <p>Drag and drop files here</p>
//       <button onClick={handleUpload}>Upload Files</button>
//     </div>
//   );
// }

// //Code works good
// import * as React from 'react';
// import type { IBulkuploadProps } from './IBulkuploadProps';
// import { UploadFile } from '../../../helpers/service';

// export default function Bulkupload(props: IBulkuploadProps) {
//   const [files, setFiles] = React.useState<File[]>([]);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       const selectedFiles:any = event.target.files;
//       setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
//     }
//   };

//   const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();

//     const droppedFiles:any = event.dataTransfer.files;
//     setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
//   };

//   const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//   };

//   const handleChooseFiles = () => {
//     // Trigger the hidden file input
//     if (fileInputRef.current) {
//       fileInputRef.current.click();
//     }
//   };

//   const handleUpload = async () => {
//     for (const file of files) {
//       await UploadFile(file, "BulkUpload");
//     }
//     alert("Files uploaded successfully!");

//     // Clear the files after uploading
//     setFiles([]);
//   };

//   // Ref for the file input element
//   const fileInputRef = React.useRef<HTMLInputElement>(null);

//   return (
//     <div
//       onDrop={handleDrop}
//       onDragOver={handleDragOver}
//       style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
//     >
//       <input
//         type="file"
//         multiple
//         onChange={handleFileChange}
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//       />
//       <label htmlFor="fileInput" onClick={handleChooseFiles}>Click to choose files</label>
//       <p>or</p>
//       <p>Drag and drop files here</p>
//       {files.length > 0 && (
//         <div>
//           <p>Selected Files:</p>
//           <ul>
//             {files.map((file, index) => (
//               <li key={index}>{file.name}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//       <button onClick={handleUpload}>Upload Files</button>
//     </div>
//   );
// }


import * as React from 'react';
import type { IBulkuploadProps } from './IBulkuploadProps';
import { UploadFile } from '../../../helpers/service';

const Bulkupload: React.FC<IBulkuploadProps> = (props) => {
  const [files, setFiles] = React.useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles: any = event.target.files;
      setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const droppedFiles: any = event.dataTransfer.files;
    setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleChooseFiles = () => {
    // Trigger the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleRemoveFile = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleUpload = async () => {
    try {
      if (files.length === 0) {
        alert("Please select files to upload.");
        return;
      }

      for (const file of files) {
        await UploadFile(file, "BulkUpload");
      }

      // Clear the files after uploading
      setFiles([]);

      // Display an alert for successful upload
      alert("Files uploaded successfully!");
    } catch (error) {
      console.error("Error during file upload:", error);
    }
  };

  // Ref for the file input element
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{
        border: '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '10px',
        backgroundColor: '#f5f5f5',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '50%',
        margin: 'auto',
        marginTop: '50px',
        paddingTop:"60px",
        fontSize:"15px",
        fontWeight:"500",
      }}
    >
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <label
        htmlFor="fileInput"
        // style={{
        //   cursor: 'pointer',
        //   padding: '10px',
        //   backgroundColor: '#4caf50',
        //   color: 'white',
        //   borderRadius: '5px',
        // }} 
        onClick={handleChooseFiles}
      >
        Click to choose files
      </label>
      <p>or</p>
      <p>Drag and drop files here</p>
      {files.length > 0 && (
        <div>
          <p>Selected Files:</p>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {files.map((file, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: '#ddd',
                  padding: '8px',
                  margin: '4px 0',
                  borderRadius: '5px',
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                {file.name}
                <button
                  onClick={() => handleRemoveFile(index)}
                  style={{
                    backgroundColor: '#f44336',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    padding: '5px',
                    cursor: 'pointer',
                    marginLeft: '10px',
                  }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={handleUpload}
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Upload Files
      </button>
    </div>
  );
};

export default Bulkupload;
