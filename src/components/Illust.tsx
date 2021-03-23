import { FC } from 'react';
import './Illust.css';

const BASE_URL = 'https://wineceller.s3-ap-northeast-1.amazonaws.com/illusts/';

type Props = {
    title: string,
    filename: string,
    category: string,
    // post_date: Date,
    // completion_date: Date,
    // production_period: string,
    // caption: string
};

const Illust: FC<Props> = (props) => {
  const { title, filename, category } = props;
  const url: string = BASE_URL + filename;

  return (
    <div className="illustBox">
      <div>
        <img className="illustImg" src={url} alt={title} />
      </div>
      <div>
        {category}
      </div>
    </div>
  );
};

export default Illust;
