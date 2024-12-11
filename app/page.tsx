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
import { Card } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./contact/page";


function NavbarHeader() {
  const [table, setTable] = useState([])
  const [headers, setHeaders] = useState([])
  console.log(table)
  return (
    <>

      <Navbar expand="lg" className="navbar-light bg-customFormBg w-100">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#About" className="text-white">About</Nav.Link>
              {/* <Nav.Link href="#Portfolio" className="text-white">Portfolio</Nav.Link> */}
              {/* <Nav.Link href="/Contact" className="text-white">Contact</Nav.Link> */}
              <Link
              href="/contact"
              className="px-3 py-0 font text-white no-underline"
            >
              Contact
            </Link>

              <Nav.Link href="#News" className="text-white">News</Nav.Link>
              <Nav.Link href="#Events" className="text-white">Events</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="text-white">
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
      <div className="w-100 px-3 py-5">
        <Header />
        {/* write code to implement upload functionality for uploading csv files */}
        <div className="flex flex-col mt-5">
          <h2 className="text-accentColor font-bold">Upload your CSV</h2>
          <p>
            Upload your CSV file to get started. We will automatically create a
            table in your database with the same name as your CSV file.
          </p>
          <UploadButton setTable={setTable} setHeaders={setHeaders} />
        </div>
        {/* <div className="mt-4 p-6 max-w-sm mx-auto bg-customFormBg flex items-center rounded-large shadow-lg gap-x-4">
          {/* <div class= "shrink-0">
            <img src="" alt="" />
          </div> */}
        {/* <div>
            <div className="text-lg font-medium text-black">ChitChat</div>
            <p className= "text-white">You have a new msg</p>
          </div>

        </div> */}
        <div className="overflow-x-auto">
          <table className="min-w-full mt-3 table-auto border-2  border-solid border-black shadow-md px-10">

            <thead>
              <tr className="bg-customFormBg ">
                {/* <td>name</td>
              <td>transaction</td> */
                }
                {headers.map((header) => (<th key={header} className="px-4 py-2 text-left text-white border " >{header}</th>))}
              </tr>
            </thead>
            <tbody>
              {table?.length > 0 && table?.map((obj: any, index: number) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  {headers.map((header) => (<td key={header} className="px-4 py-2 border">{obj[header]}</td>))}

                </tr>
              ))}
            </tbody>
          </table>
        </div>
       

        <div className="p-6 m-3 max-w-md mx-auto flex rounded-large border-black overflow-hidden md:max-w-2xl shadow-md border-2 ">
          <div className="md:flex">
            <div className=" md:flex">
              <img className="rounded-md md:h-full md:w-48 max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 lg:w-full h-full flex border-black" src="/images/ecommerce.jpg" alt="" />
            </div>
            <div className="m-2 pt-2  ">
              <div className="block leading-tight text-black hover:underline text-lg font-medium ">Company card</div>
              <p className="pt-3 text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi quas consequuntur ducimus quia doloribus maiores dolorem pariatur hic, perspiciatis enim beatae dolore quibusdam eaque explicabo unde quisquam doloremque? Quisquam, optio?</p>
            </div>
          </div>

        </div>
        <div className="bg-white rounded-lg dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900 shadow-xl ">
          <span className="inline-flex"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-cyan-500 hover:stroke-cyan-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>

            {/* <svg className="fill-blue-500 ..."> */}

          </span>
          <h3 className="font-medium text-slate-900 dark:text-white mt-5 text-base tracking-tight ">Write the Codes</h3>
          <p className="text-slate-500 dark:text-slate-400 mt-3 text-sm">The zero Gravity Pen can be used to write in any orientation,including upside-down,It even works in outer space</p>
        </div>
      </div>

      <footer className="w-full h-5 border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs bg-white text-black">
        <p>
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

    </>

  );
}

export default NavbarHeader;

