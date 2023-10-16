import {Button, Stack} from "@mui/material";
import StyledComponent from "../Common";
import {useState} from "react";
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import theme from "../theme";

const Calc = () => {
  const [theQuestion, setTheQuestion] = useState("")

  function addNumber(number) {
    setTheQuestion(theQuestion + number)
  }
  function calculate() {
    let devide = theQuestion.split("/")
    let multiply = theQuestion.split("*")
    let subtract = theQuestion.split("-")
    let add = theQuestion.split("+")
    if (devide.length > 1) {
      setTheQuestion(parseInt(devide[0]) / parseInt(devide[1]))
    } else if (multiply.length > 1) {
      setTheQuestion(parseInt(multiply[0]) * parseInt(multiply[1]))
    } else if (subtract.length > 1) {
      setTheQuestion(parseInt(subtract[0]) - parseInt(subtract[1]))
    } else if (add.length > 1) {
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
        <img src={"static/images/one.svg"} height={24} width={24} alt={""} onClick={() => addNumber(1)}/>
        <img src={"static/images/two.svg"} height={24} width={24} alt={""} onClick={() => addNumber(2)}/>
        <img src={"static/images/three.svg"} height={24} width={24} alt={""} onClick={() => addNumber(3)}/>
        <AddIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion + "+")} alt={"Add"}/>
      </Stack>
      <Stack direction={"row"} mt={5} spacing={8} justifyContent="center">
        <img src={"static/images/four.svg"} height={24} width={24} alt={""} onClick={() => addNumber(4)}/>
        <img src={"static/images/five.svg"} height={24} width={24} alt={""} onClick={() => addNumber(5)}/>
        <img src={"static/images/six.svg"} height={24} width={24} alt={""} onClick={() => addNumber(6)}/>
        <RemoveIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion + "-")} alt={"Subtract"}/>
      </Stack>
      <Stack direction={"row"} mt={5} spacing={8} justifyContent="center">
        <img src={"static/images/seven.svg"} height={24} width={24} alt={""} onClick={() => addNumber(7)}/>
        <img src={"static/images/eight.svg"} height={24} width={24} alt={""} onClick={() => addNumber(8)}/>
        <img src={"static/images/nine.svg"} height={24} width={24} alt={""} onClick={() => addNumber(9)}/>
        <CloseIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion + "*")} alt={"Multiply"}/>
      </Stack>
      <Stack direction={"row"} spacing={7} mt={5} justifyContent="center" justifyItems="center">
        <ClearIcon height={24} width={24} onClick={() => setTheQuestion("")} alt={"Clear"}/>
        <img src={"static/images/zero.svg"} height={24} width={24} style={{marginRight:8}} alt={""} onClick={() => addNumber(0)}/>
        <ArrowBackIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion.slice(0, -1))} alt={"Back"}/>
        <ClearIcon height={24} width={24} onClick={() => setTheQuestion(theQuestion + "/")} alt={"Divide"} style={{marginRight:2}}/>
      </Stack>
      <Stack direction={"row"} mt={5} justifyContent="center" justifyItems="center" fontSize="48" fontWeight="400" mr={11}>
        <Button onClick={calculate}>=</Button>
      </Stack>


    </Stack>
  )
}

export default Calc