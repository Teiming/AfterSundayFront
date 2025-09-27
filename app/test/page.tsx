import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function Page() {
  const users = await prisma.users.findMany()
  const events = await prisma.events.findMany()

  return (
    <main style={{ maxWidth: '45rem', margin: 'auto' }}>
      <table>
        <thead>
          <tr style={{ backgroundColor: 'deepskyblue', padding: '0.5rem' }}>
            <th style={{ padding: '0.5rem' }}>이름</th>
            <th>이메일</th>
            <th>가입일</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ username, email, created_at }, i) => {
            const month = Number(created_at?.getMonth()) + 1
            const day = Number(created_at?.getDate())
            return (
              <tr key={i}>
                <td style={{ padding: '0.5rem' }}>{username}</td>
                <td style={{ padding: '0.5rem' }}>{email}</td>
                <td style={{ padding: '0.5rem' }}>{`${month}월 ${day}일`}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <section style={{ overflow: 'scroll' }}>
        {events.map((v, i) => {
          return (
            <h4 key={i} style={{ display: 'flex' }} role='row'>
              {Object.entries(v).map((v, i) => {
                return (
                  <span
                    key={i}
                    style={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <span>{v[0]}</span>
                    <span>{`${v[1]}`}</span>
                  </span>
                )
              })}
            </h4>
          )
        })}
      </section>
    </main>
  )
}
