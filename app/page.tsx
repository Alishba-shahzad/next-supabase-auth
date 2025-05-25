'use client';

import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import UploadButton from "@/components/upload";
import React, { Component, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./contact/page";
import { deflateSync } from "zlib";
import ThemeSwitch from "@/components/ThemeSwitch";
// import { Providers } from "@/components/ThemeToggle";
// import 'globals.css';
import RootLayout from "./layout";
// app/page.tsx




function NavbarHeader() {
  const [table, setTable] = useState([])
  const [headers, setHeaders] = useState([])
  console.log(table)
  return (
    <>
      <div className="w-100 dark:bg-gray-700">
      <div>
      <Navbar expand="lg" className="navbar-light bg-red-400 dark:bg-gray-500 w-100">
        <Container>
          <Navbar.Brand href="#home" className="dark:text-white hover:text-white">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto dark:text-white">
            <Nav.Link href="#About">
  <span className="text-gray-950 dark:text-white">About</span>

</Nav.Link>

              {/* <button className="text-gray-950 dark:text-white">Test Button</button> */}

              <Nav.Link href="#Home">
  <span className="text-gray-950 dark:text-white">Home</span>
</Nav.Link>

              {/* <Nav.Link href="\Portfol" className="text-white">Portfolio</Nav.Link>  */}
              <Nav.Link href="\contact">
  <span className="text-gray-950 dark:text-white">Contact</span>
</Nav.Link>

<Nav.Link href="#Events">
  <span className="text-gray-950 dark:text-white">Events</span>
</Nav.Link>

              <NavDropdown title="Dropdown" id="basic-nav-dropdown"><span className="text-gray-950 dark:text-white"></span>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            <Link
              href="/login"
              className=" m-2 transition ease-in-out px-8 py-1 text-white rounded-[50px] bg-transparent border border-white hover:text-black hover:bg-white no-underline"
            >
              Login
            </Link>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      
      {/* DarkMode Toggle */}
      <div className="w-full flex justify-end mt-2 pr-4">
  <ThemeSwitch />
</div>





   
      <div className="w-100 px-3 py-5">
        <Header />
        {/* write code to implement upload functionality for uploading csv files */}
        <div className="flex flex-col mt-5">
          <h2 className="text-red-400 dark:text-gray-300  font-bold">Upload your CSV</h2>
          <p className="dark:text-white">
            Upload your CSV file to get started. We will automatically create a
            table in your database with the same name as your CSV file.
          </p>
          <UploadButton setTable={setTable} setHeaders={setHeaders} />
        </div>


      {/* Display JSON Table */}
<div className="overflow-x-auto px-2 sm:px-4">
  {table && (
    <div className="mt-4 text-base text-gray-900 font-semibold dark:text-gray-200">
      📊 Rows: {table.length} | Columns: {headers.length}
    </div>
  )}



<table className="min-w-full mt-3 table-auto border-2 border-solid border-zinc-950 dark:border-white shadow-md px-10">
  <thead>
    <tr className="bg-red-400 dark:bg-gray-700">
      {headers.map((header) => (
        <th key={header} className="px-4 py-2 text-left text-white border">
          {header}
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {table?.length > 0 &&
      table.map((obj: any, index: number) => (
        <tr key={index} className="odd:bg-white dark:odd:bg-gray-100 even:bg-gray-50 dark:even:bg-gray-200">
          {headers.map((header) => (
            <td key={header} className="px-4 py-2 border">
              {obj[header]}
            </td>
          ))}
        </tr>
      ))}
  </tbody>
</table>

        </div>
       {/* Practice */}
   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        <div className="bg-slate-50 dark:bg-gray-700 shadow-md rounded-2xl p-6 transform transition-transform hover:scale-105 border border-black">
    <img className="m-2 p-2 mt-1" src="/images/background.png" alt="" />
    <h2 className="text-xl dark:text-white font-bold mb-2">Card 1</h2>
    <p className="text-slate-950 dark:text-white mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat? Est sit magnam ratione tempora temporibus hic vel nemo. Dignissimos veniam repellendus aperiam aspernatur sequi incidunt. Quibusdam alias minus nesciunt?</p>
    <button className="w-full bg-pink-500 dark:bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">Get Started</button>
  </div>
  <div className="bg-slate-50 dark:bg-gray-700 shadow-md rounded-2xl p-6 transform transition-transform hover:scale-105 border border-black">
    <img className="m-2 p-2 mt-1" src="/images/background.png" alt="" />
    <h2 className="text-xl dark:text-white font-bold mb-2">Card 1</h2>
    <p className="text-slate-950 dark:text-white mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat? Est sit magnam ratione tempora temporibus hic vel nemo. Dignissimos veniam repellendus aperiam aspernatur sequi incidunt. Quibusdam alias minus nesciunt?</p>
    <button className="w-full bg-pink-500 dark:bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">Get Started</button>
  </div>
  <div className="bg-slate-50 dark:bg-gray-700 shadow-md rounded-2xl p-6 transform transition-transform hover:scale-105 border border-black">
    <img className="m-2 p-2 mt-1" src="/images/background.png" alt="" />
    <h2 className="text-xl dark:text-white font-bold mb-2">Card 1</h2>
    <p className="text-slate-950 dark:text-white mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat? Est sit magnam ratione tempora temporibus hic vel nemo. Dignissimos veniam repellendus aperiam aspernatur sequi incidunt. Quibusdam alias minus nesciunt?</p>
    <button className="w-full bg-pink-500 dark:bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">Get Started</button>
  </div>
  <div className="bg-slate-50 dark:bg-gray-700 shadow-md rounded-2xl p-6 transform transition-transform hover:scale-105 border border-black">
    <img className="m-2 p-2 mt-1" src="/images/background.png" alt="" />
    <h2 className="text-xl dark:text-white font-bold mb-2">Card 1</h2>
    <p className="text-slate-950 dark:text-white mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat? Est sit magnam ratione tempora temporibus hic vel nemo. Dignissimos veniam repellendus aperiam aspernatur sequi incidunt. Quibusdam alias minus nesciunt?</p>
    <button className="w-full bg-pink-500 dark:bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">Get Started</button>
  </div>
  <div className="bg-slate-50 dark:bg-gray-700 shadow-md rounded-2xl p-6 transform transition-transform hover:scale-105 border border-black">
    <img className="m-2 p-2 mt-1" src="/images/background.png" alt="" />
    <h2 className="text-xl dark:text-white font-bold mb-2">Card 1</h2>
    <p className="text-slate-950 dark:text-white mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat? Est sit magnam ratione tempora temporibus hic vel nemo. Dignissimos veniam repellendus aperiam aspernatur sequi incidunt. Quibusdam alias minus nesciunt?</p>
    <button className="w-full bg-pink-500 dark:bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">Get Started</button>
  </div>
  <div className="bg-slate-50 dark:bg-gray-700 shadow-md rounded-2xl p-6 transform transition-transform hover:scale-105 border border-black">
    <img className="m-2 p-2 mt-1" src="/images/background.png" alt="" />
    <h2 className="text-xl dark:text-white font-bold mb-2">Card 1</h2>
    <p className="text-slate-950 dark:text-white mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, fugiat? Est sit magnam ratione tempora temporibus hic vel nemo. Dignissimos veniam repellendus aperiam aspernatur sequi incidunt. Quibusdam alias minus nesciunt?</p>
    <button className="w-full bg-pink-500 dark:bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800">Get Started</button>
  </div>
</div>
        {/* Practice Bento */}
<div>
  <div id="bento-grid" className="flex flex-col gap-6 px-6 py-12 max-w-7xl mt-16 mx-auto lg:px-8 lg:mt-32">
          <h2 className="text-5xl sm:font-semibold mb-14 dark:text-white">ToDesktop handle the details</h2>
          <div id="grid-container" className="flex flex-col gap-6 lg:grid lg:grid-cols-3" style={{ gridAutoRows:"96px" }}>

              <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-pink-50 dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                  <h2 className="text-2xl">Native Notification</h2>
                  <img src="./images/backgrounds.png" alt="" />
                </div>
              </div>
              <div className="row-start-1 row-end-4 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-pink-50 dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                  <h2 className="text-2xl">Native Notification</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem officia deleniti facere, eligendi impedit laboriosam architecto autem quia maiores minus nulla voluptatem ducimu..</p>
                  <img src="./images/backgrounds.png" alt="" />
                </div>
              </div>
              <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-pink-50 dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                  <h2 className="text-2xl">Native Notification</h2>
                  <img src="./images/backgrounds.png" alt="" />
                </div>
              </div>
              <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-pink-50 dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                  <h2 className="text-2xl">Native Notification</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam odio nostrum non, iusto cumque optio.</p>
                  <img src="./images/backgrounds.png" alt="" />
                </div>
              </div>
              <div className="row-start-4 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-pink-50 dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                  <h2 className="text-2xl ">Native Notification</h2>
                  <img src="./images/backgrounds.png" alt="" />
                </div>
              </div>
              <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-pink-50 dark:bg-neutral-300 rounded-2xl w-full h-full p-6 flex flex-col gap-6 items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                  <h2 className="text-2xl">Native Notification</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam quisquam iste quos enim voluptates, tenetur eum! Possimus officiis quasi quae.</p>
                  <img src="./images/backgrounds.png" alt="" />
                </div>
              </div>
              

          </div>
  </div>
</div>
 


        <div className="bg-pink-50 dark:bg-black rounded-lg px-6 py-8 ring-1 ring-slate-900 shadow-xl ">
          <span className="inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-cyan-500 hover:stroke-cyan-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>

            {/* <svg className="fill-blue-500 ..."> */}

          </span>
          <h3 className="font-medium text-slate-900 dark:text-white mt-5 text-base tracking-tight ">Write the Codes</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm">The zero Gravity Pen can be used to write in any orientation,including upside-down,It even works in outer space</p>
        </div>
      </div>

      <footer className="w-full h-5 border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs bg-pink-50 dark:bg-gray-900 text-slate-950 dark:text-white ">
        <p >
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold pt-1 hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
      </div>
              
    </>

  );
}

export default NavbarHeader;