import { createFileRoute } from '@tanstack/react-router'
import MathEquation from '@/components/MathEquation'
import { randInt } from '@/lib/math'

export const Route = createFileRoute('/_game/one-digit-addition')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathEquation
      operandFunc={() => [randInt(1, 9), randInt(1, 9)] as const}
      solutionFunc={(lhs, rhs) => lhs + rhs}
    >
      {(lhs, rhs) => `${lhs} + ${rhs}`}
    </MathEquation>
  );
}

export default FileRoute
