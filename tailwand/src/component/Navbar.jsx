import React from 'react'

function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 bg-yellow-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>ALL CATEGORIES</a></li>
                            <li><a className='text-amber-200'>TODAY DEALS</a></li>
                            <li><a>ELECTRONICS</a></li>
                            <li><a>CLOTHINGS</a></li>
                            <li><a>COMPUTERS</a></li>
                            <li><a>FURNITNURES</a></li>
                            <li><a>MOM & BABY</a></li>
                        </ul>
                    </div>
                    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-950 font-bold">
                        <li><a>ALL CATEGORIES</a></li>
                        <li><a className='text-amber-200'>TODAY DEALS</a></li>
                        <li><a>ELECTRONICS</a></li>
                        <li><a>CLOTHINGS</a></li>
                        <li><a>COMPUTERS</a></li>
                        <li><a>FURNITNURES</a></li>
                        <li><a>MOM & BABY</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                </div>
            </div>
        </>
    )
}

export default Navbar
