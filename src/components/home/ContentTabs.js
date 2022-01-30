import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function ContentTabs() {
    return (
        <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
            <Tab eventKey="First" title="First">
                <img src="../News Images/news-1.jpg" alt="image1" ></img>
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, 
                    a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
                </p>
                <div>SHARE ICON ICON</div>
            </Tab>
            <Tab eventKey="Second" title="Second">
                <img src="../News Images/news-1.jpg" alt="image1" ></img>
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, 
                    a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
                </p>
                <div>SHARE ICON ICON</div>
            </Tab>
            <Tab eventKey="Third" title="Third">
                <img src="../News Images/news-1.jpg" alt="image1" ></img>
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, 
                    a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
                </p>
                <div>SHARE ICON ICON</div>
            </Tab>
        </Tabs>
    )
}

export default ContentTabs
