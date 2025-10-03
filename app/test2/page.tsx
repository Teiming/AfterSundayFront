import styles from './index.module.css'

export default function Page() {
  return (
    <form action='test2/api' method='post' className={styles.addEvent}>
      <h2>나만의 모임을 개최해요</h2>

      <label htmlFor='title'>모임 이름</label>
      <input type='text' name='title' id='title' />

      <label htmlFor='datetime'>모임 날짜 및 시각</label>
      <input type='datetime-local' name='datetime' id='datetime' />

      <label htmlFor='spot'>모임 장소</label>
      <input
        type='text'
        name='spot'
        id='spot'
        placeholder='e.g. 구월동, 예술회관역'
      />

      <label htmlFor='content'>상세 내용</label>
      <textarea name='content' id='content'></textarea>

      <label htmlFor='image'>관련 이미지</label>
      <input type='file' name='image' id='image' />

      <label htmlFor='chat'>오픈채팅 URL</label>
      <input
        type='url'
        name='chat'
        id='chat'
        placeholder='https://open.kakao.com/xxxxxxxx'
      />

      <label htmlFor='confirm'>
        "애프터선데이는, 모임 중 일어나는 일에 대하여 관련이 없음을
        이해하셨습니까?"
      </label>
      <input type='checkbox' name='confirm' id='confirm' />

      <input type='submit' value='이벤트 생성' />
    </form>
  )
}
