import React, { useEffect } from 'react'

const Hero = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('This will run after 1 second');
        }, 1000);
        return () => {
            clearTimeout(timer);
            console.log('Cleanup');
        };
    }, []);
    

  return (
    <div>Hero</div>
  )
}

export default Hero