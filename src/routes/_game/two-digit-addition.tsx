import { createFileRoute } from '@tanstack/react-router'
import MathEquation from '@/components/MathEquation'
import { additionGenerator } from '@/lib/operands';

export const Route = createFileRoute('/_game/two-digit-addition')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathEquation
      operandFunc={additionGenerator(99)}
      solutionFunc={(lhs, rhs) => lhs + rhs}
    >
      {(lhs, rhs) => `${lhs} + ${rhs}`}
    </MathEquation>
  );
}

export default FileRoute
