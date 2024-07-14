import React from 'react'

const Com4 = () => {
  return (
    <div>
      <h3 className='text-3xl font-semibold capitalize'>about me</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt mollitia culpa ducimus enim odit quasi est soluta, voluptates reprehenderit quae consectetur</p>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-5 mt-5 '>
            <div className='bg-slate-900 p-4 rounded '>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>name :  <span className='font-semibold'>sushanto coch</span></h3>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>experience : <span className='font-semibold'>2+ year</span></h3>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>nationality : <span className='font-semibold'>bangladesh</span></h3>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>freelance : <span className='font-semibold'>available</span></h3>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>skype : <a href='https://join.skype.com/invite/W6nca1HAqFbr' target="blank" className='font-semibold'>sushan sing</a> (copy)</h3>
            </div>
            <div className='bg-slate-900 p-4 rounded '>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>contact :  <span className='font-semibold'>(+888) 01612822562</span></h3>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>whats app : <span className='font-semibold'>(+888) 01782153524</span></h3>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>Email : <span className='font-semibold'>sushansing709sushansing@gmail.com</span></h3>
              <h3 className='mb-3 capitalize text-sm text-slate-200'>language : <span className='font-semibold'>english,spanish,bengali,hindi</span></h3>
            </div>

      </div>
    </div>
  )
}

export default Com4
