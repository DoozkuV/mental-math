import { createFileRoute } from '@tanstack/react-router'
import MathInput from '@components/MathInput'
import { randSingleDigit } from '@/lib/math'

export const Route = createFileRoute('/_game/subtraction')({
  component: FileRoute,
})

function FileRoute() {
  const operandFunc = () => {
    const n1 = randSingleDigit();
    const n2 = randSingleDigit();
    return { lhs: Math.max(n1, n2), rhs: Math.min(n1, n2) };
  }

  return <MathInput operandFunc={operandFunc} operator='subtract' />;
}

export default FileRoute
