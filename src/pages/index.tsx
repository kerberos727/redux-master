import React,{useState,useEffect,ChangeEvent} from 'react'
import H4 from '../components/H4';
import Container from '../components/Container';
import Input from '../components/Input';
import Button from '../components/Button';
import { SubContainer,ItemView,StateLabel,ContentWrapper } from './styles';
import { useSelector,useDispatch  } from 'react-redux';
import { stateType, LOADING_STRING, NOT_FOUND_STRING, ERROR_STRING} from '../constants/utils';
import { RootState } from '../reducers';
import { TournamentsItem } from '../components/TournamentsItem';
import { add_data, fetch_data } from '../constants/api';

const Main = ()=>{

    const [keyword,setKeyWord] = useState('')
    
    const state = useSelector<RootState,stateType>(state  => state.tournaments)
    const data = state.data.filter(item=>{return item.name.includes(keyword)})
    const dispatch = useDispatch()

    const createData = async()=>{
        let data = prompt('New Tournament Name:');
        if(data){
            const result = await add_data(data)
            if (result.success){
               fetchData()
            }
            else{
                dispatch({type : 'get_failure'})
             }
        }
    }
    
    const getStateLabel = () =>{
        switch(state.status){
            case 'loading':
                return <StateLabel>{LOADING_STRING}</StateLabel>
            case 'error':
                return <ContentWrapper >
                    <StateLabel>{ERROR_STRING}</StateLabel>
                    <Button onClick = {fetchData}>Retry</Button>
                    </ContentWrapper>      
        }
    }
    
    const onSearch = (e:ChangeEvent<HTMLInputElement>) =>{
         const value = e.target.value
         setKeyWord(value)
         
    }

    const fetchData = async()=>{
         dispatch({type : 'get_started'})
         const result = await fetch_data(keyword)
         if (result.success){
            dispatch({type : 'get_success', payload : result.data})
         }
         else{
            dispatch({type : 'get_failure'})
         }
    }

    useEffect(()=>{
      fetchData()
    },[dispatch])
    useEffect(()=>{
        fetchData()
    },[keyword])
    
    return(
        <Container>
            <H4>FACEIT TOURNAMENTS</H4>
            <SubContainer>
                    <Input placeholder = "Search tournament..." onChange = {onSearch} value = {keyword}  />
                    <Button onClick = {createData} >CREATE TOURNAMENT</Button>
                   
            </SubContainer>
            
            <ItemView>
                {data.map((item,key)=>(
                    <TournamentsItem key = {key}  data = {item} />
                    )
                )}
            </ItemView>
            {getStateLabel()}
            
        </Container>
    )
}

export default Main;