interface Props {
  number: number
  checkActive: (num: number) => string | undefined
  setCurSlide: (num: number) => void
}

function Dot({ number, checkActive, setCurSlide }: Props) {
  return (
    <button
      className={`dot ${checkActive(number)}`}
      onClick={() => setCurSlide(number)}
    ></button>
  )
}

export default Dot
