import React from 'react'

function Footer(props) {
    return (
        <>
            <div className="container w-[80%] m-auto mt-5">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                   
                    <div className="card-body mt-28 ml-14">
                        <h2 className="card-title " >{props.title}</h2>
                        <p>{props.desc}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                            alt="Album" />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default Footer
