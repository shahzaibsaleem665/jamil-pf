import React from 'react'
import './Publications.css'
import Work from '../Components/Work'
import BackToTop from '../Components/BackToTop'

function Projects() {
  return (
    <div className='publications'>
        <div className="publications__top">
          <h1>My Publications</h1>
        </div>
        <div className="publications__content">
          <Work title='
          High step-up quasi-resonant converter featuring minimized switching loss over wide input voltage range'
          description='This article proposes a high step-up quasi-resonant converter that minimizes switching loss over a wide range of input voltages. By employing a bidirectional switch and corresponding switching modulation, the proposed converter achieves the main switch with almost zero voltage, and therefore incurs very little switching loss at all active switches. Moreover, no instantaneous reactive current flows through the circuit under wide variations of input voltages and loads.'
          year={2020}
          link='Learn more'
          value='https://ieeexplore.ieee.org/abstract/document/9241438'
          />
             <Work title='Highly efficient current-fed half-bridge resonant converter for pulse power applications'
          description='This article proposes a highly efficient current-fed half-bridge resonant converter over a wide range of the output voltages. By adding a bidirectional switch across center nodes of the voltage doubler and applying corresponding switching modulation, the converter accomplishes almost zero-voltage switching at the turn- off instant under the wide output voltage variations. Moreover, the circuit experiences very little instantaneous reactive current even when the output voltage varies widely.'
          year={2020}
          link='Learn more'
          value='https://ieeexplore.ieee.org/abstract/document/9528980'
          />
          <Work title='
Bidirectional soft switching push–pull resonant converter over wide range of battery voltages'
          description='This article presents a bidirectional soft-switching push-pull resonant converter that is highly efficient over a wide range of battery voltages. It is derived by integrating a current-fed push-pull circuit and an active voltage doubler circuit with a bidirectional switch. The converter operates as a pulsewidth modulation (PWM) current-fed push-pull resonant-boost converter in the forward direction, but as a PWM half-bridge resonant converter in the backward direction. '
          year={2021}
          link='Learn more'
          value='https://ieeexplore.ieee.org/abstract/document/9426451'
          />
           <Work title='Highly efficient quasi-single-stage AC-DC converter employing bidirectional switch'
          description='This article proposes a highly efficient quasi-single-stage ac–dc converter that incorporates a bidirectional switch at the secondary side of the circuit. Its attractiveness is that the proposed ac–dc converter achieves almost ZVS turn-off at high instantaneous power and low-voltage turn-off at low instantaneous power. Moreover, the secondary-side switching reduces the loss at the main switch, and thereby more than offsets the losses that occur at the main switch and the clamp switch in a conventional ac–dc converter. '
          year={2022}
          link='Learn more'
          value='https://ieeexplore.ieee.org/abstract/document/9696325'
          />
          <Work title='A Comparative Study of Three-Phase Inverter Topologies for Common Mode Voltage Reduction in Photovoltaic Applications'
          description='The popularity of photovoltaic (PV) systems has increased as the demand for renewable energy sources has risen in recent years. The inverter is an important component and has a significant impact on the overall performance of a PV system. Therefore, its topology must be chosen carefully based on the application. This paper presents a study and comparison of different inverter topologies for PV applications. '
          year={2023}
          link='Learn more'
          value='https://ieeexplore.ieee.org/abstract/document/10264522'
          />
          <Work title='A Comparative Study of Three-Phase Inverter Topologies for Common Mode Voltage Reduction in Photovoltaic Applications'
          description='The popularity of photovoltaic (PV) systems has increased as the demand for renewable energy sources has risen in recent years. The inverter is an important component and has a significant impact on the overall performance of a PV system. Therefore, its topology must be chosen carefully based on the application. This paper presents a study and comparison of different inverter topologies for PV applications. '
          year={2023}
          link='Learn more'
          value='https://ieeexplore.ieee.org/abstract/document/10264522'
          />

<Work title='An Overview of the Functions of Smart Grids Associated with Virtual Power Plants Including Cybersecurity Measures'
          description='The use of renewable energy is on the rise and is expanding ever so greatly in this modern age of technology. However, it comes with a new set of challenges to properly integrate these renewable energy-based power plants thus forming a virtual power plant safely and reliably into the power grid in which a smart grid plays an effective role. '
          year={2023}
          link='Learn more'
          value='https://link.springer.com/chapter/10.1007/978-3-031-36007-7_7'
          />

<Work title='An Overview of the Functions of Smart Grids Associated with Virtual Power Plants Including Cybersecurity Measures'
          description='The use of renewable energy is on the rise and is expanding ever so greatly in this modern age of technology. However, it comes with a new set of challenges to properly integrate these renewable energy-based power plants thus forming a virtual power plant safely and reliably into the power grid in which a smart grid plays an effective role. '
          year={2023}
          link='Learn more'
          value='https://books.google.com.au/books?hl=en&lr=&id=jBvHEAAAQBAJ&oi=fnd&pg=PA95&dq=info:5Qeu0x1q1WsJ:scholar.google.com&ots=hqW_1PCu6r&sig=wiNkY6DHCQ4FhkGQ7ISXJFVuNrI&redir_esc=y#v=onepage&q&f=false'
          />


          <Work title='An Improved Three-Phase Transformerless Neutral Point Clamped Inverter Topology for Common Mode Voltage Reduction'
          description='Transformerless photovoltaic (PV) inverters are more effective, lighter in weight, and less expensive than transformer-based topologies. However, a leakage current  is produced when transformers are removed due to the direct connection between the PV panel and the grid. This current reduces the life of the insulation, causes safety problems, and increases the harmonic distortion in the grid current. '
          year={2023}
          link='Learn more'
          value='https://ieeexplore.ieee.org/abstract/document/10227487'
          />
          <Work title='Performance Evaluation of a Three-Phase PV Power Plant under Unbalanced Conditions with Islanding Detection Reliability Test'
          description='The use of renewable energy is increasing ever so highly during this modern age of technology. The use of wind, solar and hydro energy is rising rapidly in the world due to the less emissions of harmful gases in the atmosphere. Since the energy produced from these sources like wind and solar energy is increasing a lot, the use of grid connected inverters is also expanding. Deep analysis of these inverters’ operation is important when working in non-ideal situations.'
          year={2023}
          link='Learn more'
          value='https://ieeexplore.ieee.org/abstract/document/10227391'
          />
        </div>
        <BackToTop />
    </div>
  )
}

export default Projects