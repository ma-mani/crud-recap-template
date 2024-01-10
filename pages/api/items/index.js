import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "POST") {
    try {
      const items = request.body;
      await Item.create(items);

      response.status(201).json({ status: "Item created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }

  if (request.method === "GET") {
    const items = await Item.find();

    return response.status(200).json(items);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}