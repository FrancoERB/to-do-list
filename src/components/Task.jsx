import { HStack, Text, IconButton} from '@chakra-ui/react'
import './style.css'
import { useState } from 'react'
import { MdOutlineDelete } from "react-icons/md";


const Task = ({tarea, borrarTarea}) => {
    const [completada, setCompletada] = useState(false);
    return(
        <HStack className='taskContainer'>
            <HStack className='task'>
                <h2 className='titleTask'>{tarea}</h2>
            </HStack>
            <IconButton 
                icon={<MdOutlineDelete/>} 
                fontSize={'20px'}
                size={'sm'} id='eliminar'
                variant={'none'}
                color={'#fff'}
                onClick={() => borrarTarea(tarea.id)}>Eliminar</IconButton>
           
        </HStack>
    )
}
export default Task;