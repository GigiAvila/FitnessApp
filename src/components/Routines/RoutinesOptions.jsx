import React, { useState, useContext } from 'react'
import {
  RoutinesWrapper,
  RoutinesTitles,
  RoutinesOptionsWrapper
} from './RoutinesOptions.Styles'
import { RoutinesContext } from '../../context/RoutinesContext'

import DifficultyLevel from './DifficultyLevel/DifficultyLevel'
import DefaultRoutines from '../Routines/DefaultRoutine/DefaultRoutines'
import CustomRoutine from '../Routines/CustomRoutine/CustomRoutine'
import Modal from '../Modal/Modal'
import RoutineCard from './RoutineCard/RoutineCard'
import RoutinesForm from '../RoutinesForm/RoutinesForm'

const RoutinesOptions = () => {
  const { routines, addRoutine } = useContext(RoutinesContext)
  const [openPlayer, setOpenPlayer] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [routineData, setRoutineData] = useState({ ...routines })
  const [routineDataWithType, setRoutineDataWithType] = useState(null)

  const handleLevelSetup = (selectedLevel) => {
    setRoutineData((prevData) => ({
      ...prevData,
      level: selectedLevel
    }))
  }

  const handleTypeRoutine = (type) => {
    setIsOpen(true)
    const newRoutineDatawithType = { ...routineData, type }
    setRoutineDataWithType(
      type === 'Custom' ? 'Custom' : newRoutineDatawithType
    )
  }

  const handleCustomAddRoutine = (newRoutineData) => {
    addRoutine(newRoutineData)
    setOpenPlayer(true)
  }

  const handleDefaultAddRoutine = (newRoutineData) => {
    setOpenPlayer(true)
  }

  return (
    <RoutinesWrapper>
      <RoutinesTitles>
        <h3>Workout Categories</h3>
      </RoutinesTitles>
      <DifficultyLevel onLevelSetup={handleLevelSetup} />
      <RoutinesOptionsWrapper>
        <DefaultRoutines
          routineData={routineData}
          handleTypeRoutine={handleTypeRoutine}
        />
        <CustomRoutine handleTypeRoutine={handleTypeRoutine} />
      </RoutinesOptionsWrapper>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        {routineDataWithType !== 'Custom' ? (
          <RoutineCard
            onCancel={() => setIsOpen(false)}
            onSave={handleDefaultAddRoutine}
            routineDataWithType={routineDataWithType}
            openPlayer={openPlayer}
            setOpenPlayer={setOpenPlayer}
          />
        ) : (
          <RoutinesForm
            onCancel={() => setIsOpen(false)}
            onSave={handleCustomAddRoutine}
            routineDataWithType={routineDataWithType}
          />
        )}
      </Modal>
    </RoutinesWrapper>
  )
}

export default RoutinesOptions
