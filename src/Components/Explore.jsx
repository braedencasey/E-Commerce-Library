import React from 'react'

const Explore = () => {
  return (
    <section id="id">
        <div className="row row__column">
            <h2>
                Explore more <span classname = "purple">Books</span>
            </h2>
            <Link to="/books">
                <button className="btn">Explore books</button>
            </Link>
        </div>
    </section>
  )
}
export default Explore;