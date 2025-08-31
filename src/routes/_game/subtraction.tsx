import { createFileRoute } from '@tanstack/react-router'
import MathEquation from '@/components/MathEquation'
import { randSingleDigit } from '@/lib/math'

export const Route = createFileRoute('/_game/subtraction')({
  component: FileRoute,
})

function FileRoute() {
  const operandFunc = () => {
    const n1 = randSingleDigit();
    const n2 = randSingleDigit();
    return [Math.max(n1, n2), Math.min(n1, n2)] satisfies [number, number];
  }

  return (
    <MathEquation
      operandFunc={operandFunc}
      solutionFunc={(lhs, rhs) => lhs - rhs}
    >
      {(lhs, rhs) => `${lhs} - ${rhs}`}
    </MathEquation>
  );
}

export default FileRoute
