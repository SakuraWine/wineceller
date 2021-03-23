import express from 'express';
import cors from 'cors';

const app: express.Express = express();
app.use(cors({ origin: true }));
const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port.toString()}.`));

type IllustInfo = {
    id: string,
    title: string,
    filename: string,
    category: string,
    postDate: Date,
    completionDate: Date,
    productionPeriod: string,
    caption: string
};

app.get('/api/hello', (req: express.Request, res: express.Response) => {
  res.send('hello');
});

const dummyInfos: IllustInfo[] = [
  {
    id: 'id1', title: 'title1', filename: 'illust1.png', category: 'original', postDate: new Date(), completionDate: new Date(), productionPeriod: '12時間', caption: '',
  },
  {
    id: 'id2', title: 'title2', filename: 'illust2.png', category: 'fanart', postDate: new Date(), completionDate: new Date(), productionPeriod: '12時間', caption: '',
  },
  {
    id: 'id3', title: 'title3', filename: 'illust3.png', category: 'fanart', postDate: new Date(), completionDate: new Date(), productionPeriod: '12時間', caption: '',
  },
  {
    id: 'id4', title: 'title1', filename: 'illust1.png', category: 'original', postDate: new Date(), completionDate: new Date(), productionPeriod: '12時間', caption: '',
  },
  {
    id: 'id5', title: 'title2', filename: 'illust2.png', category: 'fanart', postDate: new Date(), completionDate: new Date(), productionPeriod: '12時間', caption: '',
  },
  {
    id: 'id6', title: 'title3', filename: 'illust3.png', category: 'fanart', postDate: new Date(), completionDate: new Date(), productionPeriod: '12時間', caption: '',
  },
];
app.get('/api/infos/get/all', (req: express.Request, res: express.Response) => {
  res.json(dummyInfos);
});

app.get('/api/infos/post', (req: express.Request, res: express.Response) => {
  res.json(dummyInfos);
});
