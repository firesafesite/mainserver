import { useCallback, useState } from "react";
import ImageModal from "./Modal";
import { useDropzone } from "react-dropzone";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Dropzone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    const file = acceptedFiles.pop();
    console.log(file);
    let formData = new FormData();

    formData.append("image", file);
    toast("Uploading image...", { autoClose: 2000 })
    fetch("http://144.202.65.241:5000/upload", { method: "POST", body: formData })
      .then((response) => {
        toast("Analyzing image...", { autoClose: 2000 })
        response.text().then((text) => {
          fetch(
            `http://144.202.65.241:5000/predict?url=http://144.202.65.241:5000/download/${text}.png`,
            { method: "POST" }
          )
            .then((resp) => {
              resp.json().then((json) => {
                console.log(json);
                toast("Image analyzed!", { autoClose: 2000 })
                openModal(json.image);
              });
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imageUrl) => {
    setModalIsOpen(true);
    setModalImage(imageUrl);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      {...getRootProps()}
      style={{
        width: "100%",
        height: "100%",
        border: "2px solid #000",
        borderRadius: "5px",
        display: "flex",
        "justify-content":
          "center" /* Adjust this based on your desired horizontal alignment */,
        "align-items": "center",
        flexDirection: "column",
        cursor: "pointer",
        backgroundColor: "#f0f0f0",
      }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop file here</p>
      ) : (
        <p>Drag and drop image here to analyze</p>
      )}
      <svg
        style={{
          width: "50%",
          height: "50%",
        }}
        enableBackground="new 0 0 32 32"
        id="Glyph"
        version="1.1"
        viewBox="0 0 32 32"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M24.972,12.288C24.608,7.657,20.723,4,16,4c-4.04,0-7.508,2.624-8.627,6.451C4.181,11.559,2,14.583,2,18  c0,4.411,3.589,8,8,8h13c3.86,0,7-3.14,7-7C30,15.851,27.93,13.148,24.972,12.288z M20.924,15.383C20.769,15.756,20.404,16,20,16h-2  v4c0,1.104-0.896,2-2,2s-2-0.896-2-2v-4h-2c-0.404,0-0.769-0.244-0.924-0.617c-0.155-0.374-0.069-0.804,0.217-1.09l4-4  C15.488,10.098,15.744,10,16,10s0.512,0.098,0.707,0.293l4,4C20.993,14.579,21.079,15.009,20.924,15.383z"
          id="XMLID_270_"
        />
      </svg>
      <ImageModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        imageUrl={modalImage}
      />
      <ToastContainer />
    </div>
  );
}

export default Dropzone;
