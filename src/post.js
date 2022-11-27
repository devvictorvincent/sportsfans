import React from 'react';
import './style.css';

export default function Post({post, sum, thumb}) {
  return (
    <div class="card">
      <img class="post-thumb" src={thumb} />
      <h3>{post.title}</h3>
      <p>{sum} </p>
      <button> Reed More  </button>
    </div>
  );
}