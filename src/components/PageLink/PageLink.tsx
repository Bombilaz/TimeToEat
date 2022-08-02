import Link from 'next/link'
import {FC} from "react";

interface PageLinkProps {
  url: string
  textLink: string
}

const PageLink: FC<PageLinkProps> = ({url, textLink}) =>{
  console.log()
  return(
    <Link href={url} passHref>
      {textLink}
    </Link>
  )
}

export default PageLink