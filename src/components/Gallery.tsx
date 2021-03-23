import { FC, useEffect, useState } from 'react';
import './Gallery.css';
import axios from 'axios';
import Illust from './Illust';

const Gallery: FC = () => {
  const [infos, setInfos] = useState();

  useEffect((): void => {
    axios.get('http://localhost:3001/api/infos/get/all')
      .then((res) => {
        setInfos(res.data);
        console.log(infos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const illustUrl1 = 'illust1.png';
  const illustUrl2 = 'illust2.png';
  const illustUrl3 = 'illust3.png';

  return (
    <div className="gallery">
      <div className="galleryRow">
        <Illust title="illust1" filename={illustUrl1} category="original" />
        <Illust title="illust2" filename={illustUrl2} category="fanart" />
        <Illust title="illust3" filename={illustUrl3} category="fanart" />
      </div>
      <div className="galleryRow">
        <Illust title="illust2" filename={illustUrl2} category="fanart" />
        <Illust title="illust3" filename={illustUrl3} category="fanart" />
        <Illust title="illust1" filename={illustUrl1} category="original" />
      </div>
    </div>
  );
};

export default Gallery;
