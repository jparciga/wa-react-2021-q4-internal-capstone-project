import React from 'react'
import {render, screen} from '@testing-library/react'
import Home from 'components/Home/Home.styles'

describe('home page test suite', () => {
  test('should display slider', () => {
    render(<Home />)
  })

  test('should display carousel', () => {
    render(<Home />)
  })

  test('should display grid', () => {
    render(<Home />)
  })

  //Matchers
  test('toBe', () => {
    expect(true).toBe(true)
  })

  test('toEqual', () => {
    const data = {one: 1}
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
  })

  test('not', () => {
    expect(true).not.toBe(false)
  })

  test('string', () => {
    expect('team').not.toMatch(/I/)
  })
})
