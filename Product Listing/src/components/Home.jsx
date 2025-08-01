import React, { useEffect, useState } from 'react'

const Home = () => {
   const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Function that updates the width state
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // When component mounts
    console.log('Component mounted');
    window.addEventListener('resize', handleResize); // Attach event listener

    // Cleanup function (runs when component unmounts)
    return () => {
      console.log('Component unmounted');
      window.removeEventListener('resize', handleResize); // Detach listener
    };
  }, []); // Empty array = run only once when mounted

  return (
    <div className="p-5 text-center text-lg">
      <p>📏 Window width is: {width}px</p>
    </div>
  );
}

export default Home