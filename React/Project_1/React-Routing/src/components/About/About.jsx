import React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <div>
        <h1>This is the About Page</h1>
        <div>
          <h1>
            Want to know more about{' '}
            <Link to="company" className="text-blue-600 visited:text-purple-600">
              Company
            </Link>
          </h1>
        </div>
        {/* Add Outlet here to render child routes */}
        <Outlet />
      </div>
    </>
  );
}

export default About;
