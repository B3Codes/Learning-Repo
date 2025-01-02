function App() {

  return (
    <>
    <main className="max-w-2xl mx-auto flex px-2 gap-8">
      {/* left part */}
      <div className="py-8 flex flex-col justify-center" >
      <h1 className="text-4xl font-bold uppercase mb-4"><span className="text-5xl">URL to Video</span><br/>
      
      <span className="bg-gradient-to-br from-emerald-300 from-30% to-sky-300 bg-clip-text text-transparent">with power of AI</span></h1>
      
      <form className="grid gap-2">
        <input 
        className="border-2 rounded-full bg-transparent text-white px-4 py-2 grow"
        type="url" 
        placeholder="https://..." />
        <button 
        className="bg-emerald-500 text-white rounded-full px-4 py-2 uppercase"
        type="submit">
          Create&nbsp;Video
        </button>
      </form>
      </div>

      {/* Right part */}
      <div className="py-4">
        <div className="bg-gray-200 w-[248px] h-[380px] text-gray-500 rounded-2xl p-8">
          Video here
        </div>
      
      </div>
    </main>
      
      
    </>
  )
}

export default App
