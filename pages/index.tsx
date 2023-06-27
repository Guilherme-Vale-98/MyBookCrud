import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Books from '../components/Books'

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Books></Books>
    </div>
  )
}
