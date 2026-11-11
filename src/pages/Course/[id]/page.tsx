import { useParams } from 'react-router-dom'
import English from './langs/English'
import NotFound from '../../../pages/NotFound'

function page() {
  const { id } = useParams();
  return (
    id === "1" ? <English /> : <NotFound />
  )
}

export default page