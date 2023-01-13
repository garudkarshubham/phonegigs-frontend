import Link from "next/link"

function Category({name, link, bgStyles, hoverStyles}) {
  return (
    <Link className={`text-white font-medium catagories ${bgStyles} ${hoverStyles}`} href={link}>{name}</Link>
  )
}
export default Category