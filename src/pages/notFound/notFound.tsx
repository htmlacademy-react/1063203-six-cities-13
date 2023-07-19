import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(): React.ReactElement{
  return (
    <>
      <h1>404. Page not found</h1>
      <Link to="/">Back to main page</Link>
    </>
  );
}

export default NotFound;
