import React from 'react'

function CardImage() {
  return (
    <section>
        <div className='main-card-container-flex-mg'>
          <div className='container-flex-img'>
            <div className="image-card">
              <img className='card-img' src="/image/Rectangle 216.png" alt=" " />
            </div>
            <div className='container-flex-side'>
              <div className='content-card'>
              <p className='header-card-flex' >Lorem ipsum dolor sit, amet consectetur</p>
              <p className='container-para-card-flex'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, architecto vel. Porro facilis deserunt blanditiis dolore iure ullam corporis error dolores, veritatis consequuntur eum rem voluptate reprehenderit at? Nisi, dolorum!</p>
              <p className='container-para-card-flex1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, architecto vel. Porro facilis deserunt blanditiis dolore iure ullam corporis error dolores, veritatis consequuntur eum rem voluptate reprehenderit at? Nisi, dolorum!</p>
              </div>
            </div>
            
          </div> 
        </div>
    </section>
  )
}

export default CardImage