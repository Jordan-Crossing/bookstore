import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

const Home: NextPage = () => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [APIResponse, setAPIResponse] = useState(null);

  useEffect(() => {
    console.log("bookTitle:", bookTitle);
    console.log("book author:", bookAuthor);
    console.log("book genre:", bookGenre);
    console.log("API Response:", APIResponse);
  }, [bookAuthor, bookGenre, bookTitle, APIResponse]);

  const readDB = async () => {
    try {
      const response = await fetch("/api/books", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      setAPIResponse(await response.json());
      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      } else {
        console.log("form submitted successfully !!!");
        //set a success banner here
      }
    } catch (error) {
      console.log("there was an error reading db", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { bookAuthor, bookGenre, bookTitle };
    try {
      const response = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (response.status !== 200) {
        console.log("something went wrong");
        //set an error banner here
      } else {
        resetForm();
        readDB();
        console.log("form submitted successfully !!!");
        //set a success banner here
      }
      //check response, if success is false, dont take them to success page
    } catch (error) {
      console.log("there was an error submitting", error);
    }
  };

  const resetForm = () => {
    setBookTitle("");
    setBookAuthor("");
    setBookGenre("");
  };

  return (
    <div className="text-center py-4 px-4">
      <h1 className="text-sky-400">BookStore</h1>
      <p>Submit your book ideas</p>
      <form
        action="#"
        method="POST"
        onSubmit={(e) => handleSubmit(e)}
        className=" grid grid-cols1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
      >
        <div>
          <label
            htmlFor="book-title"
            className=" text-sm font-medium text-grey-700"
          >
            Book Title
          </label>
          <input
            onChange={(e) => setBookTitle(e.target.value)}
            type="text"
            name="book-title"
            id="book-title"
            autoComplete="given-name"
            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border-2 rounded-md"
          ></input>
        </div>
        <div>
          <label
            htmlFor="book-author"
            className=" text-sm font-medium text-grey-700"
          >
            Book Author
          </label>
          <input
            onChange={(e) => setBookAuthor(e.target.value)}
            type="text"
            name="book-author"
            id="book-author"
            autoComplete="given-name"
            className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border-2 rounded-md"
          ></input>
        </div>
        <div>
          <div>
            <label
              htmlFor="genre"
              className=" text-sm font-medium text-grey-700"
            >
              Genre
            </label>
            <input
              onChange={(e) => setBookGenre(e.target.value)}
              type="text"
              name="genre"
              id="genre"
              autoComplete="given-name"
              className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 border-2 rounded-md"
            ></input>
          </div>
        </div>
        <div className="sm:col-span-2 ">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        {APIResponse?.map((book) => (
          <li>{book.bookTitle}</li>
        ))}
      </div>
    </div>
  );
};

export default Home;
