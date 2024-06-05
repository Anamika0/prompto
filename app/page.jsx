import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center black_gradient">Discover & Share
        <br className="max-md:hidden" />
        <span className="pink_gradient text-center"> AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">Prompto is an open-source AI prompting tool allowing you to create, discover and share creative prompts</p>
    <Feed></Feed>
    </section>
  )
}

export default Home