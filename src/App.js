import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Tasks from './components/Tasks'

import {
  AppContainer,
  TaskCreateContainer,
  CreateTask,
  InputContainer,
  LabelText,
  Input,
  Select,
  AddTaskButton,
  TaskDisplayContainer,
  TagsHeading,
  TagsContainer,
  TagsListItem,
  TagsButton,
  TasksHeading,
  TaskContainer,
  NoTaskText,
} from './styledComponents'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    myTaskList: [],
    inputTask: '',
    selectTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onClickAddButton = () => {
    const {inputTask, selectTag} = this.state
    const taskName = inputTask
    const taskCategory = selectTag
    const id = uuid()
    const bgColor = false

    if (taskName.length !== 0) {
      this.setState(preState => ({
        myTaskList: [
          ...preState.myTaskList,
          {id, taskName, taskCategory, bgColor},
        ],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onChangeInput = event => {
    this.setState({inputTask: event.target.value})
  }

  onChangeSelectTag = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickTagButton = event => {
    this.setState(preState => ({
      activeTag:
        preState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {myTaskList, inputTask, selectTag, activeTag} = this.state
    const filteredTask =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(eachTask => eachTask.taskCategory === activeTag)

    return (
      <AppContainer>
        <TaskCreateContainer>
          <CreateTask>Create a task</CreateTask>
          <InputContainer>
            <LabelText for="text-input">Task</LabelText>
            <Input
              id="text-input"
              type="text"
              value={inputTask}
              placeholder="Enter the task here"
              onChange={this.onChangeInput}
            />

            <LabelText for="tags-select">Tags</LabelText>
            <Select
              id="tags-select"
              value={selectTag}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(eachTag => (
                <option value={eachTag.optionId}>{eachTag.displayText}</option>
              ))}
            </Select>
          </InputContainer>
          <AddTaskButton type="button" onClick={this.onClickAddButton}>
            Add Task
          </AddTaskButton>
        </TaskCreateContainer>
        <TaskDisplayContainer>
          <TagsHeading>Tags</TagsHeading>
          <TagsContainer>
            {tagsList.map(eachTag => {
              const isActive = activeTag === eachTag.optionId
              return (
                <TagsListItem key={eachTag.optionId}>
                  <TagsButton
                    type="button"
                    value={eachTag.optionId}
                    onClick={this.onClickTagButton}
                    isActive={isActive}
                  >
                    {eachTag.displayText}
                  </TagsButton>
                </TagsListItem>
              )
            })}
          </TagsContainer>
          <TasksHeading>Tasks</TasksHeading>
          <TaskContainer>
            {filteredTask.length === 0 ? (
              <NoTaskText>No Tasks Added Yet</NoTaskText>
            ) : (
              filteredTask.map(eachTask => (
                <Tasks taskDetails={eachTask} key={eachTask.id} />
              ))
            )}
          </TaskContainer>
        </TaskDisplayContainer>
      </AppContainer>
    )
  }
}
export default App
