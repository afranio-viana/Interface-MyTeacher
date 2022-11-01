import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { Description, Informations, ItemList, ListEmpty, ListStyled, Name, Photo, Value } from "./List.syle";

interface ListProps{
    teachers: Teacher[],
}

const List=(props:ListProps)=>{
    return (
        <div>
            {props.teachers.length>0?(
                <ListStyled>
                    {props.teachers.map(teacher=>(
                        <ItemList key={teacher.id}>
                            <Photo src={teacher.photo}></Photo>
                            <Informations>
                                <Name>{teacher.name}</Name>
                                <Value>{teacher.value_time.toLocaleString('pt-br',{minimumFractionDigits:2,style:'currency',currency:'BRL'})} por hora</Value>
                                <Description>{teacher.description}</Description>
                                <Button sx={{width: '70%'}}>Marcar Aula com {teacher.name}</Button >
                            </Informations>
                        </ItemList>
                    ))}
                </ListStyled>
            ):(
                <ListEmpty>Nenhum item encontrado!</ListEmpty>
            )}
        </div>
    )
}

export default List;