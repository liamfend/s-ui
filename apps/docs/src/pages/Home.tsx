import React from 'react'
import styled from 'styled-components'
// font-size: 1.125rem;
// line-height: 1.75rem;
const DescribeStr = styled.p`
  margin-top: 12px;
  color: #687076;
  font-size: 18px;
  line-height: 28px;
  width: 528px;
`

const HomeLayout = styled.div`
  padding: 5rem;
  width: 1120px;
  margin: 0 auto;
`
const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
`

const Title2 = styled(Title)`
  color: #3fcf8e;
`

const Home: React.FC = () => {
  return (
    <HomeLayout>
      <Title>Build in a weekend.</Title>
      <Title2>Scale to millions.</Title2>

      <DescribeStr>
        Supabase is an open source Firebase alternative. Start your project with a
        Postgres database, Authentication, instant APIs, Edge Functions, Realtime
        subscriptions, and Storage.
      </DescribeStr>
    </HomeLayout>
  )
}

export default Home
