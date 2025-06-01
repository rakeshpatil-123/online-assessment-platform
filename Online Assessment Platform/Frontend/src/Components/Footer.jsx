import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="container w-full bg-zinc-800 text-zinc-100">
        <div className="flex mx-auto w-3/5 justify-around">
          <div className="mt-[10vh]">
            <h1 className="font-semibold hover:text-zinc-400 ease-linear">
              Coding
            </h1>
            <div className="flex flex-col mt-10 gap-5 text-sm">
              <Link className="hover:text-zinc-400 ease-linear" to="/">
                Tutorials
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="admin">
                Challenges
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="about">
                Code Editor
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="contact">
                Practice
              </Link>
            </div>
          </div>
          <div className="mt-[10vh]">
            <h1 className="font-semibold hover:text-zinc-400 ease-linear">
              Platform
            </h1>
            <div className="flex flex-col mt-10 gap-5 text-sm">
              <Link className="hover:text-zinc-400 ease-linear" to="/">
                Dashboard
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="admin">
                Admin Panel
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="about">
                Features
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="contact">
                Support
              </Link>
            </div>
          </div>
          <div className="mt-[10vh]">
            <h1 className="font-semibold hover:text-zinc-400 ease-linear">
              Product
            </h1>
            <div className="flex flex-col mt-10 gap-5 text-sm">
              <Link className="hover:text-zinc-400 ease-linear" to="/">
                Overview
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="admin">
                Pricing
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="about">
                Roadmap
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="contact">
                Updates
              </Link>
            </div>
          </div>
          <div className="mt-[10vh]">
            <h1 className="font-semibold hover:text-zinc-400 ease-linear">
              Community
            </h1>
            <div className="flex flex-col mt-10 gap-5 text-sm">
              <Link className="hover:text-zinc-400 ease-linear" to="/">
                Blog
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="admin">
                Forums
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="about">
                Events
              </Link>
              <Link className="hover:text-zinc-400 ease-linear" to="contact">
                Join Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex pr-20 flex-row items-center justify-center pb-10 gap-10 text-sm">
            <a
              href="https://www.linkedin.com/in/rakeshpatil123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/rakeshpatil-123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={30} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
