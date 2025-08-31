import { createFileRoute } from '@tanstack/react-router'
import MathInput from '../../components/MathInput'
import { randSingleDigit } from '@/lib/math'

export const Route = createFileRoute('/_game/addition')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathInput lhs={() => randSingleDigit()} rhs={() => randSingleDigit()} operator='add' />
  )
}

export default FileRoute
