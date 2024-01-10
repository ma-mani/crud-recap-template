// pages/[id].js 

import { useRouter } from "next/router";
import useSWR from "swr";

const ItemDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: item, isLoading } = useSWR(`/api/items/${id}`);
  if (isLoading) {
    console.log(item);
    return <h1>Loading...</h1>;
  }

  if (!item) {
    return;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ color: 'green' }}>{item.name}</h2>
        <p style={{ fontSize: '1.2em', marginTop: '10px' }}>Description: {item.description}</p>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
