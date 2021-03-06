import { FC } from 'react';

type Props = {
    title: string;
    url: string;
};

const Illust: FC<Props> = (props) => {
    const { title, url } = props;
    return (
        <div className="illust">
            <img src={url} alt={title} width="300" height="300"></img>
        </div>
    );
};

export default Illust;