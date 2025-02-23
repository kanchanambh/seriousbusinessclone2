import Image from 'next/image'
import React from 'react'

function WorkSection() {
  return (
    <section className="works pt-32 w-[80%]">
        <h2 className="works__title mixed-title once-inview" >
		<span className="mixed-title__main">Where to inject Mounjaro&#8482;</span>
		<span className="mixed-title__sub">Injected same day once per week</span>
	</h2>

    <section className="works__list">

              
                <div className="works__list__item">
                <figure className="works__list__item__figure">
                    <Image
                    src="/workimage01.jpg"
                    width={1024}
                    height={576}
                    className="works__list__item__image wp-post-image"
                    alt="Next Button"
                 
                    />
                </figure>
                    
                <article className="works__list__item__article once-inview" data-anim="lines" data-anim-delay=".25" >
                        <h3 className="works__list__item__title underline-def">
                            <span>Choose an area: abdomen or upper legs.</span>
                            </h3>

                        

                    </article></div>
                  





                   
                <div className="works__list__item">
                <figure className="works__list__item__figure">
                    <Image
                    src="/workimage02.jpg"
                    width={1024}
                    height={576}
                    className="works__list__item__image wp-post-image"
                    alt="Next Button"
                 
                    />
                </figure>
                    
                <article className="works__list__item__article once-inview" data-anim="lines" data-anim-delay=".25" >
                        <h3 className="works__list__item__title underline-def">
                            <span>Select an injection site to start injecting. Switch ijection sites weekly.</span>
                            </h3>

            
                    </article></div>
                 




                 
                <div className="works__list__item">
                <figure className="works__list__item__figure">
                    <Image
                    src="/workimage03.jpg"
                    width={1024}
                    height={576}
                    className="works__list__item__image wp-post-image"
                    alt="Next Button"
                 
                    />
                </figure>
                    
                <article className="works__list__item__article once-inview" data-anim="lines" data-anim-delay=".25" >
                        <h3 className="works__list__item__title underline-def">
                            <span>Divide chosen area into four sections witch will be your injection sites.</span>
                            </h3>

                        
                       
                    </article></div>
                 





                   
                <div className="works__list__item">
                <figure className="works__list__item__figure">
                    <Image
                    src="/workimage04.jpg"
                    width={1024}
                    height={576}
                    className="works__list__item__image wp-post-image"
                    alt="Next Button"
                 
                    />
                </figure>
                    
                <article className="works__list__item__article once-inview" data-anim="lines" data-anim-delay=".25" >
                        <h3 className="works__list__item__title underline-def">
                            <span>Inject at least one finger width away from the last injection.
                                </span></h3>

                 
                    </article></div>
                


                        


            </section>

          

    </section>
  )
}

export default WorkSection