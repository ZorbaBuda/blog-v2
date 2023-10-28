import React from 'react'

export default function cardLayoutNotUsing() {
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-20 md:px-0 antialiased">
    <section className="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-40 ">
      <article
        className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1615319532762-b4ccc69e5abf?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTA3fHxsYW5kc2NhcGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=100)`,
        }}
      >
        <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
          <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
            On A Day Like Today
          </h1>
          <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
          <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            beatae!
          </p>
        </div>
      </article>

      <article
        className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3325720/pexels-photo-3325720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
        }}
      >
        <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
          <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
            The Illusionist
          </h1>
          <div className="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
          <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            beatae!
          </p>
        </div>
      </article>

      <article
        className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/3304855/pexels-photo-3304855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
        }}
      >
        <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300">
          <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
            Loneliness Within
          </h1>
          <div className="w-16 h-2 bg-red-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
          <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            beatae!
          </p>
        </div>
      </article>
    </section>
    <p className="text-sm leading-relaxed text-gray-400 mt-10 text-center">
      Images by:{" "}
      <a target="_blank" href="https://www.pexels.com/@joao-cabral-1723948">
        João Cabral
      </a>
    </p>
  </section>
  )
}
