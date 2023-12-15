import './CreateGroup.css'
import { useState } from 'react'

const groupColors =[
    "#B38BFA",
    "#FF79F2",
    "#43E6FC",
    "#F19576",
    "#0047FF",
    "#6691FF",
]

const CreateGroup = ({closeModal, dataStored}) => {

    const [groupName , setGroupName] = useState ()
    const [groupColor , setGroupColor] = useState ()

    

    const onColorClick = (color) => setGroupColor(color);

    const handleCreate = () => {
        const newGroup = {
            id: Date.now(),
            group: { groupName, groupData: [], groupColor },
            
          };
      
         dataStored(newGroup);
        }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!groupName.trim() || !groupColor) {
            alert("Please enter a group name.");
          return; 
        }
        handleCreate(); 
        
         
      };
      

    return (
      <>
      <div className='container-wrapper' onClick={closeModal}></div>
        <div className="createGroup">
          <h2>Crete New Group</h2>
          <div className="name">
            <form>
            <label htmlFor="GroupName">Group Name</label>
            <input type="text" id="groupname" name="" placeholder='Enter group name' value={groupName} onChange={(e) => setGroupName(e.target.value)}></input>
            </form>
          </div>

          <div className="color">
            <label for="GroupName">Group Color</label>
            <div className="colorsImg">

            {groupColors.map((color) => (
              <div
                key={color}
                className="colors"
                style={{ backgroundColor: color }}
                onClick={() => onColorClick(color)}
                value={groupColor}
                onChange={(e) => setGroupColor(e.target.value)}
              />
            ))}
            </div>
          </div>

          <button className='create-btn' onChange={handleSubmit} onClick={closeModal}>Create</button>
        </div>
      </>
    );
  };

  export default CreateGroup;