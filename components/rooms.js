import React from 'react'
import Room from '../components/room'

const Rooms = (props) => {

  const { rooms, click, change } = props
  return (
    <React.Fragment>
      {
        rooms.length === 0 ? (
          <p>No Rooms Available</p>
        ) : (
          rooms.map(room => <Room key={room.id}
                                  data-test="component-room"
                                  click={click}
                                  onChange={change}
                                  roomNumber={room.id}
                                  children={room.children}
                                  adults={room.adults}
                                  selectedAdults={room.selectedAdults}
                                  selectedChildren={room.selectedChildren}
                                  room={room}
                                  isSelected={room.isSelected}/>)
        )
      }
    </React.Fragment>
  )
}

export default Rooms
