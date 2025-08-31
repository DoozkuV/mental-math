import { createFileRoute } from '@tanstack/react-router'
import MathInput from '@components/MathInput'
import { randInt } from '@/lib/math'

export const Route = createFileRoute('/_game/multiplication')({
  component: FileRoute,
})

function FileRoute() {
  const operandFunc = () =>
    ({ lhs: randInt(1, 12), rhs: randInt(1, 12) });

  return <MathInput operandFunc={operandFunc} operator='multiply' />;
}

export default FileRoute
