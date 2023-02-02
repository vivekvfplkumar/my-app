import React from 'react'

function Herosection() {
  return (
    <section>
        <div className='flex-container-herosection-row'>
            <div className='content-flex-row-one-content'>
                <p className='main-heading'>Check Your </p>
                <p className='second-heading'>CREDIT SCORE</p>
                <p className='third-heading'>absolutely Free</p>

                <div className='div-main-btn-container'>
                    <button className='cta-btn-flex'>Check Now</button>
                    <button className='cta2-btn-flex'>Need Help</button>
                </div>

            </div>
            <div className='image-flex-herosection'>
                <img src='/image/img1.png'/>
            </div>
        </div>
    </section>
  )
}

export default Herosection