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
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item) => (
          <li key={item._id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc' }}>
            <Link href={`/${item._id}`}>
              <span style={{ marginRight: '10px', fontWeight: 'bold' }}>{item.quantity}</span>
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ItemList;
