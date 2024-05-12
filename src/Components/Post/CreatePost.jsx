import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate

function AddPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate(); // استخدام useNavigate

  // دالة handleSubmit تتعامل مع إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault(); // منع السلوك الافتراضي لإعادة تحميل الصفحة
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
      // تحديد دالة catch للتعامل مع أي خطأ يظهر أثناء عملية اضافة المنشور
      .catch(error => {
        console.error('Error adding post:', error);
        alert('Failed to add post');
      });
  };

  return (
    <>
      <h1 className="text-center" style={{ color: 'rgb(39, 167, 118)', marginTop: '100px' }}>Create your new post</h1>
      <h4 className="text-center" style={{ color: 'gray' }}>Share your bright ideas with others, they may be impressed and support you</h4>
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
          <button type="submit" className="btn btn-success" style={{ backgroundColor: 'darkgreen' }}>Share <i className="bi bi-share"></i></button>
        </form>
      </div>
    </>
  );
}

export default AddPage;