import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ConversationForum = () => {
  // Sample posts with user info and comments
  const [posts, setPosts] = useState([
    { id: 1, user: "Alice", text: "Loved the latest contest! Any tips?", timestamp: new Date("2025-07-12T14:00:00Z").toISOString(), comments: [] },
    { id: 2, user: "You", text: "Working on a fantasy epic, need feedback!", timestamp: new Date("2025-07-12T14:05:00Z").toISOString(), comments: [] },
  ]);
  const [newPost, setNewPost] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [commentingId, setCommentingId] = useState(null);
  const [newComment, setNewComment] = useState("");
  const [showCommentsId, setShowCommentsId] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [editCommentText, setEditCommentText] = useState("");

  // Current user (hardcoded for this example)
  const currentUser = "You";

  // Handle new post submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.trim()) {
      setPosts([...posts, { id: posts.length + 1, user: currentUser, text: newPost, timestamp: new Date().toISOString(), comments: [] }]);
      setNewPost("");
    }
  };

  // Handle edit post
  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Handle save post edit
  const handleSaveEdit = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, text: editText } : post));
    setEditingId(null);
    setEditText("");
  };

  // Handle delete post
  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  // Handle comment submission
  const handleCommentSubmit = (id) => {
    if (newComment.trim() && currentUser) {
      setPosts(posts.map(post =>
        post.id === id ? { ...post, comments: [...post.comments, { id: post.comments.length + 1, user: currentUser, text: newComment, timestamp: new Date().toISOString() }] } : post
      ));
      setNewComment("");
      setCommentingId(null);
    }
  };

  // Handle edit comment
  const handleEditComment = (postId, commentId, text) => {
    setEditingComment({ postId, commentId });
    setEditCommentText(text);
  };

  // Handle save comment edit
  const handleSaveEditComment = (postId, commentId) => {
    setPosts(posts.map(post =>
      post.id === postId ? {
        ...post,
        comments: post.comments.map(comment =>
          comment.id === commentId ? { ...comment, text: editCommentText } : comment
        )
      } : post
    ));
    setEditingComment(null);
    setEditCommentText("");
  };

  // Handle delete comment
  const handleDeleteComment = (postId, commentId) => {
    setPosts(posts.map(post =>
      post.id === postId ? {
        ...post,
        comments: post.comments.filter(comment => comment.id !== commentId)
      } : post
    ));
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-50 to-white min-h-[400px]">
      {/* Posts Display */}
      <div className="space-y-6 mb-8 max-h-[600px] overflow-y-auto custom-scrollbar">
        <AnimatePresence>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className={`bg-${post.user === currentUser ? "blue-100" : "gray-100"} p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 ${
                post.user === currentUser ? "border-blue-500" : "border-gray-300"
              } relative`}
              initial={{ opacity: 0, x: post.user === currentUser ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: post.user === currentUser ? 100 : -100 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-between items-start">
                <div className="w-full">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-800 font-semibold">{post.user}</p>
                      {editingId === post.id ? (
                        <div className="mt-2">
                          <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <div className="mt-2 space-x-2">
                            <button
                              onClick={() => handleSaveEdit(post.id)}
                              className="bg-blue-500 text-white py-1 px-3 rounded-lg hover:bg-blue-600 transition duration-300"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingId(null)}
                              className="bg-gray-300 text-gray-700 py-1 px-3 rounded-lg hover:bg-gray-400 transition duration-300"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-700 mt-1">{post.text}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">Posted: {new Date(post.timestamp).toLocaleString()}</p>
                    </div>
                    {post.user === currentUser && editingId !== post.id && (
                      <div className="space-x-2 mt-5">
                        <button
                          onClick={() => handleEdit(post.id, post.text)}
                          className="text-blue-500 hover:text-blue-700 transition duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(post.id)}
                          className="text-red-500 hover:text-red-700 transition duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                          </svg>
                        </button>
                      </div>
                    )}
                  </div>

                  {/* See Comments Button */}
                  <motion.button
                    className="absolute top-2 right-2 text-blue-500 hover:text-blue-700 transition duration-300 flex items-center"
                    onClick={() => setShowCommentsId(showCommentsId === post.id ? null : post.id)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                    </svg>
                    See Comments ({post.comments.length})
                  </motion.button>

                  {/* Comment Display */}
                  <motion.div
                    className="mt-4"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: showCommentsId === post.id ? "auto" : 0, opacity: showCommentsId === post.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {showCommentsId === post.id && post.comments.length > 0 && (
                      <div className="space-y-2">
                        {post.comments.map((comment) => (
                          <motion.div
                            key={comment.id}
                            className="bg-gray-50 p-2 rounded-lg shadow-sm flex justify-between items-start"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div>
                              {editingComment && editingComment.postId === post.id && editingComment.commentId === comment.id ? (
                                <div>
                                  <input
                                    type="text"
                                    value={editCommentText}
                                    onChange={(e) => setEditCommentText(e.target.value)}
                                    className="w-full p-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  />
                                  <div className="mt-1 space-x-2">
                                    <button
                                      onClick={() => handleSaveEditComment(post.id, comment.id)}
                                      className="bg-blue-500 text-white py-0.5 px-2 rounded-lg hover:bg-blue-600 transition duration-300 text-sm"
                                    >
                                      Save
                                    </button>
                                    <button
                                      onClick={() => setEditingComment(null)}
                                      className="bg-gray-300 text-gray-700 py-0.5 px-2 rounded-lg hover:bg-gray-400 transition duration-300 text-sm"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div>
                                  <p className="text-gray-700"><strong>{comment.user}:</strong> {comment.text}</p>
                                  <p className="text-xs text-gray-500">Posted: {new Date(comment.timestamp).toLocaleString()}</p>
                                </div>
                              )}
                            </div>
                            {comment.user === currentUser && !editingComment && (
                              <div className="space-x-1">
                                <button
                                  onClick={() => handleEditComment(post.id, comment.id, comment.text)}
                                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleDeleteComment(post.id, comment.id)}
                                  className="text-red-500 hover:text-red-700 transition duration-300"
                                >
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                                  </svg>
                                </button>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>

                  {/* Add Comment Button */}
                  <motion.button
                    className="mt-2 text-green-500 hover:text-green-700 transition duration-300"
                    onClick={() => setCommentingId(post.id)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Add Comment to this Post
                  </motion.button>

                  {/* Comment Input Form */}
                  {commentingId === post.id && (
                    <div className="mt-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                      />
                      <button
                        onClick={() => handleCommentSubmit(post.id)}
                        className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 transition duration-300"
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Post Form */}
      <form onSubmit={handleSubmit} className="flex space-x-2 bg-white p-4 rounded-xl shadow-md">
        <input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Add a message..."
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
        >
          Post
        </button>
      </form>
    </div>
  );
};

// Custom scrollbar for overflow
const style = document.createElement("style");
style.innerHTML = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 8px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
document.head.appendChild(style);

export default ConversationForum;