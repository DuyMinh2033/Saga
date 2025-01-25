import { useState } from "react";
import "./styles.scss";

const SortImage = () => {
  const [files, setFiles] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleFileChange = (e, index) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      const newFiles = [...files];
      newFiles[index] = imageUrl;
      setFiles(newFiles);
    }
  };

  const handleUpload = (index) => {
    document.querySelector(`#fileInput-${index}`).click();
  };

  const handleRemoveImg = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const addNewSection = () => {
    setFiles([...files, null]);
  };

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDrop = (index) => {
    if (draggedIndex !== null && draggedIndex !== index) {
      const newFiles = [...files];
      [newFiles[draggedIndex], newFiles[index]] = [
        newFiles[index],
        newFiles[draggedIndex],
      ];
      setFiles(newFiles);
    }
    setDraggedIndex(null);
  };

  const handleTouchStart = (index) => {
    console.log("run");
    setDraggedIndex(index);
  };

  const handleTouchEnd = (index) => {
    handleDrop(index);
  };

  const renderItemImg = (file, index) => {
    return (
      <div
        className="item"
        key={index}
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => handleDrop(index)}
        onTouchStart={() => handleTouchStart(index)}
        onTouchEnd={() => handleTouchEnd(index)}
      >
        {file ? (
          <div className="img">
            <button
              className="icon__remove"
              onClick={() => handleRemoveImg(index)}
            >
              X
            </button>
            <img src={file} alt="Preview" className="preview__img" />
          </div>
        ) : (
          <>
            <input
              type="file"
              id={`fileInput-${index}`}
              onChange={(e) => handleFileChange(e, index)}
              className="hidden"
            />
            <button className="btn__upload" onClick={() => handleUpload(index)}>
              Upload
            </button>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="container__image">
      <div className="section">
        {files.map((file, index) => renderItemImg(file, index))}
      </div>
      <button onClick={addNewSection}>Add section more</button>
    </div>
  );
};

export default SortImage;
