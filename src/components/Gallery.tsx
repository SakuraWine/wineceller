import { FC } from 'react';
import Illust from './Illust';
import './Gallery.css';

const BASE_URL: string = "https://wineceller.s3-ap-northeast-1.amazonaws.com/illusts/";

const Gallery: FC = () => {
    const illust_url1: string = BASE_URL + "illust1.png";
    const illust_url2: string = BASE_URL + "illust2.png";
    const illust_url3: string = BASE_URL + "illust3.png";

    return (
        <div className="gallery">
            <div className="galleryRow">
                <Illust title="illust1" url={illust_url1} category="original" />
                <Illust title="illust2" url={illust_url2} category="fanart" />
                <Illust title="illust3" url={illust_url3} category="fanart" />
            </div>
            <div className="galleryRow">
                <Illust title="illust2" url={illust_url2} category="fanart" />
                <Illust title="illust3" url={illust_url3} category="fanart" />
                <Illust title="illust1" url={illust_url1} category="original" />
            </div>
        </div>
    );
}

export default Gallery;