import ItemList from "@/components/ItemList";
import ItemForm from "@/components/ItemForm";
import useSWR from "swr";

export default function Homepage() {
  const { mutate } = useSWR("/api/items");

  async function handleAddSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const response = await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (response.ok) mutate();
  }
  return (
    <>
      <h1>Travel-Items</h1>
      <section>
        <h2>What do you need for your trip?</h2>
        <ItemForm onSubmit={handleAddSubmit}></ItemForm>

        <ItemList></ItemList>
      </section>
    </>
  );
}
