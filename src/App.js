import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const sounds = [
      {
        keyCode: 81,
        key: 'Q',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        inst: 'Drum'
      },
      {
        keyCode: 87,
        key: 'W',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        inst: 'Hi-Hat'
      },
      {
        keyCode: 69,
        key: 'E',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        inst: 'Snare'
      }, 
      {
        keyCode: 65,
        key: 'A',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        inst: 'Open-Hat'
      },
      {
        keyCode: 83,
        key: 'S',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        inst: 'Heater 4'
      },
      {
        keyCode: 68,
        key: 'D',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        inst: 'Heater 3'
      },
      {
        keyCode: 90,
        key: 'Z',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        inst: 'Heater 2'
      },
      {
        keyCode: 88,
        key: 'X',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        inst: 'Kick n Hat'
      },
      {
        keyCode: 67,
        key: 'C',
        src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        inst: 'Heater 1'
      }
    ]

    useEffect(()=>{
      document.addEventListener('keydown', (event) =>{
        play(event.key.toUpperCase())
      })
   },[]) ;

   const [clicked, setClicked] = useState('');
   
   const play = (x,y) => {
      const audio = document.getElementById(x);
      audio.play()
      setClicked(y)
   }



    
    return (
      <>
      <div id='drum-machine'>
          <div  dangerouslySetInnerHTML={{__html: `<p>${clicked}`}} id='display'/>
          <div className='pads'>
          {sounds.map((pad,i) =>{
            
              return  <div className="drum-pad" type='button' onClick={() => play(pad.key, pad.inst)} key={i} id={i} >
              <audio className='clip' id={pad.key} src={pad.src} type="audio/wav"/>
              {pad.key}
              </div>
              
          })}
        </div>
      </div>  
      </>
    );
}

export default App;
