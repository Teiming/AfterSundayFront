// https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#kakaoaccount
export interface KakaoUserData {
  id: number
  connected_at: string
  kakao_account: {
    name: string
    birthyear: string
    gender: 'male' | 'female'
  }
}
