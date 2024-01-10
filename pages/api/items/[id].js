import dbConnect from "@/db/connect";
import Item from "@/db/models/Item";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    Item.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: `Item ${id} updated!` });
  }

  if (request.method === "DELETE") {
    await Item.findByIdAndDelete(id);
    response.status(200).json({ status: `Item ${id} successfully deleted.` });
  }

  if (request.method === "GET") {
    const item = await Item.findById(id);

    return response.status(200).json(item);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
