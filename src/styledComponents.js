import styled from 'styled-components'

export const AppContainer = styled.div`
    height: 100vh;
    background-color: #131213;
    display: flex;
    flex-direction: row;
`
export const TaskCreateContainer = styled.div`
    width: 30%;
    background-color: #1a171d;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 40px;
`
export const CreateTask = styled.h1`
    font-family: 'Roboto';
    font-size: 32px;
    color:  #f3aa4e;
    font-weight: 500;
`
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-top: 30px;
`
export const LabelText = styled.label`
    font-family: 'Roboto';
    font-size: 15px;
    color: #f1f5f9;
    margin-bottom: 6px;
`
export const Input = styled.input`
    height: 35px;
    width: 390px;
    padding-left: 15px;
    font-family: 'Roboto';
    border-radius: 2px;
    border: 1px;
    margin-bottom: 50px;
`
export const Select = styled.select`
    height: 40px;
    width: 400px;
    font-family: 'Roboto';
    border-radius: 2px;
    cursor: pointer;
    outline: none;
    padding: 10px;
    font-weight: normal;
    font-size: 15px;
`
export const AddTaskButton = styled.button`
    height: 40px;
    width: 100px;
    background-color: #f3aa4e;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    font-family: 'Roboto';
    color: #ffffff;
    font-weight: bold;
`
export const TaskDisplayContainer = styled.div`
    width: 70%;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 40px;
`
export const TagsHeading = styled.h1`
    font-family: 'Roboto';
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
`
export const TagsContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
`
export const TagsListItem = styled.li`
    list-style-type: none;
`
export const TagsButton = styled.button`
    height: 30px;
    border: 1px solid  #f3aa4e;
    border-radius: 20px;
    margin: 5px;
    font-family: 'Roboto';
    font-size: 13px;
    color: #ffffff;
    background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
    cursor: pointer;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    text-align: center;
`
export const TasksHeading = styled.h1`
    font-family: 'Roboto';
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
`
export const TaskContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    

`
export const NoTaskText = styled.div`
    font-family: 'Roboto';
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
`
