import { createFileRoute } from '@tanstack/react-router'
import MathEquation from '@/components/MathEquation'
import { subtractionGenerator } from '@/lib/operands'

export const Route = createFileRoute('/_game/one-digit-subtraction')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathEquation
      operandFunc={subtractionGenerator(9)}
      solutionFunc={(lhs, rhs) => lhs - rhs}
    >
      {(lhs, rhs) => `${lhs} - ${rhs}`}
    </MathEquation>
  );
}

export default FileRoute
