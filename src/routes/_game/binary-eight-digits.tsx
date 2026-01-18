import MathEquation from '@/components/MathEquation'
import { randInt } from '@/lib/math'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_game/binary-eight-digits')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathEquation
      operandFunc={() => [randInt(0, 255)] as const}
      solutionFunc={(num) => (num)}
    >
      {(num) => num.toString(2).padStart(8, '0')}
    </MathEquation>
  )
}
