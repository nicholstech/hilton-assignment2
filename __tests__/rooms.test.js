import React from 'react'
import { shallow } from 'enzyme'
import Rooms from '../components/rooms'
import Room from '../components/room'
import data from '../data/data'
import { findByTestAttr } from '../utils/testUtils'

describe('<Rooms/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Room/>)
  })

  it('should not render a <Room/> element when rooms.length === 0', () => {
    const roomComponent = findByTestAttr(wrapper, 'component-room')
    expect(roomComponent).toHaveLength(0)
  })
  it('should render four <Room/> elements', () => {
    const roomComponent = shallow(<Rooms rooms={data.rooms}/>)
    expect(roomComponent).toMatchSnapshot()
  })
})


