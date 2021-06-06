import React, { useRef, useState } from 'react'

interface Person{
    firstName: string;
    lastName: string;
}
interface Props{
    text: string;
    ok?: boolean; // ? - optional
    i?: number;
    fn?: (bob: string) => void;
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode{
    text: string
}

export const TextField: React.FC<Props> = ({handleChange}) =>{
    const [count, setCount] = useState<number | null>(5);
    const [string, setString] = useState<{text: string}>({text: 'hello'});
    const [obj, setObj] = useState<TextNode>({text:'hello'})
    
    const inputRef = useRef<HTMLInputElement>(null);
    
    setCount(null)
    return(
        <div>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}