import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div
            className="w-full bg-cover bg-center h-96"
            style={{
                backgroundImage:
                "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c547ba3d-624b-4a5d-892e-8458fd9952fa/d5zfrww-29cca157-7322-4da3-a20e-ee62518f8f7c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1NDdiYTNkLTYyNGItNGE1ZC04OTJlLTg0NThmZDk5NTJmYVwvZDV6ZnJ3dy0yOWNjYTE1Ny03MzIyLTRkYTMtYTIwZS1lZTYyNTE4ZjhmN2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HXmOjvUsAqRSW6tI9C0n4ywXvKjP_e9jC-Psww8cGNQ')",
            }}
        >
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-0 mx-0 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-0  pb-20 pt-10 sm:py-24 mx-0 ">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-left sm:text-right sm:mr-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                            
                            <span className="hidden sm:block text-4xl">Ayush Singh Kaushik</span>
                        </h2>

                        <a
  href="https://drive.google.com/file/d/1W3IM1YFulflamGr86SdBJChtlPiszJi6/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
>
  <svg
    fill="white"
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
  </svg>
  &nbsp; Open Resume
</a>
                    </div>
                </div>

                {/* <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://t4.ftcdn.net/jpg/10/48/75/27/360_F_1048752731_wizLpZBrCxAG4oRlzB7e8yAwoCpwmq98.jpg" alt="image1" />
                </div> */}
            </aside>

            {/* <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1> */}
        </div>
    );
}