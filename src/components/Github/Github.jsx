// import React, { useEffect, useState } from 'react';
import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    // const data = useLoaderData();
    const repos = useLoaderData();
    const scrollRef = useRef(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         });
    // }, []);

    // Mapping repo names to their deployed URLs
    const deployedLinks = {
        "Basic_React_Projects": "https://ask3002.github.io/Basic_React_Projects/",
        "BASIC_PROJECTS_HTML_CSS_JS": "https://ask3002.github.io/BASIC_PROJECTS_HTML_CSS_JS/"
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -400 : 400,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="bg-gray-900 text-white px-4 py-6 relative h-96 bg-cover bg-center"
        style={{
                backgroundImage:
                "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c547ba3d-624b-4a5d-892e-8458fd9952fa/d5zfrww-29cca157-7322-4da3-a20e-ee62518f8f7c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M1NDdiYTNkLTYyNGItNGE1ZC04OTJlLTg0NThmZDk5NTJmYVwvZDV6ZnJ3dy0yOWNjYTE1Ny03MzIyLTRkYTMtYTIwZS1lZTYyNTE4ZjhmN2MuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HXmOjvUsAqRSW6tI9C0n4ywXvKjP_e9jC-Psww8cGNQ')",
            }}
        >
            <h1 className="text-4xl text-amber-900 font-bold mb-8 text-center">My GitHub Repositories</h1>

            {/* Left Scroll Button */}
            <button
                onClick={() => scroll('left')}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-full z-10"
            >
                &#8249;
            </button>

            {/* Scrollable container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto scroll-smooth scrollbar-hide space-x-6 px-6 py-"
            >
                {repos && repos.length > 0 ? (
                    repos.map((repo) => {
                        const deployedLink = deployedLinks[repo.name];

                        return (
                            <div
                                key={repo.id}
                                className="min-w-[300px] max-w-[500px] bg-yellow-900/40 p-5 rounded-xl shadow-lg flex-shrink-0 "
                            >
                                <h2 className="text-lg font-semibold mb-4 p-2 rounded">{repo.name}</h2>

                                <div className="flex flex-col space-y-3">
                                    <a
                                        href={repo.html_url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                                    >
                                        See GitHub Code
                                    </a>

                                    {deployedLink && (
                                        <a
                                            href={deployedLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
                                        >
                                            See Deployed Project
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center w-full">No Repos Found...</p>
                )}
            </div>

            {/* Right Scroll Button */}
            <button
                onClick={() => scroll('right')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-full z-10"
            >
                &#8250;
            </button>
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ASK3002/repos');
    return response.json();
};