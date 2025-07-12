import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Chapter = () => {
  const [title, setTitle] = useState("Untitled Part 1");
  const [draftText, setDraftText] = useState("");
  const [showHeaderMediaTooltip, setShowHeaderMediaTooltip] = useState(true);
  const [showInlineMediaTooltip, setShowInlineMediaTooltip] = useState(true);
  const [headerMediaSrc, setHeaderMediaSrc] = useState(null);
  const [inlineMediaList, setInlineMediaList] = useState([]);
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const onChangeDraftText = () => {
    const content = contentRef.current?.innerHTML || "";
    setDraftText(content);
  };

  const closeHeaderMediaTooltip = () => setShowHeaderMediaTooltip(false);
  const closeInlineMediaTooltip = () => setShowInlineMediaTooltip(false);

  const toggleHeaderMedia = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        setHeaderMediaSrc(previewUrl);
        setShowHeaderMediaTooltip(false);
      } else {
        alert("Please select a valid image file.");
      }
    };
    fileInput.click();
  };

  const toggleInlineMedia = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.onchange = (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        insertImage(previewUrl);
        setInlineMediaList((prev) => [...prev, previewUrl]);
        setShowInlineMediaTooltip(false);
      } else {
        alert("Please select a valid image file.");
      }
    };
    fileInput.click();
  };

  const insertImage = (src) => {
    const content = contentRef.current;
    if (content) {
      const imgWrapper = document.createElement("div");
      imgWrapper.className = "flex justify-center my-4 relative";
      const img = document.createElement("img");
      img.src = src;
      img.className = "max-w-[300px] w-full h-auto";

      const cancelBtn = document.createElement("button");
      cancelBtn.innerText = "×";
      cancelBtn.className = "absolute top-0 right-0 bg-white text-black px-1 rounded-full text-xs border hover:bg-gray-100";
      cancelBtn.onclick = () => {
        imgWrapper.remove();
        setInlineMediaList((prev) => prev.filter((url) => url !== src));
      };

      imgWrapper.appendChild(img);
      imgWrapper.appendChild(cancelBtn);

      const range = window.getSelection().getRangeAt(0);
      range.insertNode(imgWrapper);
      range.collapse(false);
      setDraftText(content.innerHTML);
      content.focus();
    }
  };

  const handleBack = () => navigate("/write");

  const handlePublish = () => alert("Publish clicked");
  const handleSave = () => alert("Save clicked");
  const handlePreview = () => alert("Preview clicked");

  const handleFocus = () => {
    const content = contentRef.current;
    if (content && (content.innerHTML === "" || content.innerHTML === "<p><br></p>")) {
      content.innerHTML = "<p></p>";
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(content.firstChild);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      <header className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-2 border-b border-gray-200 bg-white">
        <div className="flex items-center space-x-3">
          <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-md">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <div className="flex items-center space-x-0.5 cursor-pointer">
            <div className="flex items-center border border-gray-300 rounded-l px-2 py-1 select-none bg-orange-500 text-white font-semibold text-xs uppercase">A</div>
            <div>
              <div className="text-xs text-gray-600">Untitled Story</div>
              <div className="font-semibold text-sm">{title}</div>
              <div className="text-xs text-gray-500">
                {draftText.trim().split(/\s+/).filter(Boolean).length} Words
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button onClick={handlePublish} className="px-4 py-1 text-white bg-black rounded-full text-sm font-medium hover:bg-gray-900">Publish</button>
          <button onClick={handleSave} className="px-4 py-1 text-gray-800 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100">Save</button>
          <button onClick={handlePreview} className="px-4 py-1 text-gray-800 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100">Preview</button>
        </div>
      </header>

      <div className="h-16"></div>

      <section className="relative bg-gray-200 border-b border-gray-300 py-8 flex justify-center items-center">
        {headerMediaSrc ? (
          <img src={headerMediaSrc} alt="Header" className="w-full h-70 object-cover rounded" />
        ) : (
          <div className="bg-white rounded-md shadow-md flex divide-x border border-gray-300">
            <button onClick={toggleHeaderMedia} className="px-6 py-3 hover:bg-gray-100">
              <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-11-3l2.5 3 3.5-4.5 4.5 6H5l5-7z" />
              </svg>
            </button>
          </div>
        )}
      </section>

      <main className="max-w-4xl mx-auto mt-14 px-6 pb-40">
        <h2 className="text-center text-xl font-normal text-gray-900 border-b border-gray-300 pb-2 mb-10">{title}</h2>
        <div className="relative">
          <div
            ref={contentRef}
            contentEditable
            dir="ltr"
            onFocus={handleFocus}
            onInput={onChangeDraftText}
            aria-label="Write your story part here"
            className="w-full min-h-[700px] min-w-[700px] border border-gray-300 rounded-lg p-4 outline-none placeholder-gray-400 focus:ring-0 text-lg font-light text-gray-700 overflow-auto"
            placeholder="Type your text"
          />

          <div className="absolute -top-10 left-0 flex border border-gray-300 rounded-md overflow-hidden bg-white shadow-md">
            <button onClick={toggleInlineMedia} className="p-2 hover:bg-gray-50">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-11-3l2.5 3 3.5-4.5 4.5 6H5l5-7z" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      <footer className="text-center py-10 text-xs text-gray-400 select-none">
        Wattpad Originals | Try Premium | Get the App | Language | Writers | Brand Partnerships | Jobs | Press
      </footer>
    </div>
  );
};

export default Chapter;
