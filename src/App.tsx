import { useTranslation } from "react-i18next"

function App() {
  const { t } = useTranslation()
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <h1>{ t('HomeSection.p1')}</h1>
    </div>
  )
}

export default App
