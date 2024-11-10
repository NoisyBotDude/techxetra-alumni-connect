'use client';
import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@mui/material";
import { RiMenu3Line } from "react-icons/ri";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navbarContent = [
  { label: "Home", path: "/" },
  { label: "Users", path: "/users" },
  { label: "Events", path: "/events" },
  { label: "Announcement", path: "/announcements" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Fetch user details based on userId from localStorage
  useEffect(() => {
    const userId = localStorage.getItem('user_id');
    if (userId) {
      fetchUserDetails(userId);
    }
  }, []);

  // Function to fetch user details from the server
  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        console.error("Failed to fetch user details");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <>
      {user && (
        <header className="bg-gray-800 text-white fixed top-0 left-0 right-0 z-50" style={{ position: "sticky"}}>
          <nav className="mx-auto flex w-full md:max-w-[80%] items-center justify-between px-6 py-3 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="flex items-center justify-center">
                <img className="w-auto h-12" src="/techxetra-text.svg" alt="Techxetra" />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <Button
                type="button"
                variant="outlined"
                onClick={() => setMobileMenuOpen(true)}
              >
                <RiMenu3Line className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="hidden text-gray-600 lg:flex lg:gap-x-12">
              {navbarContent.map((data, index) => (
                <Link key={index} href={data.path} className="text-md text-slate-300 font-medium leading-6">
                  {data.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link href="/profile" className="flex items-center gap-5">
                <p className="hidden text-white cursor-pointer sm:block text-md">{user?.firstName} {user?.lastName}</p>
                <Avatar
                  src={user?.profileImage}
                  alt={user?.firstName}
                  className="border border-black h-16 w-16 text-xl font-semibold"
                />
              </Link>
            </div>
          </nav>

          {mobileMenuOpen && (
            <div
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="hide-scrollbar h-screen lg:hidden fixed inset-0 bg-opacity-30 backdrop-blur z-10"
            >
              <aside className="flex flex-col w-64 h-screen px-6 py-3 overflow-y-auto bg-white border-r">
                <Link href="/" className="flex items-center">
                  <img className="w-auto h-12" src="/techxetra-text.svg" alt="Techxetra" />
                </Link>

                <div className="flex flex-col justify-between flex-1 mt-1">
                  <nav>
                    <hr className="my-4 border-gray-200 " />
                    {navbarContent.map((data, index) => (
                      <Link key={index} href={data.path} className={`flex items-center px-4 py-3 rounded-md ${router.pathname === `${data.path}` ? "text-gray-700 bg-gray-100" : "text-gray-600 transition-colors duration-300 transform hover:bg-gray-100 hover:text-gray-700"}`}>
                        <span className="mx-2 font-medium">{data.label}</span>
                      </Link>
                    ))}
                  </nav>

                  <div className='pb-10'>
                    <div className="flex items-center justify-between px-4 -mx-2">
                      <Link href="/profile" className='flex items-center'>
                        <Avatar
                          src={user?.profileImage}
                          alt={user?.firstName}
                          className="border border-black h-16 w-16 text-xl font-semibold"
                        />
                        <span className="mx-2 font-medium text-gray-800">{user.firstName}</span>
                      </Link>
                      <IoIosLogOut onClick={() => { /* handle logout */ }} className="object-cover mx-2 rounded-full h-6 w-6" />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </header>
      )}
    </>
  );
};

export default Navbar;