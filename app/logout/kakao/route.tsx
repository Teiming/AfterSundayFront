export async function POST() {
  const ACCESS_TOKEN = 'abcdef' // TODO: get access token from cookie or session
  await fetch('https://kapi.kakao.com/v1/user/logout', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })
  return Response.redirect(new URL('/'))
}
