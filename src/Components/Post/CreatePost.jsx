import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate

function AddPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate(); // استخدام useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      body
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Post added:', data);
        alert('Post added successfully!');
        setTitle('');
        setBody('');
        navigate(`/detailspost/${data.id}`); // التنقل إلى صفحة تفاصيل المنشور
      })
      .catch(error => {
        console.error('Error adding post:', error);
        alert('Failed to add post');
      });
  };

  return (
    <>
      <h1 className="text-center" style={{ color: 'darkgreen', marginTop: '100px' }}>Add New Post</h1>
      <div className="container" style={{ width: '80%', margin: 'auto' ,marginTop: '100px'}}>
        <form onSubmit={handleSubmit} className="container mt-5">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              type="text"
              id="title"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{ borderColor: 'darkgreen' }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="body" className="form-label">Body:</label>
            <textarea
              id="body"
              className="form-control"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              style={{ borderColor: 'darkgreen' }}
            />
          </div>
          <button type="submit" className="btn btn-success" style={{ backgroundColor: 'darkgreen' }}>Add Post</button>
        </form>
      </div>
    </>
  );
}

export default AddPage;