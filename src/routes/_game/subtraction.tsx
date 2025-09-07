import { createFileRoute } from '@tanstack/react-router'
import MathEquation from '@/components/MathEquation'
import { randInt } from '@/lib/math'

export const Route = createFileRoute('/_game/subtraction')({
  component: FileRoute,
})

function FileRoute() {
  const operandFunc = () => {
    const n1 = randInt(1, 9);
    const n2 = randInt(1, 9);
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
