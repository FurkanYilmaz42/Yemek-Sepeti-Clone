import { LoaderCircle } from "lucide-react"

const Loader = ({ design }) => {
  return (
    <div className={`flex items-center justify-center my-20 ${design}`}>
      <LoaderCircle  className="animate-spin"/>
    </div>
  )
}

export default Loader