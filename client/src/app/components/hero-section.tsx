'use client'

import useRandomPost from "../hooks/use-random-post"

const HeroSection = () => {
  const {data} = useRandomPost()
  console.log(data)
  return (
    <div>HeroSection</div>
  )
}

export default HeroSection