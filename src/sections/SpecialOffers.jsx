import {offer} from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'


const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap items-center max-lg:flex-col-reverse gap10 
    max-container">
      <div>
        <img src={offer} width={773} height={687}  className='object-contain w-full' />
      </div>
      <div className="flex flex-1 flex-col px-16 py-10">

<h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg ">
  <span className="text-coral-red "> Super </span> Offers
</h2>
<p
  className="mt-4 lg:max-w-lg info-text "
>
  Ensuring premium comfort and style,our meticulously crafted footwear is designed to evaluate your experience ,providing you with unwatched quality ,innovation and a touch of elegance .
</p>

<p className="mt-6 lg:max-w-lg info-text ">Navigate a realme of possibilties designed to fullfill your unique with unbeatables deals. From premier selection to incredible savings. we offer unparalleled value that sets us apart</p>

<div className="mt-11 flex flex-wrap gap-4">

<Button label="Shop Now" iconURL={arrowRight}/>

<Button label="Learn more" backgroundColor = "bg-white" borderColor= "border-slate-gray" textColor = "text-slate-gray"/>
</div>

</div>
    </section>
  )
}

export default SpecialOffers