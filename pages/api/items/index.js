import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const item = request.body;
      const newItem = {
        name: item.item,
        quantity: Number(item.quantity),
        description: "blue",
      };
      await Item.create(newItem);

      response.status(201).json({ status: "Item created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
    return;
  }

  if (request.method === "GET") {
    const items = await Item.find();

    response.status(200).json(items);
    return;
  }
  response.status(405).json({ message: "Method not allowed" });
}
