"use client"
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Footer from "@/components/Footer";

function Page() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const message = formData.get("message") as string;

    try {
      const response = await axios.post("https://sepm.onrender.com/consell", { message });
      form.reset();
      setAnswer(response.data.result.text);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen max-w-prose m-auto flex justify-center items-center bg-black">
        <div className=" w-full  p-6 bg-zinc-900 shadow-lg rounded-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Chat</h1>
          {loading == false ? (
            <form onSubmit={handleSubmit} className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Explain your problem in detail..."
                className="w-full px-4 py-2 text-sm text-gray-800 focus:outline-none"
                name="message"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 text-sm font-semibold uppercase hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              >
                Send
              </button>
            </form>
          ) : (
            <Image
              src="/assets/giphy.gif"
              width={300}
              height={100}
              alt="loading"
              className="mx-auto"
            />
          )}

          {answer && (
            <div className="mt-4 max-h-80 overflow-y-auto">
              <div className="text-white bg-gray-800 p-4 rounded-lg">
                <pre className="text-wrap">{answer}</pre>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
