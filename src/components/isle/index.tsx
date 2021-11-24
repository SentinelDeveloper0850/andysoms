import { IIsle } from '../../models/isle';
import { IProduct } from '../../models/product';
import Product from '../product';
import './styles.scss';

interface IProps {
  data: IIsle;
}

const Isle = ({ data }: IProps) => {
  return (
    <div className='isle'>
      <h2>{data.name}</h2>
      {data.description && <p>{data.description}</p>}
      <div className="row">
        {data.products.map((product: IProduct) => product && <Product data={product} />)}
      </div>
    </div>
  );
};

export default Isle;
