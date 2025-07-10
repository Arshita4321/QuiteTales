import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Chapter = () => {
  // States for text and draft
  const [title, setTitle] = useState("Untitled Part 1");
  const [draftText, setDraftText] = useState("");
  const [draftSaved, setDraftSaved] = useState(true);
  const [showHeaderMediaTooltip, setShowHeaderMediaTooltip] = useState(true);
  const [showInlineMediaTooltip, setShowInlineMediaTooltip] = useState(true);
  const [headerMediaType, setHeaderMediaType] = useState(null); // 'image' or 'video'
  const [inlineMediaType, setInlineMediaType] = useState(null); // 'image' or 'video'
  const contentRef = useRef(null);
  const navigate = useNavigate();

  // Auto save draft simulation
  useEffect(() => {
    if (!draftSaved) {
      const timeout = setTimeout(() => setDraftSaved(true), 1000);
      return () => clearTimeout(timeout);
    }
  }, [draftSaved]);

  // Handlers to simulate saving on typing
  const onChangeDraftText = () => {
    const content = contentRef.current.innerHTML;
    setDraftText(content);
    setDraftSaved(false);
  };

  // Tooltips close handlers (that appear on load)
  const closeHeaderMediaTooltip = () => setShowHeaderMediaTooltip(false);
  const closeInlineMediaTooltip = () => setShowInlineMediaTooltip(false);

  // Media button handlers for header and inline media
  const toggleHeaderMedia = (type) => {
    if (type === "image" && headerMediaType !== "image") {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const previewUrl = URL.createObjectURL(file);
          setHeaderMediaType("image");
          setShowHeaderMediaTooltip(false);
          // Optionally store or display the header image (e.g., in state or DOM)
          alert(`Header image selected: ${previewUrl}`);
        } else {
          alert("Please select a valid image file.");
        }
      };
      fileInput.click();
    } else if (type === "video" && headerMediaType !== "video") {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "video/*";
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("video/")) {
          const previewUrl = URL.createObjectURL(file);
          setHeaderMediaType("video");
          setShowHeaderMediaTooltip(false);
          alert(`Header video selected: ${previewUrl}`);
        } else {
          alert("Please select a valid video file.");
        }
      };
      fileInput.click();
    } else {
      setHeaderMediaType(null);
    }
  };

  const toggleInlineMedia = (type) => {
    if (type === "image" && inlineMediaType !== "image") {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
          const previewUrl = URL.createObjectURL(file);
          insertImage(previewUrl);
          setInlineMediaType("image");
          setShowInlineMediaTooltip(false);
        } else {
          alert("Please select a valid image file.");
        }
      };
      fileInput.click();
    } else if (type === "video" && inlineMediaType !== "video") {
      alert("Video insertion is not supported yet.");
      setInlineMediaType("video");
      setShowInlineMediaTooltip(false);
    } else {
      setInlineMediaType(null);
    }
  };

  // Insert image at cursor position
  const insertImage = (src) => {
    const content = contentRef.current;
    const range = window.getSelection().getRangeAt(0);
    const imageTag = `<img src="${src}" alt="Inline Image" style="max-width: 100%; height: auto; margin: 10px 0;" />`;
    const newNode = document.createElement("div");
    newNode.innerHTML = imageTag;
    range.insertNode(newNode.firstChild);
    range.collapse(false);
    setDraftText(content.innerHTML);
    setDraftSaved(false);
    content.focus();
  };

  // Placeholder for publish/save/preview actions
  const handlePublish = () => alert("Publish clicked");
  const handleSave = () => alert("Save clicked");
  const handlePreview = () => alert("Preview clicked");

  // Back button navigation
  const handleBack = () => {
    navigate("/write");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-gray-900">
      {/* Top Fixed Header */}
      <header className="flex items-center justify-between px-6 py-2 border-b border-gray-200 bg-white fixed top-0 left-0 right-0 z-30">
        {/* Left side story info */}
        <div className="flex items-center space-x-3">
          <button
            className="p-2 hover:bg-gray-100 rounded-md"
            aria-label="Back to story list"
            onClick={handleBack}
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="flex items-center space-x-0.5 cursor-pointer">
            <div className="flex items-center border border-gray-300 rounded-l px-2 py-1 select-none bg-orange-500 text-white font-semibold text-xs uppercase">
              A
            </div>

            <div>
              <div className="text-xs text-gray-600">Untitled Story</div>
              <div className="font-semibold text-sm">{title}</div>
              <div className="text-xs text-gray-500">
                Draft (<span>{draftText.trim().split(/\s+/).filter(Boolean).length}</span> Words){" "}
                <span className="text-green-600">
                  {draftSaved ? "Saved" : "Saving..."}
                </span>
              </div>
            </div>

            <button
              className="ml-1 p-1 hover:bg-gray-200 rounded-full"
              aria-label="Story options"
              onClick={() => alert("More options clicked")}
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={handlePublish}
            className="px-4 py-1 text-white bg-black rounded-full text-sm font-medium hover:bg-gray-900 transition"
          >
            Publish
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-1 text-gray-800 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100 transition"
          >
            Save
          </button>
          <button
            onClick={handlePreview}
            className="px-4 py-1 text-gray-800 border border-gray-400 rounded-full text-sm font-medium hover:bg-gray-100 transition"
          >
            Preview
          </button>
          <button
            aria-label="More options"
            className="p-2 hover:bg-gray-100 rounded-full"
            onClick={() => alert("More top options clicked")}
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16"></div>

      {/* Header Media Picker Section */}
      <section className="relative bg-gray-200 border-b border-gray-300 py-8 flex justify-center items-center">
        {/* Media Buttons */}
        <div className="bg-white rounded-md shadow-md flex divide-x border border-gray-300">
          <button
            onClick={() => toggleHeaderMedia("image")}
            className={`px-6 py-3 flex items-center justify-center space-x-2 ${
              headerMediaType === "image" ? "bg-gray-200" : "bg-white"
            } hover:bg-gray-100`}
            aria-label="Add header image"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-11-3l2.5 3 3.5-4.5 4.5 6H5l5-7z" />
            </svg>
          </button>
          <button
            onClick={() => toggleHeaderMedia("video")}
            className={`px-6 py-3 flex items-center justify-center space-x-2 ${
              headerMediaType === "video" ? "bg-gray-200" : "bg-white"
            } hover:bg-gray-100`}
            aria-label="Add header video"
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5l4 4v-11l-4 4z" />
            </svg>
          </button>
        </div>

        {/* Tooltip for header media */}
        {showHeaderMediaTooltip && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-72 bg-white rounded-md shadow-lg border border-gray-300 p-4 text-gray-700 text-sm z-20 select-none">
            <div className="font-semibold mb-1">Add header media</div>
            <div className="mb-3 text-gray-500 text-xs sm:text-sm">
              Set the mood for your story by adding multimedia.
            </div>
            <button
              onClick={closeHeaderMediaTooltip}
              className="bg-orange-600 hover:bg-orange-700 py-1 px-3 text-white text-xs rounded-md float-right"
              aria-label="Close tooltip"
            >
              OK
            </button>
            <div className="clear-both"></div>
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                alert("Learn more clicked");
              }}
            >
              Learn More
            </a>
          </div>
        )}
      </section>

      {/* Article Writing Section */}
      <main className="max-w-4xl mx-auto mt-14 px-6 pb-40">
        <h2 className="text-center text-xl font-normal text-gray-900 border-b border-gray-300 pb-2 mb-10">
          {title}
        </h2>

        {/* Editable content div */}
        <div className="relative">
          <div
            ref={contentRef}
            contentEditable
            dir="ltr" // Enforce left-to-right text direction
            aria-label="Write your story part here"
            className="w-full min-h-[200px] resize-none border-0 border-b border-gray-300 outline-none placeholder-gray-400 focus:ring-0 text-lg text-center font-light text-gray-700"
            placeholder="Type your text"
            onInput={onChangeDraftText}
            dangerouslySetInnerHTML={{ __html: draftText }}
          />

          {/* Inline media picker at top left inside text box */}
          <div className="absolute -top-10 left-0 flex border border-gray-300 rounded-md overflow-hidden bg-white shadow-md shadow-gray-200">
            <button
              onClick={() => toggleInlineMedia("image")}
              className={`p-2 ${inlineMediaType === "image" ? "bg-gray-100" : "bg-white"} hover:bg-gray-50`}
              aria-label="Insert inline image"
              title="Insert inline image"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zm-11-3l2.5 3 3.5-4.5 4.5 6H5l5-7z" />
              </svg>
            </button>
            <button
              onClick={() => toggleInlineMedia("video")}
              className={`p-2 ${inlineMediaType === "video" ? "bg-gray-100" : "bg-white"} hover:bg-gray-50`}
              aria-label="Insert inline video"
              title="Insert inline video"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4.5l4 4v-11l-4 4z" />
              </svg>
            </button>
          </div>

          {/* Tooltip for inline media */}
          {showInlineMediaTooltip && (
            <div className="absolute top-[-6rem] left-10 w-72 bg-white rounded-md shadow-lg border border-gray-300 p-4 text-gray-700 text-xs sm:text-sm z-20 select-none">
              <div className="font-semibold mb-1">Add in-line media</div>
              <div className="mb-3 text-gray-500 leading-tight">
                Bring your story to life by adding multimedia. <br />
                Must be in PNG, GIF, or JPG format, smaller than 2MB. Recommended cover dimensions: 512x800 pixels.
              </div>
              <button
                onClick={closeInlineMediaTooltip}
                className="bg-orange-600 hover:bg-orange-700 py-1 px-3 text-white rounded-md float-right"
                aria-label="Close tooltip"
              >
                OK
              </button>
              <div className="clear-both"></div>
              <a
                href="#"
                className="text-blue-600 hover:underline text-xs"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Learn more clicked");
                }}
              >
                Learn More
              </a>
            </div>
          )}
        </div>
      </main>

      {/* Footer showing that the page is clipped but footer text is presumably included in screenshot */}
      <footer className="text-center py-10 text-xs text-gray-400 select-none">
        Wattpad Originals | Try Premium | Get the App | Language | Writers | Brand Partnerships | Jobs | Press
      </footer>
    </div>
  );
};

export default Chapter;