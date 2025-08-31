import { createFileRoute } from '@tanstack/react-router'
import MathEquation from '@/components/MathEquation'
import { randInt } from '@/lib/math'

export const Route = createFileRoute('/_game/multiplication')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathEquation
      operandFunc={() => [randInt(1, 12), randInt(1, 12)] as const}
      solutionFunc={(lhs, rhs) => lhs * rhs}
    >
      {(lhs, rhs) => `${lhs} x ${rhs}`}
    </MathEquation >
  );
}

export default FileRoute
