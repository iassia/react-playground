function Card() {
  const data = {
    teste: 10,
    bla: 'teste',
  }

  const data2 = {
    teste: 10,
    bla: 'teste',
  }

  console.log({ data, data2 })

  return (
    <div className='flip-card'>
      <div className='flip-card-inner'>
        <div className='flip-card-front'></div>
        <div className='flip-card-back'>
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  )
}

export default Card
