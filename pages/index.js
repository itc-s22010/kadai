import Link from 'next/link'

export default function Home() {
  return (
    <nav>
    <header>課題ページ</header>
      <ul>
        <li>
          <Link href="/page1">
            page1
          </Link>
        </li>
        <li>
          <Link href="/page2">
            page2
          </Link>
        </li>
        <li>
          <Link href="/page3">
            page3
          </Link>
        </li>
        <li>
          <Link href="/page4">
            page4
          </Link>
        </li>
        <li>
          <Link href="/page5">
            page5
          </Link>
        </li>
      </ul>
    </nav>
  )
}
