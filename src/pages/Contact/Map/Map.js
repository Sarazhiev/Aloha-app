import React from 'react';

const Map = ({shop,setShop}) => {

    return (
        <div className='map__yandex'>
            <iframe
                src={`https://yandex.ru/map-widget/v1/?um=constructor%${shop}&amp;source=constructor`}
                width="100%" height="400" frameBorder="0"></iframe>

        </div>
    );
};

export default Map;