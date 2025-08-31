import { createFileRoute } from '@tanstack/react-router'
import MathInput from '@components/MathInput'
import { randInt } from '@/lib/math'

export const Route = createFileRoute('/_game/eleven')({
  component: FileRoute,
})

function FileRoute() {
  const operandFunc = () =>
    ({ lhs: randInt(10, 99), rhs: 11 });

  return <MathInput operandFunc={operandFunc} operator='multiply' />;
}

export default FileRoute
