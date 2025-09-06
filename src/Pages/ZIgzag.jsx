import React, { useState } from 'react'

const ZIgzag = () => {
    const [input , setInput] = useState("");
    const [outPut , setOutput] = useState("");

    function mergeString() {
        if(!input.trim()){
            return "";
        }

        const mergedString = input.split(",").map((str,index) => {
            let cleanStr = str.trim();

            return index % 2 === 0 ? cleanStr : cleanStr.split("").reverse().join("");
        }).join("");

        return mergedString;
    }

    function handelSubmit(){
        let result = mergeString();
        setOutput(result);
    }
  return (
    <div className='flex flex-col justify-start items-center w-200 h-100 shadow-2xl rounded-2xl'>
        <h1 
            className='text-4xl mt-10 font-bold bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-50 to-neutral-500 selection:bg-white selection:text-black' 
        >
            Array to Zigzag String
        </h1>

        <input 
            type="text"
            placeholder='Enter string like one,two,three'
            className='mt-10 w-100 px-4 py-3 rounded-xl border border-neutral-600 
            placeholder:text-lg placeholder:text-neutral-500 text-white
            focus:outline-none focus:ring-2 focus:ring-neutral-600'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
        />
        <button
            onClick={handelSubmit}
            className='relative px-4 py-2 rounded-xl overflow-hidden border border-neutral-700 text-neutral-400 cursor-pointer mt-10'
        >
            <div className='absolute top-0 inset-x-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent'></div>
            <div 
            className='absolute bottom-0 inset-x-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500 to-transparent'
            ></div>
            Submit
        </button>

        <p className='text-neutral-900 w-150 h-20 text-lg px-4 rounded-xl flex justify-start items-center mt-10 bg-neutral-600 font-bold'
        >
            Output : <span className='text-white ml-2 font-[400]'>{outPut}</span> 
        </p>
    </div>
  )
}

export default ZIgzag
