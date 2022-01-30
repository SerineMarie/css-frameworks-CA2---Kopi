import React from 'react';
import Carousel from '/CarouselContent';
import ContentTabs from '/ContentTabs';


function Home() {
    return (
        <React.Fragment>
        <h1>
            We do YAY things
        </h1>
        <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend 
            finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, 
            consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa 
            euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.
        </p>

        <Carousel/>

        <ContentTabs/>
            
        
        </React.Fragment>
    )
}

export default Home
