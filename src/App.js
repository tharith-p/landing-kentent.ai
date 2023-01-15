import './App.css';

function App() {
  return (
    <div className="bg-primary-100 bg-gradient-to-r from-primary-100 to-primary min-h-screen">
      <div className=' min-h-screen flex flex-col'>
        <header className=' h-[70px] flex items-center sticky top-0 bg-primary-100/30 bg-gradient-to-r from-primary-100/30 to-primary/30 backdrop-blur'>
          <div className='w-[120px] flex justify-center'>
            <a href="/" className='w-10 h-10 bg-emerald-500 flex justify-center items-center rounded-full text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </a>
          </div>
        </header>
        {/* body */}
        <div className='flex-1 flex'>
          {/* side */}
          <div className='h-[calc(100vh_-_70px)] flex flex-col bg-green-500 w-[120px] px-5 sticky top-[70px] overflow-y-auto'>
            <a href='#' className='text-gray-600 rounded hover:bg-white hover:shadow transition-all flex flex-col items-center p-2 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 flex-shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <span className='text-sm text-center'>Home</span>
            </a>
            <a href='#' className='text-gray-600 rounded hover:bg-white hover:shadow transition-all flex flex-col items-center p-2 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
              </svg>
              <span className='text-sm text-center'>Content & assets</span>
            </a>
            <a href='#' className='text-gray-600 rounded hover:bg-white hover:shadow transition-all flex flex-col items-center p-2 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              <span className='text-sm text-center'>Content model</span>
            </a>
            <a href='#' className='text-gray-600 bg-white rounded shadow hover:bg-white hover:shadow transition-all flex flex-col items-center p-2 mb-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className='text-sm text-center'>Project settings</span>
            </a>
            <div className='bg-red-500 flex-1 flex flex-col justify-end'>
              <div className=''>
                hello
              </div>
            </div>
            
          </div>
          {/* content */}
          <div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
            <div className='h-[100px] border'>fsdfsdf</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
