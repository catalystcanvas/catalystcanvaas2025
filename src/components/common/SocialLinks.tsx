import Link from "next/link";


// hero social links home three
interface HDataType {
  id: number;
  link: string;
  title: string;
}
const hero_link_home_three: HDataType[] = [
  {
    id: 1,
    link: "https://www.facebook.com",
    title: "Facebook",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/company/catalyst-canvas/posts/?feedView=all ",
    title: "Linkedin",
  },
  {
    id: 3,
    link: "https://www.instagram.com/catalystcanvas.co?igsh=MWw3ZTh4eGZvZm8xdw== ",
    title: "Instagram",
  },
  {
    id: 4,
    link: "/PrivacyTerms",
    title: "Privacy Policy",
  },
  /*
  {
    id: 5,
    link: "https://www.dribbble.com",
    title: "Dribbble",
  }
  */
]
export const SocialLinks = () => {
  return (
    <>
      {hero_link_home_three.map((h_item, h_index) => (
        <Link
          key={h_index}
          href={h_item.link}
          className="cs_center"
          target="_blank">
          {h_item.title}
        </Link>
      ))}
    </>
  )

}


// copy right text 
type copy_right_text_type = {
  copy_right: JSX.Element;
}

const copy_right_text: copy_right_text_type = {
  copy_right: <>
    © {new Date().getFullYear()} — All rights reserved by Catalyst Canvas™
  </>
}


const { copy_right } = copy_right_text
export const CopyRight = () => {
  return (
    <> {copy_right}</>
  )
}


