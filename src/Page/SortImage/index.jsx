import { useState } from "react";
import "./styles.scss";

const SortImage = () => {
  const [files, setFiles] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
    if (index >= 0) {
      setDraggedIndex(index);
    }
  };
  const handleDrop = (index) => {
    console.log("s >>>", { draggedIndex, index });
    if (draggedIndex !== null && draggedIndex !== index) {
      const newFiles = [...files];
      [newFiles[draggedIndex], newFiles[index]] = [
        newFiles[index],
        newFiles[draggedIndex],
      ];
      setFiles(newFiles);
    }
    setHoveredIndex(null);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    setHoveredIndex(index);
  };

  const handleTouchMove = (e) => {
    const touchLocation = e.touches[0];
    const targetElement = document.elementFromPoint(
      touchLocation.clientX,
      touchLocation.clientY
    );

    if (targetElement && targetElement.tagName === "IMG") {
      const src = targetElement.getAttribute("src");
      const indexTarget = files.indexOf(src);
      if (indexTarget !== draggedIndex) handleDrop(indexTarget);
    }
  };

  const renderItemImg = (file, index) => {
    return (
      <div
        className={`item  ${hoveredIndex === index ? "hovering" : ""}`}
        key={index}
        draggable
        onDragStart={() => handleDragStart(index)}
        onDragOver={(e) => handleDragOver(e, index)}
        onDrop={() => handleDrop(index)}
        onTouchStart={() => handleDragStart(index)}
        onTouchMove={handleTouchMove}
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
