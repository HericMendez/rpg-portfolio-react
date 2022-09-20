import ProgressBar from 'components/ProgressBar'
import React from 'react'
import './styles.css'

const Home = () => {
  return (
    <div className='container'>
      <div className='panel-div'>
        <div className='panel-window rpgui-container framed'>
          <>
            <ProgressBar
              label="Health: "
              color="red"
              fill="80%"
            />
            <ProgressBar
              label="Mana:"
              color="blue"
              fill="50%"
            />
            <ProgressBar
              label="Exp:"
              color=""
              fill="20%"
            />
          </>
        </div>

      </div>
      <div className='avatar-div'>
        <h1>Right side</h1>
      </div>
    </div>
  )
}

export default Home

