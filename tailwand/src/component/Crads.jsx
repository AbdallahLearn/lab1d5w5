import React from 'react'

function Crads(props) {
  return (
    <>
      <div className="card card-side bg-base-100 shadow-xl rounded-[5px]">
  <figure>
    <img
      src={props.img}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.desc}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Watch</button> */}
    </div>
  </div>
</div>
    </>
  )
}

export default Crads
