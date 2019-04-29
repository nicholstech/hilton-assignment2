import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAttr } from '../utils/testUtils'
import Index from '../pages/index.js'

describe('<Index/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Index/>)
  })
  it('should render one <Rooms/> element', () => {
    const roomsComponent = findByTestAttr(wrapper, 'component-rooms')
    expect(roomsComponent).toHaveLength(1)
  })
  it('should render one Submit Button', () => {
    const button = findByTestAttr(wrapper, 'submit-button')
    expect(button).toHaveLength(1)
  })
})

