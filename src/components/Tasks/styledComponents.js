import styled from 'styled-components'

export const ListItem = styled.li`
    list-style-type: none;
    background-color: #1a171d;
    height: 15px;
    width: 98%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    margin: 5px;
`
export const TaskCategory = styled.p`
    background-color: #f3aa4e;
    border: 0px;
    border-radius: 20px;
    height: 12px;
    padding: 10px;
    margin: 5px;
    color: #131213;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
`

export const TaskName = styled.p`
    font-family: 'Roboto';
    font-size: 18px;
    color:  #f1f5f9;
    font-weight: normal;
`
