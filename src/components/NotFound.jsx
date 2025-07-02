// src/pages/NotFound.jsx (or similar path)
import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
