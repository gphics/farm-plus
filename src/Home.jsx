import Nav from "./Nav"



function Home() {
  return (
      <div className='home-page'>
          <Nav />
          <main>
              <section className="home-intro">
                  <p> A soil information website that enlighten farmers about the common types of soils and the type of plant that they can be used to cultivate to ensure maximum utilization and productivity of the farm land. </p>
              </section>
              <section className="home-hero">
                  <img src="https://hips.hearstapps.com/hmg-prod/images/981/articles/2015/09/soil-in-hands-francesca-yorke-1524578402.jpg?resize=980:*" alt="soil image" />
              </section>
          </main>
    </div>
  )
}

export default Home

