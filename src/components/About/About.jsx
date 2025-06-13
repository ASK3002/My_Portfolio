import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white bg-cover bg-center"
      style={{
                backgroundImage:
                "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c547ba3d-624b-4a5d-892e-8458fd9952fa/d5zfrww-29cca157-7322-4da3-a20e-ee62518f8f7c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1NDdiYTNkLTYyNGItNGE1ZC04OTJlLTg0NThmZDk5NTJmYVwvZDV6ZnJ3dy0yOWNjYTE1Ny03MzIyLTRkYTMtYTIwZS1lZTYyNTE4ZjhmN2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HXmOjvUsAqRSW6tI9C0n4ywXvKjP_e9jC-Psww8cGNQ')",
            }}
      >
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Curdie_went_on_after_her%2C_flashing_his_torch_about..jpg"
                          alt="image"
                          className='rounded-full h-60 w-60 ml-24'
                      />
                  </div>
                  <div className="rounded-xl p-3 md:7/12 lg:w-6/12 bg-yellow-900/80">
                      <h2 className="text-2xl text-white font-bold md:text-4xl">
                        👋 About Me
                          
                      </h2>
                      <p className="mt-6 text-white">
                          I'm a second-year B.Tech Computer Science student at IIITDM Jabalpur with a strong academic record (CPI: 9.5).
                          I enjoy building web projects using HTML, CSS, JavaScript, and React, and I'm currently learning backend development with Node.js and MongoDB.
                          Next on my roadmap is diving into Next.js to enhance my full-stack skills.
                      </p>
                      <p className="mt-4 text-white">
                          Beyond tech, I'm a creative communicator with a background in leadership, debate, and art competitions.
                          I believe in consistency, curiosity, and growing step by step — both as a learner and as a person.
                          Let’s connect and learn together! 🚀
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}