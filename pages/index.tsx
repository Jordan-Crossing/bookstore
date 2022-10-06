import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="text-center py-4 px-4">
      <h1 className="text-sky-400">BookStore</h1>
      <p>Submit your book ideas</p>
      <form
        action="#"
        method="POST"
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
    </div>
  );
};

export default Home;
