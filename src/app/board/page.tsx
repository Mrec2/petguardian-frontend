"use client";

import { useState } from "react";
import { useAuthStore } from "@/hooks/authStore"; 

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default function BoardPage() {
  const { isAuthenticated, name } = useAuthStore(); 
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    const newPost: Post = {
      id: posts.length + 1,
      title,
      content,
      author: name || "Anonymous",
    };

    setPosts([newPost, ...posts]); 
    setTitle("");
    setContent("");
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Community Board</h1>

      
      {isAuthenticated ? (
        <div className="w-full max-w-2xl bg-gray-900 p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
          {error && <p className="text-red-500 mb-3">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-400"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:border-yellow-400"
              placeholder="Write your post here..."
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black font-bold p-3 rounded-md hover:bg-yellow-500 transition"
            >
              Post
            </button>
          </form>
        </div>
      ) : (
        <p className="text-gray-400 mb-6">You need to log in to post.</p>
      )}

      
      <div className="w-full max-w-2xl">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center">No posts yet. Be the first to share something!</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-gray-800 p-5 rounded-lg shadow-md mb-4">
              <h3 className="text-xl font-bold text-yellow-400">{post.title}</h3>
              <p className="text-gray-300 mt-2">{post.content}</p>
              <p className="text-gray-500 text-sm mt-4">Posted by: {post.author}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
