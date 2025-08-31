import { createFileRoute } from '@tanstack/react-router'
import MathInput from '@components/MathInput'
import { randInt } from '@/lib/math'

export const Route = createFileRoute('/_game/multiplication')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathInput lhs={() => randInt(1, 12)} rhs={() => randInt(1, 12)} operator='multiply' />
  )
}

export default FileRoute
