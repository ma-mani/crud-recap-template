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
    <>
      <h2>{item.name}</h2>
      <p>Description: {item.description}</p>
    </>
  );
};

export default ItemDetailsPage;
