import React, {InputHTMLAttributes} from 'react';

import { Container } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{


}

const Input: React.FC<InputProps> = () => (
 <Container>
     <input type="text"/>
 </Container>

);

export default Input;
