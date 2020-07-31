
interface useIsActivePathProps {
  pathName: string
  activeClass?: string
}

const useIsActivePath = ({ pathName, activeClass = 'active' }: useIsActivePathProps) => {

  function pathStartWith(parameter: string): boolean {
    const startWith = new RegExp(`${parameter}`)

    if (startWith.test(pathName))
      return true
    return false
  }

  function isActive({ expectedPathName = '', exact = false }): string {
    if (exact) return expectedPathName === pathName ? activeClass : ''
    if (pathStartWith(expectedPathName)) return activeClass
    return ''
  }

  return [ isActive ]
}


export default useIsActivePath
