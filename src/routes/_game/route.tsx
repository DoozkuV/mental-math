import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_game')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-blue-100 to-indigo-300">
      <Outlet />
    </div>
  )
}
