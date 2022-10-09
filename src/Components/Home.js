import React from 'react'
import Title from "antd/lib/typography/Title";
import { Typography } from 'antd';
const { Text } = Typography;

const Home = () => {
  return (
    <>
      <Title level={2} style={{color:'blue'}}>Welcome to Rubick.ai</Title>
      <Text className='homePara'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type..</Text>
    </>
  )
}

export default Home
