import React from 'react';

const Map = () => {

    return (
        <div className='map__yandex'>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Affcffe495d5d0c9c3b9c2e225f33728d7eebf3f95a45cb12a6284c3769635d4a&amp;source=constructor"
                width="100%" height="400" frameBorder="0"></iframe>
        </div>
    );
};

export default Map;