type Props = {
  state: boolean
  onChange: (value: boolean) => void
  error?: boolean
  helperText?: string
}

const FormToggleButton = (props: Props) => {
  const { state, onChange, error, helperText } = props
  const onClickTrue = () => {
    onChange(true)
  }
  const onClickFalse = () => {
    onChange(false)
  }

  console.log(error, state)
  return (
    <>
      <div className="w-full grow items-center justify-between">
        <div className="inline-flex w-full max-w-xl flex-row justify-end gap-4">
          <button
            type="button"
            className={
              'inline-flex h-16 w-64 items-center justify-center rounded-lg border ' +
              (!state && state !== undefined
                ? 'bg-[#2D34CC] border-[#2D34CC] text-white'
                : 'bg-white text-[#777777] border-[#777777]')
            }
            onClick={onClickFalse}
          >
            {/* <AiOutlineCheck className={state ? 'inline-block' : 'hidden'} /> */}
            欠席
          </button>
          <button
            type="button"
            className={
              'inline-flex h-16 w-64 items-center justify-center rounded-lg border ' +
              (state
                ? 'bg-[#2D34CC] border-[#2D34CC] text-white'
                : 'bg-white text-[#777777] border-[#777777]')
            }
            onClick={onClickTrue}
          >
            {/* <AiOutlineCheck className={!state ? 'inline-block' : 'hidden'} /> */}
            出席
          </button>
        </div>
        {error && (
          <div className="text-red-500 text-sm text-center">{helperText}</div>
        )}
      </div>
    </>
  )
}

export default FormToggleButton
