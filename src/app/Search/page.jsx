'use client';

import dynamic from 'next/dynamic'; // Import dynamic for CSR-only rendering
import React from 'react';
import MainHeader from '../ui/MainHeader';
// import AnnounsmentBar from '../ui/AnnounsmentBar';


// Dynamically import SearchPageContent with ssr: false
const SearchPageContent = dynamic(() => import('../componets/SearchComponent'), { ssr: false });

const SearchPage = () => {
  return (
    <>
      <head>
        <title>Search Programms| BIMT Campus</title>
        <meta
          name="description"
          content="BIMT Campus offers comprehensive Master’s degree programs designed to deepen your expertise and advance your career. With a focus on innovation and research, our programs empower students to become leaders in their chosen fields."
        />
      </head>
      <MainHeader />
      {/* <AnnounsmentBar /> */}
      <SearchPageContent />
    </>
  );
};

export default SearchPage;
