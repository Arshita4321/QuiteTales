import React, { useState } from 'react';

const Write = () => {
  const [stories, setStories] = useState([
    { id: 1, title: 'Story 1', description: '', mainCharacter: '', characters: [], category: '', tags: [], targetAudience: '', language: 'English', copyright: 'All Rights Reserved', ratingMature: false, cover: null },
  ]);

  const updateStory = (id, updates) => {
    setStories(stories.map(story => story.id === id ? { ...story, ...updates } : story));
  };

  const addCharacter = (id) => {
    const story = stories.find(s => s.id === id);
    if (story.mainCharacter.trim() !== '') {
      updateStory(id, { characters: [...story.characters, story.mainCharacter.trim()], mainCharacter: '' });
    }
  };

  const addTag = (id) => {
    const story = stories.find(s => s.id === id);
    const tag = prompt('Enter a tag:');
    if (tag && tag.trim() !== '' && !story.tags.includes(tag.trim())) {
      updateStory(id, { tags: [...story.tags, tag.trim()] });
    }
  };

  const removeTag = (id, tagToRemove) => {
    const story = stories.find(s => s.id === id);
    updateStory(id, { tags: story.tags.filter(t => t !== tagToRemove) });
  };

  const removeCharacter = (id, charToRemove) => {
    const story = stories.find(s => s.id === id);
    updateStory(id, { characters: story.characters.filter(c => c !== charToRemove) });
  };

  const handleFileChange = (id, event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const previewUrl = URL.createObjectURL(file);
      updateStory(id, { cover: previewUrl });
    } else {
      alert('Please select a valid image file.');
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <button aria-label="Back" className="text-gray-600 hover:text-gray-900 text-2xl font-light pr-6">‹</button>
        <div className="text-lg font-semibold text-gray-700">My Stories</div>
        <div className="text-gray-800 font-semibold flex space-x-2">
          <a href='/'><button className="bg-gray-200 text-gray-700 rounded px-3 py-1 hover:bg-gray-300" type="button">Cancel</button></a>
          <a href = '/write/chapter'> <button className="flex items-center justify-center bg-indigo-600 text-white rounded  px-4 py-1 hover:bg-indigo-400" type="button">Next Chapters</button></a>
        </div>
      </div>

      {/* Stories List */}
      {stories.map((story) => (
        <div key={story.id} className="max-w-7xl mx-auto flex gap-12 px-6 py-10">
          {/* Left Side Cover */}
          <div className="flex-shrink-0 w-90 h-100 border border-gray-100 rounded shadow-sm bg-gray-100 select-none relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(story.id, e)}
              className="hidden"
              id={`cover-upload-${story.id}`}
            />
            <label htmlFor={`cover-upload-${story.id}`} className="cursor-pointer w-full h-full flex items-center justify-center">
              {story.cover ? (
                <img
                  src={story.cover}
                  alt={`${story.title} cover`}
                  className="rounded w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; }}
                />
              ) : (
                <button
                  type="button"
                  className="bg-white text-gray-700 rounded px-4 py-2 border border-gray-300 hover:bg-gray-100 text-sm font-semibold"
                  onClick={() => document.getElementById(`cover-upload-${story.id}`).click()}
                >
                  Add a Cover
                </button>
              )}
            </label>
            <div className="absolute bottom-2 right-2 bg-white rounded-full w-6 h-6 border border-gray-300 flex items-center justify-center text-gray-500 text-xs font-semibold select-none">i</div>
          </div>

          {/* Right Side Form */}
          <div className="flex-1  bg-white rounded shadow-md px-10 py-8 max-w-3xl">
            {/* Story Details Tab */}
            <div className='flex items-center justify-center'>
            <a href='/write' className="border-b border-indigo-500 w-36 pb-1 font-semibold text-gray-800 text-sm">Story Details</a>
            <a href='/write/chapter' className="border-b border-indigo-500 w-36 pb-1 font-semibold text-gray-800 text-sm">Table of content</a>
            </div>

            <form className="mt-8 space-y-8">
              {/* Title */}
              <div>
                <label htmlFor={`title-${story.id}`} className="block text-sm font-semibold text-gray-800 mb-1">Title</label>
                <input
                  id={`title-${story.id}`}
                  type="text"
                  className="w-full border border-gray-300 rounded-sm px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={story.title}
                  onChange={(e) => updateStory(story.id, { title: e.target.value })}
                />
              </div>

              {/* Description */}
              <div>
                <label htmlFor={`description-${story.id}`} className="flex items-center text-sm font-semibold text-gray-800 mb-1">
                  Description
                  <div aria-label="Information" title="Description info" className="ml-1 w-4 h-4 rounded-full border border-gray-400 text-xs font-semibold flex items-center justify-center cursor-default select-none text-gray-600 bg-gray-100">i</div>
                </label>
                <textarea
                  id={`description-${story.id}`}
                  rows={6}
                  value={story.description}
                  onChange={(e) => updateStory(story.id, { description: e.target.value })}
                  className="w-full border border-black rounded-lg p-2 text-gray-900 text-sm outline-none resize-none"
                />
              </div>

              {/* Main Characters */}
              <div>
                <label htmlFor={`mainCharacter-${story.id}`} className="flex items-center text-sm font-semibold text-gray-800 mb-1">
                  Main Characters
                  <div aria-label="Information" title="Main characters info" className="ml-1 w-4 h-4 rounded-full border border-gray-400 text-xs font-semibold flex items-center justify-center cursor-default select-none text-gray-600 bg-gray-100">i</div>
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id={`mainCharacter-${story.id}`}
                    type="text"
                    className="border border-gray-200 rounded px-3 py-2 text-gray-800 text-sm flex-grow focus:outline-none focus:ring-2 focus:ring-orange-500"
                    value={story.mainCharacter}
                    placeholder="Name"
                    onChange={(e) => updateStory(story.id, { mainCharacter: e.target.value })}
                    onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addCharacter(story.id); } }}
                  />
                  <button
                    type="button"
                    onClick={() => addCharacter(story.id)}
                    aria-label="Add main character"
                    className="bg-gray-100 rounded px-3 py-2 text-gray-700 border border-gray-300 hover:bg-gray-200"
                  >
                    +
                  </button>
                </div>
                {story.characters.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {story.characters.map((char) => (
                      <div key={char} className="bg-orange-500 text-white px-2 py-1 rounded flex items-center gap-1 text-xs font-semibold select-none">
                        {char}
                        <button type="button" onClick={() => removeCharacter(story.id, char)} aria-label={`Remove ${char}`} className="ml-1 focus:outline-none">×</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Category */}
              <div>
                <label htmlFor={`category-${story.id}`} className="flex items-center text-sm font-semibold text-gray-800 mb-1">
                  Category
                  <div aria-label="Information" title="Category info" className="ml-1 w-4 h-4 rounded-full border border-gray-400 text-xs font-semibold flex items-center justify-center cursor-default select-none text-gray-600 bg-gray-100">i</div>
                </label>
                <select
                  id={`category-${story.id}`}
                  className="w-56 border border-gray-200 rounded px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={story.category}
                  onChange={(e) => updateStory(story.id, { category: e.target.value })}
                >
                  <option value="" disabled>Select a category</option>
                  <option>Fiction</option>
                  <option>Non-fiction</option>
                  <option>Fantasy</option>
                  <option>Romance</option>
                  <option>Thriller</option>
                </select>
              </div>

              {/* Tags */}
              <div>
                <label className="flex items-center text-sm font-semibold text-gray-800 mb-1" htmlFor={`tags-${story.id}`}>
                  Tags
                  <div aria-label="Information" title="Tags info" className="ml-1 w-4 h-4 rounded-full border border-gray-400 text-xs font-semibold flex items-center justify-center cursor-default select-none text-gray-600 bg-gray-100">i</div>
                </label>
                <div className="flex flex-wrap gap-2 items-center">
                  {story.tags.length === 0 && (
                    <button
                      type="button"
                      onClick={() => addTag(story.id)}
                      aria-label="Add a tag"
                      className="text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-xs font-semibold hover:bg-gray-100 flex items-center gap-1"
                    >
                      Add a tag <span className="font-bold">+</span>
                    </button>
                  )}
                  {story.tags.map((tag) => (
                    <div key={tag} className="bg-gray-200 text-gray-800 rounded-full px-3 py-1 text-xs font-semibold flex items-center gap-2 select-none">
                      {tag}
                      <button onClick={() => removeTag(story.id, tag)} type="button" aria-label={`Remove tag ${tag}`} className="focus:outline-none">×</button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addTag(story.id)}
                    aria-label="Add a tag"
                    className="text-gray-700 border border-gray-300 rounded-full px-3 py-1 text-xs font-semibold hover:bg-gray-100 flex items-center gap-1"
                  >
                    Add a tag <span className="font-bold">+</span>
                  </button>
                </div>
              </div>

              {/* Target Audience */}
              <div>
                <label htmlFor={`targetAudience-${story.id}`} className="flex items-center text-sm font-semibold text-gray-800 mb-1">
                  Target Audience
                  <div aria-label="Information" title="Target Audience info" className="ml-1 w-4 h-4 rounded-full border border-gray-400 text-xs font-semibold flex items-center justify-center cursor-default select-none text-gray-600 bg-gray-100">i</div>
                </label>
                <select
                  id={`targetAudience-${story.id}`}
                  className="w-80 border border-gray-200 rounded px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={story.targetAudience}
                  onChange={(e) => updateStory(story.id, { targetAudience: e.target.value })}
                >
                  <option value="" disabled>Who is your primary audience?</option>
                  <option>Children</option>
                  <option>Young Adult</option>
                  <option>Adult</option>
                  <option>General Audience</option>
                </select>
              </div>

              {/* Language */}
              <div>
                <label htmlFor={`language-${story.id}`} className="flex items-center text-sm font-semibold text-gray-800 mb-1">
                  Language
                  <div aria-label="Information" title="Language info" className="ml-1 w-4 h-4 rounded-full border border-gray-400 text-xs font-semibold flex items-center justify-center cursor-default select-none text-gray-600 bg-gray-100">i</div>
                </label>
                <select
                  id={`language-${story.id}`}
                  className="w-48 border border-gray-200 rounded px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={story.language}
                  onChange={(e) => updateStory(story.id, { language: e.target.value })}
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                  <option>Chinese</option>
                </select>
              </div>

              {/* Copyright */}
              <div>
                <label htmlFor={`copyright-${story.id}`} className="flex items-center text-sm font-semibold text-gray-800 mb-1">
                  Copyright
                  <div aria-label="Information" title="Copyright info" className="ml-1 w-4 h-4 rounded-full border border-gray-400 text-xs font-semibold flex items-center justify-center cursor-default select-none text-gray-600 bg-gray-100">i</div>
                </label>
                <select
                  id={`copyright-${story.id}`}
                  className="w-72 border border-gray-200 rounded px-3 py-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={story.copyright}
                  onChange={(e) => updateStory(story.id, { copyright: e.target.value })}
                >
                  <option>All Rights Reserved</option>
                  <option>Creative Commons</option>
                  <option>Public Domain</option>
                  <option>Custom</option>
                </select>
                <p className="text-sm text-gray-600 mt-1 max-w-md">You do not allow your work to be used or adapted in any way without your permission.</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4">
                <label htmlFor={`rating-${story.id}`} className="flex items-center text-sm font-semibold text-gray-800">
                  Rating
                  <div aria-label="Information" title="Rating info" className="ml-1 w-4 h-4 rounded-full border border-gray-400 text-xs font-semibold flex items-center justify-center cursor-default select-none text-gray-600 bg-gray-100">i</div>
                </label>
                <div className="text-sm font-semibold text-gray-700">Mature</div>
                <label htmlFor={`rating-${story.id}`} className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id={`rating-${story.id}`}
                    className="sr-only peer"
                    checked={story.ratingMature}
                    onChange={() => updateStory(story.id, { ratingMature: !story.ratingMature })}
                  />
                  <div className="w-10 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-indigo-300 peer-checked:bg-indigo-600 relative transition-colors"></div>
                  <span className={`absolute left-1 top-1 w-6 h-4 bg-white rounded-full shadow-md transition-transform ${story.ratingMature ? 'translate-x-4' : ''}`}></span>
                  <div className="absolute right-1 top-1 text-xs font-semibold text-gray-700 select-none">{story.ratingMature ? '' : 'OFF'}</div>
                </label>
                <p className="text-sm text-gray-600 mt-1 max-w-md"> Is your story is appropriate for all audiences</p>
              </div>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Write;