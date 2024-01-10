import ItemList from "@/components/ItemList";

export default function Homepage() {
  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Travel-Items</h1>
      <section style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5em', marginBottom: '20px' }}>
          What do you need for your trip?
        </h2>
        <ItemList />
      </section>
    </>
  );
}


