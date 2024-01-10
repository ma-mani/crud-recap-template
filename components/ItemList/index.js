import useSWR from "swr";
import Link from "next/link";

const ItemList = () => {
  const { data: items, isLoading } = useSWR("/api/items");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!items) {
    return;
  }
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <Link href={`/${item._id}`}>
              <span>{item.quantity}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
