import React, { useRef, useEffect, useState } from 'react';
import Card from './Card';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ContentSections = () => {
  const sections = [
    {
      title: 'Browse genres',
      type: 'genre',
      items: [
        "Romance", "Fanfiction", "Adventure", "Originals", "Werewolf", "Thriller",
        "Fantasy", "Short Story", "Teen Fiction", "Werewolf", "New Adult", "Fantasy",
        "Short Story", "Teen Fiction",
      ],
    },
    {
      title: 'Continue reading',
      type: 'story',
      items: [
        { title: "Psychology of Money", image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "How innovation works", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Just Shut up and do it!", image: "https://images.unsplash.com/photo-1560179305-0daa27c817c4?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Love on the brain", image: "https://images.unsplash.com/photo-1711185897885-a0502b3f57c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Stephen King", image: "https://images.unsplash.com/photo-1563870958617-9c5a98573e9a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Thursday Murder Club", image: "https://images.unsplash.com/photo-1734082134123-2e0eec840768?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Chroncelers of Narnia", image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1290&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Dracula", image: "https://images.unsplash.com/photo-1698195811212-2cdb4a0232f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Twisted Love", image: "https://images.unsplash.com/photo-1711185901036-f7fd98e50bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Sun and her flowers", image: "https://images.unsplash.com/photo-1599948280254-dd59684884df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      ],
    },
    {
      title: 'More stories for you',
      type: 'story',
      items: [
        { title: "Psychology of Money", image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "How innovation works", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Just Shut up and do it!", image: "https://images.unsplash.com/photo-1560179305-0daa27c817c4?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Love on the brain", image: "https://images.unsplash.com/photo-1711185897885-a0502b3f57c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Stephen King", image: "https://images.unsplash.com/photo-1563870958617-9c5a98573e9a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Thursday Murder Club", image: "https://images.unsplash.com/photo-1734082134123-2e0eec840768?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Chroncelers of Narnia", image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1290&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Dracula", image: "https://images.unsplash.com/photo-1698195811212-2cdb4a0232f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Twisted Love", image: "https://images.unsplash.com/photo-1711185901036-f7fd98e50bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Sun and her flowers", image: "https://images.unsplash.com/photo-1599948280254-dd59684884df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Power of Habit", image: "https://images.unsplash.com/photo-1605444610001-15c877be632a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Fourth Wing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK0r6cLIc1HEmwQt_96vtSdlV3hZ_b84KJ1w0gP3pRHStEZF5nnJSBFN6Fg0_PHpyoko&usqp=CAU" },
        { title: "You and Me", image: "https://marketplace.canva.com/EAFjJ3RcwLg/1/0/1003w/canva-blue-black-white-modern-concept-story-about-you-and-me-book-cover-5wv9XTNx5Vc.jpg" },
        { title: "Moonlight", image: "https://i.pinimg.com/736x/2d/dc/98/2ddc9895ebd112d64d3e467912d7682e.jpg" },
      ],
    },
    {
      title: 'Your stories',
      type: 'story',
      items: [
        { title: "The Power of Habit", image: "https://images.unsplash.com/photo-1605444610001-15c877be632a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Fourth Wing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK0r6cLIc1HEmwQt_96vtSdlV3hZ_b84KJ1w0gP3pRHStEZF5nnJSBFN6Fg0_PHpyoko&usqp=CAU" },
        { title: "You and Me", image: "https://marketplace.canva.com/EAFjJ3RcwLg/1/0/1003w/canva-blue-black-white-modern-concept-story-about-you-and-me-book-cover-5wv9XTNx5Vc.jpg" },
        { title: "Moonlight", image: "https://i.pinimg.com/736x/2d/dc/98/2ddc9895ebd112d64d3e467912d7682e.jpg" },
        { title: "Guild of the Bright Sun", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Yb5E_SZNeRrbODdCRJkARZXjr13LmdgipDN3UyplG1y762zUF2n0ttSuYpmbYfM5xDw&usqp=CAU" },
        { title: "Sculpture", image: "https://images.unsplash.com/photo-1619164025214-db3994b352cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "All the letters I Should have Sent", image: "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Story of My Life", image: "https://images.unsplash.com/photo-1620034949521-14a59e7f9ece?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Past is Rising ", image: "https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" },
        { title: "The Madion War Trilogy", image: "https://blog-cdn.reedsy.com/directories/gallery/133/large_ed78cc1150b3f402fe8ad6920752ada9.jpg" },
        { title: "The Key of the Future ", image: "https://images-platform.99static.com//sXsCTLBCpJfXuPxmBYNXePKeuco=/1005x0:3630x2625/fit-in/500x500/projects-files/63/6346/634659/d90972e2-2213-4217-adf3-e6ae63348b1a.jpg" },
        { title: "The Alpha's Mate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIdaPAgUXB4L8p6aPCB_RYcsnJF43c7rEJA&s" },
        { title: "Hell", image: "https://miblart.com/wp-content/uploads/2021/01/lV_uabnM-683x1024.jpg" },
      ],
    },
    {
      title: 'Top picks for you',
      type: 'story',
      items: [
        { title: "Psychology of Money", image: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "How innovation works", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Just Shut up and do it!", image: "https://images.unsplash.com/photo-1560179305-0daa27c817c4?q=80&w=2088&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Love on the brain", image: "https://images.unsplash.com/photo-1711185897885-a0502b3f57c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Stephen King", image: "https://images.unsplash.com/photo-1563870958617-9c5a98573e9a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Thursday Murder Club", image: "https://images.unsplash.com/photo-1734082134123-2e0eec840768?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Chroncelers of Narnia", image: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1290&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Dracula", image: "https://images.unsplash.com/photo-1698195811212-2cdb4a0232f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Twisted Love", image: "https://images.unsplash.com/photo-1711185901036-f7fd98e50bb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Sun and her flowers", image: "https://images.unsplash.com/photo-1599948280254-dd59684884df?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Power of Habit", image: "https://images.unsplash.com/photo-1605444610001-15c877be632a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Fourth Wing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK0r6cLIc1HEmwQt_96vtSdlV3hZ_b84KJ1w0gP3pRHStEZF5nnJSBFN6Fg0_PHpyoko&usqp=CAU" },
        { title: "You and Me", image: "https://marketplace.canva.com/EAFjJ3RcwLg/1/0/1003w/canva-blue-black-white-modern-concept-story-about-you-and-me-book-cover-5wv9XTNx5Vc.jpg" },
        { title: "Moonlight", image: "https://i.pinimg.com/736x/2d/dc/98/2ddc9895ebd112d64d3e467912d7682e.jpg" },
      ],
    },
    {
      title: 'Top 10 in India',
      type: 'story',
      items: [
        { title: "Sculpture", image: "https://images.unsplash.com/photo-1619164025214-db3994b352cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "All the letters I Should have Sent", image: "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Story of My Life", image: "https://images.unsplash.com/photo-1620034949521-14a59e7f9ece?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Past is Rising", image: "https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" },
        { title: "The Madion War Trilogy", image: "https://blog-cdn.reedsy.com/directories/gallery/133/large_ed78cc1150b3f402fe8ad6920752ada9.jpg" },
        { title: "The Key of the Future", image: "https://images-platform.99static.com//sXsCTLBCpJfXuPxmBYNXePKeuco=/1005x0:3630x2625/fit-in/500x500/projects-files/63/6346/634659/d90972e2-2213-4217-adf3-e6ae63348b1a.jpg" },
        { title: "The Alpha's Mate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIdaPAgUXB4L8p6aPCB_RYcsnJF43c7rEJA&s" },
        { title: "Hell", image: "https://miblart.com/wp-content/uploads/2021/01/lV_uabnM-683x1024.jpg" },
        { title: "Girl Made of Gold", image: "https://thebooksatchel.com/wp-content/uploads/2021/01/girl-made-of-gold_delicious-book-covers-2020.jpg" },
        { title: "HEARTLESS", image: "https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" },
      ],
    },
    {
      title: 'Recommended for you',
      type: 'story',
      items: [
        { title: "The Power of Habit", image: "https://images.unsplash.com/photo-1605444610001-15c877be632a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "Fourth Wing", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBK0r6cLIc1HEmwQt_96vtSdlV3hZ_b84KJ1w0gP3pRHStEZF5nnJSBFN6Fg0_PHpyoko&usqp=CAU" },
        { title: "You and Me", image: "https://marketplace.canva.com/EAFjJ3RcwLg/1/0/1003w/canva-blue-black-white-modern-concept-story-about-you-and-me-book-cover-5wv9XTNx5Vc.jpg" },
        { title: "Moonlight", image: "https://i.pinimg.com/736x/2d/dc/98/2ddc9895ebd112d64d3e467912d7682e.jpg" },
        { title: "Guild of the Bright Sun", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_Yb5E_SZNeRrbODdCRJkARZXjr13LmdgipDN3UyplG1y762zUF2n0ttSuYpmbYfM5xDw&usqp=CAU" },
        { title: "Sculpture", image: "https://images.unsplash.com/photo-1619164025214-db3994b352cf?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "All the letters I Should have Sent", image: "https://images.unsplash.com/photo-1515098506762-79e1384e9d8e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Story of My Life", image: "https://images.unsplash.com/photo-1620034949521-14a59e7f9ece?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { title: "The Past is Rising", image: "https://i.pinimg.com/564x/f7/c8/12/f7c812c9b0296cd9f119e33a06d9a256.jpg" },
        { title: "The Madion War Trilogy", image: "https://blog-cdn.reedsy.com/directories/gallery/133/large_ed78cc1150b3f402fe8ad6920752ada9.jpg" },
        { title: "The Key of the Future", image: "https://images-platform.99static.com//sXsCTLBCpJfXuPxmBYNXePKeuco=/1005x0:3630x2625/fit-in/500x500/projects-files/63/6346/634659/d90972e2-2213-4217-adf3-e6ae63348b1a.jpg" },
        { title: "The Alpha's Mate", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrIdaPAgUXB4L8p6aPCB_RYcsnJF43c7rEJA&s" },
        { title: "Hell", image: "https://miblart.com/wp-content/uploads/2021/01/lV_uabnM-683x1024.jpg" },
      ],
    },
  ];

  return (
    <div className="space-y-12 py-6">
      {sections.map((section, index) => {
        const sectionRef = useRef(null);
        const [showButtons, setShowButtons] = useState(false);

        useEffect(() => {
          const checkOverflow = () => {
            if (sectionRef.current) {
              const { scrollWidth, clientWidth } = sectionRef.current;
              setShowButtons(scrollWidth > clientWidth);
            }
          };

          checkOverflow();
          window.addEventListener('resize', checkOverflow);
          return () => window.removeEventListener('resize', checkOverflow);
        }, []);

        const scroll = (direction) => {
          if (sectionRef.current) {
            const scrollAmount = 300; // Adjust this value to control scroll distance
            sectionRef.current.scrollBy({
              left: direction === 'left' ? -scrollAmount : scrollAmount,
              behavior: 'smooth',
            });
          }
        };

        return (
          <section key={index} className="py-6 relative">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            {showButtons && (
              <button
              className="left-arrow absolute left-0 top-1/2 transform -translate-y-1/2 
                         bg-gray-100 p-2 rounded-full hover:bg-gray-300 
                         z-10 flex items-center justify-center"
              onClick={() => scroll('left')}
            >
              <ArrowBackIosIcon className="text-gray-700" />
            </button>
            
            )}
            <div ref={sectionRef} className="flex gap-4 pb-4 overflow-x-hidden">
              {section.items.map((item, idx) => (
                <Card
                  key={idx}
                  type={section.type}
                  title={item.title || item}
                  image={item.image}
                />
              ))}
            </div>
            {showButtons && (
              <button
                className="right-arrow absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full hover:bg-gray-300 z-10"
                onClick={() => scroll('right')}
              >
                <ArrowForwardIosIcon/>
              </button>
            )}
          </section>
        );
      })}
    </div>
  );
};

export default ContentSections;