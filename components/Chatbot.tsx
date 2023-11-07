import { useEffect, useState } from "react";

const chats = [
  {
    id:1,
    role:'ai',
    message:'Hi There How can I help you'
  },
  {
    id:2,
    role:'user',
    message:'Hi There How can I help you'
  }
]

const ChatBot = ({}: any) => {
  const [open, setOpen] = useState(false);
  const [userMessage, setuserMessage] = useState("");
  const [textareaRows, setTextareaRows] = useState(1); // Initialize with 1 row

  useEffect(() => {
    // Calculate the number of rows based on the scroll height of the textarea
    const calculateRows = () => {
      const lines = userMessage.split("\n").length;
      setTextareaRows(lines < 1 ? 1 : lines);
    };

    calculateRows();

    // Add a scroll event listener to the textarea
    const textarea = document.getElementById("user-message");
    if (textarea) {
      textarea.addEventListener("scroll", calculateRows);
    }

    return () => {
      // Clean up the event listener
      if (textarea) {
        textarea.removeEventListener("scroll", calculateRows);
      }
    };
  }, [userMessage]);

  return (
    <>
      <div className="fixed bottom-2 right-2 z-[100]">
        <div
          className={`${
            open ? "w-80 h-[calc(100vh-180px)]" : "w-0 h-0"
          } mb-2 mr-2 transition-all bg-white block rounded-lg drop-shadow-lg overflow-hidden flex flex-col`}
        >
          <div className="p-4 bg-brand-solidgreen/80">
            <div className="flex items-center gap-4 w-full z-10 relative">
              <div className="w-12 h-12 bg-slate-100 rounded-full"></div>
              <div>
                <p className="text-xl font-bold text-white">Hi There !</p>
              </div>
            </div>
          </div>

          {/* Chats */}
          <div className="p-3 space-y-3 h-full w-full">
            {
              chats.map((x)=>(
                <>
                  {x.role === 'ai' && 

                    <div className="w-full flex items-start gap-2 justify-start  ">
                      <div className="w-8 h-8 bg-slate-100 rounded-full ">

                      </div>
                      <p className="break-words px-2 py-1 text-sm rounded-b-md w-7/12 rounded-r-md bg-brand-solidgreen/20">
                        {x.message}
                      </p>
                    </div>
                  }
                  {x.role === 'user' && 
                    <div className="w-full flex items-center justify-end  ">
                      <p className="break-words px-2 py-1 text-sm rounded-b-md w-3/4 rounded-l-md bg-slate-200">
                        {x.message}
                      </p>
                    </div>
                  }
                </>
              ))
            }
          </div>
          <div className="border-t w-full p-2 flex gap-2">
            <textarea
              className="p-1 text-sm rounded-md resize-none  w-full"
              style={{ border: "1px white solid", outline: "1px solid white" }} // Set border and outline to 'none'
              value={userMessage}
              onChange={(e) => setuserMessage(e.target.value)}
              rows={textareaRows}
              placeholder="Write a reply . . ."
            />
            {userMessage.length > 0 && (
              <button className="bg-brand-solidgreen w-fit h-fit shrink-0 p-1.5 rounded-md text-white">
                <svg
                  fill="white"
                  stroke="currentColor"
                  className="w-5 h-5"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  ></path>
                </svg>
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 px-2 pb-2">
            <label htmlFor="input_file" className="cursor-pointer -mt-0.5 w-fit justify-center rounded-md bg-white p-1 border text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50  ">
            <svg fill="none" className="w-5 h-5 stroke-slate-400" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"></path>
  </svg>
            </label>
            <input id="input_file" type="file" className="hidden"/>
          </div>
        </div>
        <div className="flex items-center justify-end ">
          <button
            className="    w-14 h-14 mt-2 bg-slate-900 rounded-full hover:scale-110 transition-all active:scale-90 relative"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`${
                open ? "hidden" : "flex"
              }  items-center justify-center  duration-100	delay-100 	`}
            >
              <svg
                fill="white"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                width={40}
                height={40}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                ></path>
              </svg>
            </span>
            <span
              className={`${
                open ? "w-8 h-8  rotate-90" : "w-0 hidden h-0 rotate-90"
              }  items-center justify-center text-white flex absolute inset-0 m-auto transition-all`}
            >
              <svg
                className="fill-white stroke-white"
                fill="white"
                stroke="white"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
     
    </>
  );
};

export default ChatBot;
