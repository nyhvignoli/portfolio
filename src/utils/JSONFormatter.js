export const JSONFormatter = {
  toJSX: (input = '') => {
    return input.split('\n').map((item, i, array) => {
      const isLast = i === array.length - 1
      return isLast ? (
        <>{item}</>
      ) : (
        <>
          {item}
          <br />
          <br />
        </>
      )
    })
  }
}
