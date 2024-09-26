import React from 'react'

function Card() {
    return (
        <>
            <div className="container-card flex flex-col md:flex-row justify-center mt-28 h-96 max-sm:  max-sm:block max-md:block">
                <div className="carousel w-[50%] max-sm:w-[100%] max-md:w-[100%] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                            src="https://i.pinimg.com/564x/22/c8/4d/22c84d76ff6a35e370e4b9dda6f58c8f.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                            src="https://i.pinimg.com/564x/de/30/e1/de30e194b95f6bc2238fa404c54d451b.jpg"
                            className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                </div>

                <div className="card bg-base-100 w-[30%] shadow-xl max-sm:w-full max-md:w-[100%]">

                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                    <figure className="px-10 pt-10">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                </div>
            </div>

        </>
    )
}

export default Card
