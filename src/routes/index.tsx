import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='p-2'>
    <h3>Welcome to the jungle!</h3>
  </div>
}
