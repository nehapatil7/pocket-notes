import React, {useEffect, useState} from 'react'
import './Home.css'
import create from '../../assets/+.png'
import CreateGroup from '../../components/CreateGroup.jsx'
import noNotes from '../../assets/noNotes.png'
import lock from '../../assets/lock.png'


function Home() {
  const [noteGroups, setNoteGroups] = useState([])
  
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() =>{
    localStorage.setItem('items', JSON.stringify(noteGroups))
  }, [noteGroups])

  return (
    <div className='home'>
        <div className="sidebar">
            <p>Pocket Notes</p>
            <div className="groupNames">

            <button className="add-btn" onClick={toggleModal}>
                <img src={create} alt="create button" />
            </button>
            {isOpen && <CreateGroup  closeModal={toggleModal}/>}
            </div>
            
        </div>

        <div className="notesContainer">
         <div className="title"></div>
            <div className="notes">
            <div className='empty-page'>
              <img src={noNotes} alt="" />
              <h1>Pocket Notes</h1>
              <p>Send and receive messages without keeping your phone online.
              Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
              <div className='rights'>
                  <img src={lock} alt="" />
                  end-to-end encrypted
              </div>
            </div>
       
            </div>
            <div className="textarea">

            </div>
            
        </div>

    </div>
  )
}

export default Home