import { useParams } from 'react-router-dom'
import English from './langs/English'
import NotFound from '../../../pages/NotFound'
import ReactJS from './langs/ReactJS';

function page() {
  const { id } = useParams();
  return (
    <>
      {id === "1" && <English />}
      {id === "2" && <ReactJS />}
      {id !== "1" && id !== "2" && <NotFound />}
    </>
  )
}

export default page