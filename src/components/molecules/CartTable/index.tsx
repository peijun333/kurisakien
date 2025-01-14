import styled from '@emotion/styled';
import { bp } from '~/constants/css';
import { GlobalStore } from '~/store/Global';

interface Props {
  editable: boolean;
  showTotal: boolean;
  style?: React.CSSProperties;
}

const Wrapper = styled.div({});

const Table = styled.table({
  border: 'solid 2px #aaaaaa',
  marginLeft: 'auto',
  marginRight: 'auto',
  borderSpacing: 0,
  borderCollapse: 'collapse',
});

const ItemRow = styled.tr({
  borderBottom: 'solid 1px #eee',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#c9e5d8',
  },
});

const ItemData = styled.td({
  textAlign: 'center',
  width: '20%',
  padding: '15px 0',
});

const TotalData = styled.td({
  width: '5%',
  fontSize: '24px',
  [bp.md]: {
    fontSize: '18px',
  },
});

const DeleteButton = styled.div({
  color: 'red',
});

export const CartTable: React.FC<Props> = ({ editable, showTotal, style }) => {
  const {
    carts,
    total,
    onDeleteCartItem,
    onChangeCartItemAmount,
  } = GlobalStore.useContainer().cart;

  if (!carts.length) return <div>ショッピングカートに商品は入っていません。</div>;
  return (
    <Wrapper style={style}>
      <Table>
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>小計</th>
          </tr>
          {carts.map((item, i) => {
            return (
              <ItemRow key={i}>
                <ItemData>
                  <img src={item.imagePaths[0]} width="100px" alt="itme" />
                </ItemData>
                <ItemData>{item.name}</ItemData>
                <ItemData>
                  <div>
                    {item.price}円
                    {editable ? (
                      <div>
                        <select
                          defaultValue={item.amount}
                          onChange={(event) => {
                            onChangeCartItemAmount(item.id, Number(event.target.value));
                          }}
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}個
                            </option>
                          ))}
                        </select>
                        <DeleteButton
                          onClick={() => {
                            onDeleteCartItem(item.id);
                          }}
                        >
                          削除
                        </DeleteButton>
                      </div>
                    ) : (
                      <div>{item.amount} 個</div>
                    )}
                  </div>
                </ItemData>
                <ItemData>{item.price * item.amount}円</ItemData>
              </ItemRow>
            );
          })}
          {showTotal && (
            <tr>
              <td colSpan={3}></td>
              <TotalData>合計: {total}円</TotalData>
            </tr>
          )}
        </tbody>
      </Table>
    </Wrapper>
  );
};
