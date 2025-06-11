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
                          src="https://img.freepik.com/free-photo/fairytale-scene-coming-out-book_23-2151778550.jpg?semt=ais_hybrid&w=740"
                          alt="image"
                          className='rounded-full h-52'
                      />
                  </div>
                  <div className="rounded-xl p-3 md:7/12 lg:w-6/12 bg-yellow-900/60">
                      <h2 className="text-2xl text-white font-bold md:text-4xl">
                          React development is carried out by passionate developers
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}