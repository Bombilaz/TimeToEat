import {FC} from "react";
import Link from 'next/link'
import {PageLinkProps} from "./PageLink.types";

const PageLink: FC<PageLinkProps> = ({url, textLink}) =>{
  return(
    <Link href={url} passHref>
      {textLink}
    </Link>
  )
}

export default PageLink