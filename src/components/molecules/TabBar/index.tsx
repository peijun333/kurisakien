import Link from 'next/link';
import { Tab } from '~/components/atoms/Tab';
import { ShoppingCart } from '~/components/Icons/ShoppingCart';
import { routing } from '~/constants/routing';
import { useRouter } from 'next/router';

export const TabBar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <>
      <Link href={routing.root} passHref>
        <Tab hasOpened={pathname === routing.root}>ホーム</Tab>
      </Link>
      <Link href={routing.items.root} passHref>
        <Tab
          hasOpened={
            pathname === routing.items.root ||
            pathname === routing.items.id ||
            pathname === routing.items.gifts.id
          }
        >
          注文
        </Tab>
      </Link>
      <Link href={routing.cart.root} passHref>
        <Tab hasOpened={pathname === routing.cart.root}>
          <ShoppingCart width={18} height={18} />
        </Tab>
      </Link>
    </>
  );
};
