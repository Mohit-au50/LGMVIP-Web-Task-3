import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [image, setImage] = useState("");
  const [radio, setRadio] = useState("Male");
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [javaScript, setJavaScript] = useState("");

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([
      ...data,
      { name, email, website, image, radio, html, css, javaScript },
    ]);

    // clear the form
    setName("");
    setEmail("");
    setWebsite("");
    setImage("");
    setRadio("Male");
    setHtml("");
    setCss("");
    setJavaScript("");
  };

  const handleClear = () => {
    setData([]);
  };

  return (
    <>
      <header className="w-full h-[5rem]">
        <Navbar />
      </header>

      <main className="max-w-[1200px] h-[calc(100vh-5rem)] mx-auto grid grid-cols-2">
        <div className="grid place-items-center">
          <form
            className="w-[320px] mx-auto tracking-wider"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                className="peer block border-2 border-violet-500 w-full outline-0 rounded-md h-[3rem] mb-5 px-4 placeholder:text-transparent"
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="name"
                className="text-sm bg-white px-1 transition-all text-violet-500 absolute -top-3 left-3 peer-focus:-top-3 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3"
              >
                Name
              </label>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                className="peer block border-2 border-violet-500 w-full outline-0 rounded-md h-[3rem] my-5 px-4 placeholder:text-transparent"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor="email"
                className="text-sm bg-white px-1 transition-all text-violet-500 absolute -top-3 left-3 peer-focus:-top-3 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3"
              >
                Email
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="website"
                placeholder="Website"
                value={website}
                className="peer block border-2 border-violet-500 w-full outline-0 rounded-md h-[3rem] my-5 px-4 placeholder:text-transparent"
                onChange={(e) => setWebsite(e.target.value)}
              />
              <label
                htmlFor="website"
                className="text-sm bg-white px-1 transition-all text-violet-500 absolute -top-3 left-3 peer-focus:-top-3 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3"
              >
                Website
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="image link"
                placeholder="Image link"
                value={image}
                className="peer block border-2 border-violet-500 w-full outline-0 rounded-md h-[3rem] my-5 px-4 placeholder:text-transparent"
                onChange={(e) => setImage(e.target.value)}
              />
              <label
                htmlFor="image link"
                className="text-sm bg-white px-1 transition-all text-violet-500 absolute -top-3 left-3 peer-focus:-top-3 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3"
              >
                Image link
              </label>
            </div>

            <div className="relative flex my-5">
              Gender:
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="ml-5 appearance-none w-4 h-4 rounded border-2 border-violet-500 checked:bg-violet-500"
                  onChange={(e) => setRadio(e.target.value)}
                />
                <span className="ml-1">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="ml-5 appearance-none w-4 h-4 rounded border-2 border-violet-500 checked:bg-violet-500"
                  onChange={(e) => setRadio(e.target.value)}
                />
                <span className="ml-1">Female</span>
              </label>
            </div>

            <div className="relative flex my-5">
              Skills:
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="html"
                  checked={html}
                  className="ml-4 appearance-none w-4 h-4 rounded border-2 border-violet-500 checked:bg-violet-500"
                  onChange={(e) =>
                    e.target.checked ? setHtml(e.target.value) : setHtml("")
                  }
                />
                <span className="ml-1">HTML</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="css"
                  checked={css}
                  className="ml-3 appearance-none w-4 h-4 rounded border-2 border-violet-500 checked:bg-violet-500"
                  onChange={(e) =>
                    e.target.checked ? setCss(e.target.value) : setCss("")
                  }
                />
                <span className="ml-1">CSS</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="javaScript"
                  checked={javaScript}
                  className="ml-3 appearance-none w-4 h-4 rounded border-2 border-violet-500 checked:bg-violet-500"
                  onChange={(e) =>
                    e.target.checked
                      ? setJavaScript(e.target.value)
                      : setJavaScript("")
                  }
                />
                <span className="ml-1">JavaScript</span>
              </label>
            </div>

            <div className="flex justify-between">
              <button className="bg-green-500 px-5 py-2 rounded">
                Enroll student
              </button>
              <a
                className="bg-rose-500 px-5 py-2 rounded cursor-pointer"
                onClick={handleClear}
              >
                Clear
              </a>
            </div>
          </form>
        </div>
        <div className="overflow-y-scroll">
          <div className="w-full mx-auto tracking-wider mt-9">
            <h2 className="font-semibold text-2xl text-center">
              Enrolled Students
            </h2>
            {data.length > 0 ? (
              data.map((item, index) => (
                <div className="relative w-3/4 mx-auto p-4 bg-zinc-800 my-7 rounded-lg">
                  <div className="relative ">
                    <img
                      src={item.image}
                      alt=""
                      className="mx-auto rounded-full w-20 h-20 object-cover"
                    />
                    <span className="absolute text-xs bg-violet-50 rounded-full px-3 top-[69px] left-1/2 -translate-x-1/2">
                      {item.radio}
                    </span>
                  </div>

                  <div className="text-center mt-7 text-white">
                    <p className="font-semibold text-xl">{item.name}</p>
                    <p className="text-sm">{item.email}</p>
                    <a
                      href={item.website}
                      target="_blank"
                      className="text-sm absolute top-4 right-4 bg-white rounded-full py-1 px-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="black"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>

                    <div className="flex justify-center gap-4 text-sm mt-2  font-semibold">
                      <span>{item.html}</span>
                      <span>{item.css}</span>
                      <span>{item.javaScript}</span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <p className="text-center mt-5">
                  Add student deails to see the card
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
