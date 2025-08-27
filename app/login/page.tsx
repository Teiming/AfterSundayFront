import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
  return (
    <main
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        maxWidth: '45rem',
        margin: 'auto',
        padding: '1rem',
      }}
    >
      <div
        style={{
          height: '13rem',
          width: '21rem',
          backgroundColor: '#ffcc8888',
          borderRadius: '1rem',
        }}
      >
        AFTSUNDAY
      </div>
      <h2>어서오세요!</h2>
      <h4>로그인 후 다양한 활동에 참가해보세요.</h4>
      <Link
        style={{ display: 'flex', justifyContent: 'center' }}
        href={'/kakao_login'}
      >
        <Image
          src='/kakao_login_medium_wide.svg'
          alt='카카오 로그인'
          width={300}
          height={45}
          style={{ margin: '1rem', alignSelf: 'center' }}
        />
      </Link>
    </main>
  )
}
