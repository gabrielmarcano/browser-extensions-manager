import Content from './components/Content'
import Header from './components/Header'

function App() {
  return (
    <>
      <div className="from-light-0 to-light-100 dark:from-dark-0 dark:to-dark-100 flex min-h-screen flex-col items-center justify-between bg-linear-to-b">
        <div className="flex w-full max-w-xl flex-col items-center justify-between px-4 md:max-w-6xl">
          <Header />
          <Content />
        </div>
      </div>
    </>
  )
}

export default App
