import './App.css';
import * as React from 'react'
import { useState } from 'react';
import { ChakraProvider, HStack, VStack } from '@chakra-ui/react'
import Form from './components/Form';
import Task from './components/Task';

function App() {
  const [tarea, setTarea] = useState('')
  const [tareas, setTareas] = useState([])

  const handleChange = (e) => {
    setTarea(e.target.value)
  }

  const addTask = (e) => {
    e.preventDefault();
    if(tarea.trim() === ''){
      alert('Debe agregar una tarea')
      return;
    }

    const nuevaTarea = {
      id: Date.now(),
      tarea,
      completada: false,
    }

    const TotalTareas = [nuevaTarea, ...tareas]
    setTareas(TotalTareas);
    setTarea('');
  }

    const borrarTareas = (id) => {
      const tareasActualizadas = tareas.filter((tarea) => {
        return tarea.id !== id
      })
      setTareas(tareasActualizadas);
    }

  return (
    <ChakraProvider>
      <VStack className='App'>
        <VStack className='componentsContainer'>
          <VStack className='containerTopElements'>
            <HStack className='titleContainer'>
            <h1 id='titleWelcome'>
              Things to do
            </h1>
            </HStack>
            <h2 id='greeting'>
              Hola!
            </h2>
            {tareas.map((tarea) => (
              <Task 
              id={tarea.id}
              key={tarea.id}
              tarea={tarea.tarea}
              borrarTarea={borrarTareas}
              />
              ))}
          </VStack>
          <HStack className='inputTaskContainer'>
            <Form 
            handleChange={handleChange}
            tarea={tarea}
            addTask={addTask}
            />
          </HStack>
        </VStack>
      </VStack>
    </ChakraProvider>
  )
}

export default App;
