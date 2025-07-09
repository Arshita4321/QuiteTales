import React from 'react';
import Header from '../components/Header';
import ContentSections from '../components/ContentSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
        <Header/>
      <main className="container mx-auto px-4 py-6">
        <ContentSections/>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;