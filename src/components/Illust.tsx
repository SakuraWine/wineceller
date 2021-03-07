import { FC } from 'react';
import './Illust.css';

type Props = {
    title: string;
    url: string;
    category: string;
};

const Illust: FC<Props> = (props) => {
    const { title, url, category } = props;
    return (
        <div className="illustBox">
            <div>
                <img className="illustImg" src={url} alt={title}></img>
            </div>
            <div>
                {category}
            </div>
        </div>
    );
};

export default Illust;