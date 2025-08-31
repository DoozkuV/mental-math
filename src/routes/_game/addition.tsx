import { createFileRoute } from '@tanstack/react-router'
import MathInput from '@components/MathInput'
import { randSingleDigit } from '@/lib/math'

export const Route = createFileRoute('/_game/addition')({
  component: FileRoute,
})

function FileRoute() {
  const operandFunc = () =>
    ({ lhs: randSingleDigit(), rhs: randSingleDigit() });

  return <MathInput operandFunc={operandFunc} operator='add' />;
}

export default FileRoute
