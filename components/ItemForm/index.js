export default function ItemForm({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="item">Item:</label>
      <input type="text" id="item" name="item" />
      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" />
      <button type="submit">Submit</button>
    </form>
  );
}
