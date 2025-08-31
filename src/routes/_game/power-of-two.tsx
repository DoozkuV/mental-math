import { createFileRoute } from '@tanstack/react-router'
import MathEquation from '@/components/MathEquation'
import { randInt } from '@/lib/math'

export const Route = createFileRoute('/_game/power-of-two')({
  component: FileRoute,
})

function FileRoute() {
  return (
    <MathEquation
      operandFunc={() => [randInt(1, 12)] as const}
      solutionFunc={(lhs) => Math.pow(lhs, 2)}
    >
      {(lhs) => (<span>{lhs}<sup>2</sup></span>)}
    </MathEquation>

  );
}

export default FileRoute
