import InputForm from "./InputForm"

const LoginPage = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h1>Login</h1>
        <InputForm />
      </div>
    </main>
  )
}

export default LoginPage