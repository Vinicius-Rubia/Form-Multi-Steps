import React from 'react'
import { FormProvider } from './contexts/FormContext';
import { AppRouter } from './router';

const App: React.FC = () => {
  return (
    <FormProvider>
      <AppRouter />
    </FormProvider>
  )
}

export default App;