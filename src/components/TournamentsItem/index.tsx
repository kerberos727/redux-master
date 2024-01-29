import React from 'react'
import { Item } from '../../constants/utils'
import {Container,ContainerWrapper} from './styles'
import H6 from '../H6'
import Button from '../Button'
import { useDispatch } from 'react-redux'
import { delete_data, edit_data,fetch_data } from '../../constants/api'

interface ItemData {
    data: Item
}
export const TournamentsItem = (props: ItemData) => {
    const data = props.data 
    const dispatch = useDispatch()

    const onEdit = async() => {
        let name = prompt('New Tournament Name:',data.name);
        if(name){
            const result = await edit_data(name,data.id)
            if (result.success){
                updateData()
            }else{
                dispatch({type : 'get_failure'})
            }
        }
    }
    
    const updateData = async()=>{
        dispatch({type : 'get_started'})
        const result = await fetch_data('')
        if (result.success){
           dispatch({type : 'get_success', payload : result.data})
        }
        else{
           dispatch({type : 'get_failure'})
        }
   }

    const onDelete = async() => {
        let confirm = window.confirm('Do you really want to delete this tournament?');
        if(confirm){
            const result = await delete_data(data.id)
            if(result.success){
                updateData()
            }else{
                dispatch({type : 'get_failure'})
            }
        }
    }
    return (
        <Container>
            <H6>{data.name}</H6>
            <ContainerWrapper>
                <p>Organizer: {data.organizer}</p>
                <p>Game: {data.game}</p>
                <p>Participants: {data.participants.current}/{data.participants.max} </p>
                <p>Date: {data.startdate}</p>
            </ContainerWrapper>
            <Button onClick = {onEdit}>Edit</Button>
            <Button onClick = {onDelete} style = {{marginLeft : 10}}>Delete</Button>
        </Container>
    )
}