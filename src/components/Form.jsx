import { Button, FormControl, HStack, Input, InputGroup, InputRightElement, VStack} from '@chakra-ui/react'
import './style.css'

const Form = ({tarea, handleChange, addTask}) => {
    return(
        <VStack className='formContainer'>
            <HStack w={'100%'} justifyContent={'center'} alignItems={'center'}>
                <FormControl id='forms' onSubmit={addTask} flexDirection={'row'}>
                    <InputGroup size={'md'}>
                        <Input pr={'4.5rem'} value={tarea} placeholder='Ingrese una tarea' onChange={handleChange}/>
                        <InputRightElement w={'4.5 rem'}>
                            <Button size={'sm'} h={'1.75rem'} mr={'2px'} onClick={addTask}>Agregar tarea</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </HStack>
             
        </VStack>
       
    )
}
export default Form;