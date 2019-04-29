import React from 'react'
import { shallow } from 'enzyme'
import Room from '../components/room'
import { findByTestAttr } from '../utils/testUtils'

describe('<Room/>', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Room/>)
  })

  it('should render a checkbox', () => {
    const checkbox = findByTestAttr(wrapper, 'checkbox-room')
    expect(checkbox).toHaveLength(1)
  })
  it('should not render a checkbox if roomnumber is 1', () => {
    wrapper.setProps({ roomNumber: 1 })
    const checkbox = wrapper.find({ type: 'checkbox' })
    expect(checkbox.exists()).toEqual(false)
  })
  it('should render one adults select box', () => {
    const selectbox = findByTestAttr(wrapper, 'select-room-adults')
    expect(selectbox).toHaveLength(1)
  })
  it('should render one children select box', () => {
    const selectbox = findByTestAttr(wrapper, 'select-room-children')
    expect(selectbox).toHaveLength(1)
  })
})


