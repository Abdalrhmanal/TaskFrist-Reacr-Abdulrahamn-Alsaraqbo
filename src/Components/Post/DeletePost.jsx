import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DeletePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      alert('Post deleted successfully!');
      navigate('/');
    })
    .catch(error => {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    });
  }, [id, navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Deleting Post...</h1>
    </div>
  );
}

export default DeletePage;
