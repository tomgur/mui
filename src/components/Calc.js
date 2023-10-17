import {Button, Stack} from "@mui/material";
import StyledComponent from "../Common";
import {useState} from "react";
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import {fontSize} from "@mui/system";

function Calc() {
  const [theQuestion, setTheQuestion] = useState("")
  document.addEventListener('keydown', handleAnswerChange);

  function handleAnswerChange(event) {
    if (event.key === '1') {
      addNumberToDisplay(1)
    } else if (event.key === '2') {
      addNumberToDisplay(2)
    } else if (event.key === '3') {
      addNumberToDisplay(3)
    } else if (event.key === '4') {
      addNumberToDisplay(4)
    } else if (event.key === '5') {
      addNumberToDisplay(5)
    } else if (event.key === '6') {
      addNumberToDisplay(6)
    } else if (event.key === '7') {
      addNumberToDisplay(7)
    } else if (event.key === '8') {
      addNumberToDisplay(8)
    } else if (event.key === '9') {
      addNumberToDisplay(9)
    } else if (event.key === '0') {
      addNumberToDisplay(0)
    } else if (event.key === '+') {
      addNumberToDisplay("+")
    } else if (event.key === '-') {
      addNumberToDisplay("-")
    } else if (event.key === '*') {
      addNumberToDisplay("*")
    } else if (event.key === '/') {
      addNumberToDisplay("/")
    } else if (event.key === 'Enter') {
      calculate()
    } else if (event.key === 'Backspace') {
      setTheQuestion(theQuestion.slice(0, -1))
    }
  }

  function addNumberToDisplay(number) {
    setTheQuestion(theQuestion + number)
  }

  function calculate() {
    let divide = theQuestion.split("/")
    let multiply = theQuestion.split("*")
    let subtract = theQuestion.split("-")
    let add = theQuestion.split("+")
    if (divide.length > 1) {
      console.log("There is division in the question")
      setTheQuestion(parseInt(divide[0]) / parseInt(divide[1]))
    } else if (multiply.length > 1) {
      console.log("There is multiplication in the question")
      setTheQuestion(parseInt(multiply[0]) * parseInt(multiply[1]))
    } else if (subtract.length > 1) {
      console.log("There is subtraction in the question")
      setTheQuestion(parseInt(subtract[0]) - parseInt(subtract[1]))
    } else if (add.length > 1) {
      console.log("There is addition in the question")
      setTheQuestion(parseInt(add[0]) + parseInt(add[1]))
    }
  }

  return (
    <Stack mt={30} margin={12} width={"30%"} minWidth={330}>
      <Stack direction={"row"} spacing={8} justifyContent="center">
        <Stack direction={"row"} spacing={8} justifyContent="center">
          <StyledComponent label={"Screen"} placeholder={"Screen"} value={theQuestion} disabled id={"screen"}/>
        </Stack>
      </Stack>
      <Stack direction={"row"} mt={5} spacing={8} justifyContent="center">
        <img src={"static/images/one.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(1)}/>
        <img src={"static/images/two.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(2)}/>
        <img src={"static/images/three.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(3)}/>
        <AddIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion + "+")} alt={"Add"}/>
      </Stack>
      <Stack direction={"row"} mt={5} spacing={8} justifyContent="center">
        <img src={"static/images/four.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(4)}/>
        <img src={"static/images/five.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(5)}/>
        <img src={"static/images/six.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(6)}/>
        <RemoveIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion + "-")} alt={"Subtract"}/>
      </Stack>
      <Stack direction={"row"} mt={5} spacing={8} justifyContent="center">
        <img src={"static/images/seven.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(7)}/>
        <img src={"static/images/eight.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(8)}/>
        <img src={"static/images/nine.svg"} height={24} width={24} alt={""} onClick={() => addNumberToDisplay(9)}/>
        <CloseIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion + "*")} alt={"Multiply"}/>
      </Stack>
      <Stack direction={"row"} mt={5} justifyContent={"space-evenly"} ml={-5}>
        <ClearIcon height={24} width={24} onClick={() => setTheQuestion("")} alt={"Clear"} border={"1px solid black"}/>
        <img src={"static/images/zero.svg"} height={24} width={24} alt={""}
             onClick={() => addNumberToDisplay(0)}/>
        <ArrowBackIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion.slice(0, -1))} alt={"Back"}/>
        <img src={"static/images/division-svgrepo-com.svg"} height={24} width={24}  onClick={() => setTheQuestion(theQuestion + "/")} alt={"Divide"} style={{marginRight:-38}}/>
      </Stack>
      <Stack direction={"row"} mt={5} justifyContent="center" justifyItems="center" fontSize="48" fontWeight="400"
             mr={11}>
        <Button onClick={calculate} style={{fontSize: 28}}>=</Button>
      </Stack>
    </Stack>
  )
}

export default Calc