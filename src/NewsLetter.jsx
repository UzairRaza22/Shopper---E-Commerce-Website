import React from 'react'
import { toast } from 'react-toastify';

const NewsLetter = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fdc7e547-5d4b-4b57-a3f1-f9440c09c9c7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    };
  }
  return (
    <div className="w-full max-w-[1200px] mx-auto py-12 px-4 md:px-16 lg:px-32 flex flex-col items-center justify-center bg-[#fde1ff] dark:bg-[#080808] gap-6">
      
      <h1 className="text-[#454545] dark:text-gray-300 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] dark:text-gray-300 text-sm sm:text-base md:text-lg text-center">
        Send Message to Us and Stay Updated
      </p>

     <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
        <form onSubmit={onSubmit} className='max-w-2xl mx-auto dark:text-gray-200 text-gray-600 pt-8'> 
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left'>
                    Your Name
                    <input className='w-full border border-gray-300 dark:border-black dark:bg-black rounded py-3 px-4 mt-2'
                    type="text" name='Name' placeholder='Your Name' required/>
                </div>
                 <div className='w-full md:w-1/2 text-left md:pl-4'>
                    Your Email
                    <input className='w-full border border-gray-300 dark:border-black dark:bg-black rounded py-3 px-4 mt-2'
                    type="email" name='Email' placeholder='Your Email' required/>
                </div>
            </div>
            <div className='my-6 text-left'>
            Message
            <textarea className='w-full border border-gray-300 dark:border-black dark:bg-black rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Message' required></textarea>
            </div>
            <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result : "Send Message"}</button>
        </form>

      
    </div>

    </div>
  );
}

export default NewsLetter
