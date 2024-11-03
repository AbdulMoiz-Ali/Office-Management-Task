import React from 'react';
import Navbar from './components/navbar/topnav';
import Sidebar from './components/navbar/sidenav';

function Layout({ children }) {
  return (
    <div className="flex h-screen">
  
      <div className="w-66 h-screen overflow-y-auto">
        <Sidebar />
      </div>


      <div className="flex flex-col flex-1">
       
        <div className="h-16">
          <Navbar />
        </div>

    
        <div className="flex-1 overflow-y-auto p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
