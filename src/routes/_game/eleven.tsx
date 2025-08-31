import { createFileRoute } from '@tanstack/react-router'
import MathInput from '@components/MathInput'
import { randInt } from '@/lib/math'

export const Route = createFileRoute('/_game/eleven')({
  component: App,
})

function App() {
  return (
    <MathInput lhs={() => randInt(10, 99)} rhs={11} operator='multiply' />
  )
}

export default App
