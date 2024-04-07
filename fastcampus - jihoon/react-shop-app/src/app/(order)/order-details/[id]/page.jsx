import React from 'react'

const OrderDetails = ({params, searchParams}) => {
    const { hello } = searchParams;
    const { id } =  params; 
    //const id = params.id

  return (
    <div>
        {id}
    <br/>
        {hello}
    </div>
  )
}

export default OrderDetails

//? 경로에서 ID값을 받아오기 위해서 [id] 디렉토리 생성
//? ID값을 params로 받아와서 return 시켰음. 