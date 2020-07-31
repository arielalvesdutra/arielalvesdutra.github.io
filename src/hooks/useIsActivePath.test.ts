import useIsActivePath from './useIsActivePath'

describe('Hooks: useIsActivePath', () => {

  test('path equals to the current path should return active string', () => {
    const [isActive] = useIsActivePath({pathName: '/home'})

    expect(isActive({expectedPathName: '/home'})).toBe('active')
  })


  test('path not equals to the current path should return empty string', () => {
    const [isActive] = useIsActivePath({pathName: '/home'})

    expect(isActive({expectedPathName: '/contact'})).toBe('')
  })
})
