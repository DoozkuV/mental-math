import { createFileRoute } from '@tanstack/react-router'
import MathEquation from '@/components/MathEquation'
import { randSingleDigit } from '@/lib/math'

export const Route = createFileRoute('/_game/addition')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathEquation
      operandFunc={() => [randSingleDigit(), randSingleDigit()] as const}
      solutionFunc={(lhs, rhs) => lhs + rhs}
    >
      {(lhs, rhs) => `${lhs} + ${rhs}`}
    </MathEquation>
  );
}

export default FileRoute
