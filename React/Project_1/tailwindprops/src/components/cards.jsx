import React from 'react'

function Cards({username = "The Employee", role}) {
  return (
    <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <img className= "" src="https://images.pexels.com/photos/25568827/pexels-photo-25568827/free-photo-of-smiling-couple-with-vintage-album.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg">
          “Tailwind CSS is the only framework that I've seen scale
          on large teams. ”
        </p>
      </blockquote>
      <figcaption>
        <div>
          {username}
        </div>
        <div>
          {role}, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  )
}

export default Cards
