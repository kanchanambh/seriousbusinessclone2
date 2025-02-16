import Image from 'next/image'
import React from 'react'

function BrandsSection() {
  return (
    <section className="brands">

	<section className="full-brands__section full-brands__clients once-inview"  >
		<h2 className="full-brands__title full-brands__clients__title once-inview">Average weight loss on different Mounjaro doses</h2>

		<div className="full-brands__section__list full-brands__clients__list">

					  <Image
										src="/zbvzcyi0bu4safq6nafp.jpg"
										width={1024}
										height={576}
										className="works__list__item__image wp-post-image"
										alt="Next Button"
									 
										/>	
			
			</div>
	</section>

	<section className="full-brands__section full-brands__awards once-inview" >
		<h2 className="full-brands__title once-inview" data-anim="words" >Mounjaro dosage options
		</h2>

		<div className="full-brands__section__list full-brands__awards__list">

		<Image
										src="/fpgdcvplwujijcif47yg.webp"
										width={1024}
										height={576}
										className="works__list__item__image wp-post-image"
										alt="Next Button"
									 
										/>	
			
		</div>
	</section>

</section>
  )
}

export default BrandsSection