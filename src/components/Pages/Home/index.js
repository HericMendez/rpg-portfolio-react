import ProgressBar from 'components/Elements/ProgressBar'
import React from 'react'
import './styles.css'
import Avatar from '../../../assets/images/avatar/avatar_full.png'

const Home = () => {
  return (
    <div className='container'>
      <div className='panel-div'>
        <div className='panel-window rpgui-container'>
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
      <div className='hide-mobile avatar-div'>
        <h1>Right side</h1>
      </div>
    </div>
  )
}

export default Home

