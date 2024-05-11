import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UpdatePage() {
  const { id } = useParams(); 
  const navigate = useNavigate(); // استخدام useNavigate للتنقل
  const [post, setPost] = useState({ title: '', body: '' });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`) // استخدام المعرف لجلب تفاصيل المنشور
      .then(response => response.json())
      .then(data => {
        setPost({ title: data.title, body: data.body });
      })
      .catch(error => console.error('Error fetching post:', error));
  }, [id]); // إضافة id إلى مصفوفة الاعتمادات لإعادة التنفيذ عند تغيره

  const handleUpdate = (e) => {
    e.preventDefault();
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(post),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Post updated:', data);
      alert('Post updated successfully!');
      navigate(`/detailspost/${id}`); // التنقل إلى صفحة تفاصيل المنشور بعد التحديث
    })
    .catch(error => {
      console.error('Error updating post:', error);
      alert('Failed to update post');
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center" style={{ color: 'darkgreen', marginTop: '100px' }}>Update Post</h1>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title:</label>
              <input
                type="text"
                id="title"
                className="form-control"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">Body:</label>
              <textarea
                id="body"
                className="form-control"
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Update Post</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePage;