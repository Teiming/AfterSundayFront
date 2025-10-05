import Link from 'next/link'

function Headline({ title }: { title: string }) {
  return <h3 style={{ padding: '0.5rem' }}>{title}</h3>
}

export default function Page() {
  return (
    <>
      <Headline title='참가자가 많은 이벤트' />
      <Headline title='최근에 개설된 이벤트' />
      <Link href='/EventGen'>이벤트 개설</Link>
    </>
  )
}
