import react from 'react'

import "./Card.css"

const Card = (Props) => {
  return (
    <>
      <div className="card">
        <div className="card-upper">
          <span>{Props.pos}</span>
          <hr />
        </div>
        <div className="card-lower">

          {Props.define.length > 0 ? <>

            <p className="meaning">Meaning</p>
            <ul>
              {
                Props.define.map((val,i) => {
                  return <li key={i}>{val.definition}</li>
                })
              }
            </ul>
          </> : null}
          {
            Props.synonyms ? <>
              <p className="synonym">Synonyms<span>{Props.synonyms}</span></p>
            </> : null
          }
        </div>
      </div>
    </>
  )
}

export default Card;