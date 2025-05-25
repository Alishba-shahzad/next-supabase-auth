"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="flex-1 flex px-8 items-center gap-2 max-w-4xl w-full min-h-screen mx-auto">
      <div className="flex-1 flex flex-col p-2 gap-4 relative">
        <div className="flex">
          <Link
            href="/"
            className="py-2 px-4 rounded-md no-underline text-white bg-pink-600 dark:bg-gray-700 flex items-center group text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>{" "}
            
            Back
          </Link>
        </div>

        <form className="md:flex flex-1 w-full shadow-3xl rounded-large block">
          {/* Left Form Section */}
          <div className="flex-1 flex flex-col w-full justify-center text-foreground p-[50px] bg-white dark:bg-gray-300 md:rounded-left rounded-top">
            <div className="flex items-center mb-3">
              <h1 className="flex-1 text-2xl">Contact Us</h1>
            </div>
            <div className="flex flex-col">
              <label className="text-md py-1" htmlFor="name">
                Name
              </label>
              <input
                className="rounded-[50px] px-4 py-2 bg-background border outline-0 mb-6 text-sm h-48"
                name="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-md py-1" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-[50px] px-4 py-2 bg-background border outline-0 mb-6 text-sm h-48"
                name="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-md py-1" htmlFor="message">
                Message
              </label>
              <textarea
                className="rounded-[30px] px-4 py-2 bg-background border outline-0 mb-6 text-sm"
                rows={4}
                name="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-[50px] px-4 py-2 text-white bg-pink-500 dark:bg-slate-700 border hover:opacity-90"
            >
              Send Message
            </button>
          </div>

          {/* Right Info Section */}
          <div className="p-[50px] flex-1 text-center flex items-center flex-col justify-center p-8 bg-pink-600 dark:bg-black text-white md:rounded-right rounded-bottom">
            <h1 className="text-3xl font-semibold text-center">We’d love to hear from you!</h1>
            <p className="text-md text-center py-2">Feel free to reach out with any questions or feedback.</p>

            <div className="mt-6 space-y-2">
              <p>Email: <a href="mailto:someone@example.com" className="underline">alishnaz56@gmail.com</a></p>
              <p>Phone: +92 (031) 456-7890</p>
              <p>Address: abc123 karachi, Pakistan</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

