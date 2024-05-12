import Carousel from 'components/Carousel';
import Footer from 'components/Footer';
import Header from 'components/Header'
import PostList from 'components/PostList';
import { Link } from 'react-router-dom'

export default function Home(){
    return (
        <>
      <Header />
      <Carousel />
      <PostList />
      <Footer />
    </>
    );
}