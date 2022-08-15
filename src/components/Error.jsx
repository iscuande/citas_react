const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-white text-center font-bold mb-3 p-3 rounded-md uppercase">
      {children}
    </div>
  )
}

export default Error
