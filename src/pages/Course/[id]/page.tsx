import { useParams } from 'react-router-dom'
import English from './langs/English'
import NotFound from '../../../pages/NotFound'
import ReactJS from './langs/ReactJS';
import TailwindCS from './langs/TailwindCS';

function page() {
  const { id } = useParams();
  return (
    <>
      {id === "1" && <English /> || id === "2" && <ReactJS /> || id === "10" && <TailwindCS /> || <NotFound />}
    </>
  )
}

export default page