import React from "react";

function Contact() {
  return (
    <div className="md:py-28 py-16  md:px-16 px-4 bg-[#131f22] text-white" id="contact"> 
      <h1 className="text-center py-2 text-5xl font-bold border-t-8 border-white w-[15rem] mx-auto">Contact</h1>
      <p className="text-center py-6 text-2xl">
        Feel free to reach out to me for any questions or opportunity!
      </p>
      <div className="bg-black md:w-[30rem] mx-auto text-white border-gray-600 p-6 rounded-lg shadow-lg shadow-black my-6 hover:scale-105 duration-300">
        <form action="https://api.web3forms.com/submit" method="POST">
          <h3 className="font-bold text-2xl py-4">Email Me</h3>
          <input type="hidden" name="access_key" value="2847f75e-c8ba-448b-8e0e-6474986f1d87"></input>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="border border-gray-600  bg-black w-full rounded-lg px-6 py-2 my-2"
          />
          <input
            type="text"
            name="email"
            required
            placeholder="Your Email"
            className="border border-gray-600  bg-black w-full rounded-lg px-6 py-2 my-2"
          />
          <textarea
            name="message"
            id=""
            cols="40"
            rows="6"
            required
            placeholder="Message"
            className="border border-gray-600  bg-black w-full rounded-lg px-6 py-2 my-2"
          ></textarea>
          <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>
          <button
            type="submit"
            className="text-center bg-gradient-to-r from-cyan-500 to-blue-500 w-full py-2 font-semibold text-xl rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
