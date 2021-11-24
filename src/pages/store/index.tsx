import { useEffect, useState } from 'react';
import Isle from '../../components/isle';
import Layout from '../../layouts/main';
import { IIsle } from '../../models/isle';

const Store = () => {
  const [isles, setIsles] = useState<IIsle[]>([]);

  useEffect(() => {
    const fetchIsles = () => {
      // HTTP request to fetch isles from backend

      const isleList: IIsle[] = [
        {
          id: '1',
          name: "Editors Pick's",
          products: [
            {
              id: '1',
              name: 'Internet Famous',
              description: 'iykyk',
              thumbnailKey: '',
            },
            {
              id: '2',
              name: 'Internet Famous',
              description: 'iykyk',
              thumbnailKey: '',
            },
            {
              id: '3',
              name: 'Internet Famous',
              description: 'iykyk',
              thumbnailKey: '',
            },
          ],
        },
        {
          id: '2',
          name: 'Focus',
          description: 'Music to help you concentrate.',
          products: [
            {
              id: '1',
              name: 'Peaceful Piano',
              description: 'Relax and indulge with beautiful piano pieces',
              thumbnailKey: '',
            },
          ],
        },
        {
          id: '3',
          name: 'Mood',
          description: 'Playlists to match your mood.',
          products: [
            {
              id: '1',
              name: 'All The Feels',
              description: 'All the vibes. All the feels.',
              thumbnailKey: '',
            },
          ],
        },
      ];

      setIsles(isleList);
    };

    fetchIsles();
  }, []);

  return (
    <Layout>
      <div className='store-page'>{isles.map((isle: IIsle) => isle.products.length > 0 && <Isle data={isle} />)}</div>
    </Layout>
  );
};

export default Store;
