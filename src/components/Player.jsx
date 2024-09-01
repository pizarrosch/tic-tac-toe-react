export default function Player({children, symbol}) {
  return (
    <li>
      <span className='player'>
        <span className='player-name'>{children}</span>
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  )
}