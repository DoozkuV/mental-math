import MathEquation from '@/components/MathEquation'
import { randInt } from '@/lib/math'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_game/two-digit-compliments')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <MathEquation
      operandFunc={() => [randInt(1, 99)] satisfies [number]}
      solutionFunc={(num) => 100 - num}
    >
      {(num) => `${num}`.padStart(2, '0')}
    </MathEquation>
  );
}
