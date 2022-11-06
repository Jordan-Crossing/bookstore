// First we define and instantiate our Prisma client.
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// We create a function called Handler which checks that the request method is POST,
// then calls the function which actually writes to our database,
// createInquiry.If the method is not POST,
// it sends back a response with a status code of 405 and
// a message letting the user know that this operation is not allowed.
export default async function handler(req, res) {
  if (req.method === "POST") {
    return await addBook(req, res);
  } else if (req.method === "GET") {
    return await readBooks(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readBooks(req, res) {
  try {
    const allBooks = await prisma.bookSuggestion.findMany();
    return res.status(200).json(allBooks);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from database", success: false });
  }
}

// We define an asynchronous function, createInquiry,
// which will take the data in the request body and send it to our database.
async function addBook(req, res) {
  const body = req.body;
  // Wrapped in a try/catch block, we define a new variable newEntry and
  // create a new entry in our Inquiry table.
  try {
    const newEntry = await prisma.bookSuggestion.create({
      data: {
        bookTitle: body.bookTitle,
        bookAuthor: body.bookAuthor,
        bookGenre: body.bookGenre,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating question", success: false });
  }
}

// async function delBook(req, res) {
//   const body = req.body;
//   try {
//     const deleteEntry = await prisma.bookSuggestion.delete({
//       where:
//     })

//     return res.status(200).json(newEntry, { success: true });
//   } catch (error) {
//     console.error("Request error", error);
//     res.status(500).json({ error: "Error deleting question", success: false });
//   }
// }
