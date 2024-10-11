

const AddContent = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className="flex gap-2">
        <input placeholder="Bahas Apa Hari Ini?" type="text" className="px-4 py-3 rounded text-black" />
        <button className="border-2 rounded px-3 py-2">Upload</button>
      </form>
    </div>
  )
}

export default AddContent