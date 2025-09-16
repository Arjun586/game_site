import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <Link href={"/games"}>
        Go to Games
      </Link>
    </div>
  )
}

export default Homepage