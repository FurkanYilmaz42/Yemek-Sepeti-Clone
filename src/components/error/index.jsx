import {OctagonAlert} from "lucide-react"

const Error = ({message}) => {
  return (
    <div className="text-center - my-20 flex flex-col items-center gap-5">
      <OctagonAlert className="text-red-500 siz-10" size={50} />

      <h1 className="text-lg font-semibold">Uzgunuz bir sorun olustu</h1>

      <h2 className="text-red-500">{message}</h2>
    </div>
  )
}

export default Error