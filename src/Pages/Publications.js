import React from 'react'
import './Publications.css'
import Work from '../Components/Work'

function Projects() {
  return (
    <div className='publications'>
        <div className="publications__top">
          <h1>My Publications</h1>
        </div>
        <div className="publications__content">
          <Work title='
Bidirectional soft switching push–pull resonant converter over wide range of battery voltages'
          description='This article presents a bidirectional soft-switching push-pull resonant converter that is highly efficient over a wide range of battery voltages. It is derived by integrating a current-fed push-pull circuit and an active voltage doubler circuit with a bidirectional switch. The converter operates as a pulsewidth modulation (PWM) current-fed push-pull resonant-boost converter in the forward direction, but as a PWM half-bridge resonant converter in the backward direction. '
          year={2020}
          link='Learn more'
          />

<Work title='
Bidirectional soft switching push–pull resonant converter over wide range of battery voltages'
          description='This article presents a bidirectional soft-switching push-pull resonant converter that is highly efficient over a wide range of battery voltages. It is derived by integrating a current-fed push-pull circuit and an active voltage doubler circuit with a bidirectional switch. The converter operates as a pulsewidth modulation (PWM) current-fed push-pull resonant-boost converter in the forward direction, but as a PWM half-bridge resonant converter in the backward direction. '
          year={2020}
          link='Learn more'
          />
             <Work title='
Bidirectional soft switching push–pull resonant converter over wide range of battery voltages'
          description='This article presents a bidirectional soft-switching push-pull resonant converter that is highly efficient over a wide range of battery voltages. It is derived by integrating a current-fed push-pull circuit and an active voltage doubler circuit with a bidirectional switch. The converter operates as a pulsewidth modulation (PWM) current-fed push-pull resonant-boost converter in the forward direction, but as a PWM half-bridge resonant converter in the backward direction. '
          year={2020}
          link='Learn more'
          />
        </div>
    </div>
  )
}

export default Projects