'use client';
import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import UploadButton from "@/components/upload";
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";

function NavbarHeader() {
  return (
    <>

      <Navbar expand="lg" className="navbar-dark bg-dark w-100">
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home" className="text-white">Home</Nav.Link>
              <Nav.Link href="#About" className="text-white">About</Nav.Link>
              {/* <Nav.Link href="#Portfolio" className="text-white">Portfolio</Nav.Link> */}
              <Nav.Link href="#Contact" className="text-white">Contact</Nav.Link>
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
              className="transition ease-in-out px-8 py-2 text-white rounded-[50px] bg-transparent border border-white hover:text-black hover:bg-white no-underline"
            >
              Login
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="flex-1 flex flex-col max-w-4xl px-3 py-5">
        <Header />
        {/* write code to implement upload functionality for uploading csv files */}
        <div className="flex flex-col mt-5">
          <h2 className="text-accentColor font-bold">Upload your CSV</h2>
          <p>
            Upload your CSV file to get started. We will automatically create a
            table in your database with the same name as your CSV file.
          </p>
          <UploadButton />
        </div>
      </div>


      <footer className="w-full h-5 border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs bg-dark text-white">
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