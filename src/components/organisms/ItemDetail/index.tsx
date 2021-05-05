import { RouteComponentProps } from 'react-router-dom';
import { id2index, itemList } from '../../../data/ItemData';
import { OrderContainer } from '../../../store/Global/Order';
import { TabBar } from '../../molecules/TabBar';

type Props = RouteComponentProps<{ id: string }>;

const options = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
];

export const ItemDetail: React.FC<Props> = ({ match }) => {
  const { onChangeItemCount, addItem } = OrderContainer.useContainer();
  const id = match.params.id;
  const index = id2index[id];
  return (
    <>
      <TabBar />
      <br />
      <img src="http://placehold.jp/24/339933/223322/300x200.png?text=商品画像" alt="mercahndise" />
      <div>
        {itemList[index].name} <br />
        {itemList[index].price}円 <br />
        {itemList[index].discription}
        <br />
        <select defaultValue="1" onChange={onChangeItemCount}>
          {options.map((option, i) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            addItem(id);
          }}
        >
          カートに入れる
        </button>
      </div>
    </>
  );
};
