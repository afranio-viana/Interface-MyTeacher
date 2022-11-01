import {Box} from '@mui/material'
import type { NextPage } from "next"
import Cabecalho from "../src/components/Cabecalho/Header"
import List from "../src/components/List/List"
import {Teacher} from "../src/@types/teacher"


function Home() {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "Professor 1",
      photo: "https://github.com/afranio-viana.png",
      description: "Descrição do professor 1",
      value_time: 100
    },

    {
      id: 2,
      name: "Professor 2",
      photo: "https://github.com/afranio-viana.png",
      description: "Descrição do professor 2",
      value_time: 100.50
    },

    {
      id: 3,
      name: "Professor 3",
      photo: "https://github.com/afranio-viana.png",
      description: "Descrição do professor 3",
      value_time: 300
    },

    {
      id: 4,
      name: "Professor 4",
      photo: "https://github.com/afranio-viana.png",
      description: "Descrição do professor 4",
      value_time: 400
    },
  ]

  return (
    <>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <List teachers={teachers}></List>
      </Box>
    </>

  )
}

export default Home;