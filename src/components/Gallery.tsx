import { FC } from 'react';
import Illust from './Illust';

const BASE_URL: string = "https://wineceller.s3-ap-northeast-1.amazonaws.com/illusts/";

const Gallery: FC = () => {
    const illust_url1: string = BASE_URL + "illust1.png";
    const illust_url2: string = BASE_URL + "illust2.png";
    const illust_url3: string = BASE_URL + "illust3.png";

    return (
        <div>
            <Illust title="illust1" url={illust_url1} />
            <Illust title="illust2" url={illust_url2} />
            <Illust title="illust3" url={illust_url3} />
        </div>
    );
}

export default Gallery;