import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(): React.ReactElement{
  return (
    <div className="container">
      <h1>404. Page not found</h1>
      <Link to="/">Back to main page</Link>
    </div>
  );
}

export default NotFound;
