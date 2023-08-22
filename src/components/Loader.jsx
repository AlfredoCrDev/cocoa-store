import { Ripples } from '@uiball/loaders'

function Loader() {
  return (
    <div className='flex justify-center spinner'>
      <div className='self-center'>
        <Ripples size={45} speed={2} color="black"/>
      </div>
    </div>
  )
}

export default Loader