import { IProduct } from '../../models/product';
import './styles.scss';

interface IProps {
    data: IProduct;
}

const Product = ({ data }: IProps) => {
    return (
      <div className='product'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png' alt={data.name} />
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
    );
}

export default Product;