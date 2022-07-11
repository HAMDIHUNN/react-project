import './Hobbies.css';
const Hobbies = () => {
    return (
    <div className="App">
        <section id="hobbies">
            <div className="container hobbies">
                <div className="title-hobbies aos-init aos-animate" data-aos="fade-up">
                        <h2>HOBBIES</h2>
                        <p className="u-text-small">THINGS I DO IN MY FREE TIME!</p>
                    </div>
            <div className="hobbies-content">
                    <div className="hobbies-left aos-init aos-animate" data-aos="fade-right"><img src="./hunez.bef3808802189442bf19.jpeg" alt="" /></div>
                <div className="hobbies-right aos-init aos-animate" data-aos="fade-left">
                            <h2>What better way to spend my free time than programming?</h2>
                            <p className="u-text-small">Who does not love programming? just only who can start it. When I code I feel happy. I feel as though I have no worries and all I need to think about is finding how to make things work the right way. I always code in my free time. You guys are worrying to spend your free time ...ahh, start coding right and you will shift your profession suddenly</p>
                </div>
            </div>
                    <div className="hobbies-content">
                    <div className="hobbies-right aos-init aos-animate" data-aos="fade-right">
                            <h2>Watching sports is good for relaxing the mind and to get ready for doing another tasks!</h2>
                            <p className="u-text-small">GOOOOOOOOAL!!!! Watching sports is very relaxing to me. It's Plain and Simple Fun, Makes You Smarter, and Improve's Relationships. They type you play with your feet, not the one where you are crushed by 400 pound monsters. I enjoy sitting and watching a game and cheering on my favourite team!</p>
                    </div>
                    <div className="hobbies-left aos-init aos-animate" data-aos="fade-left"><img src="./ball.1060e4d8a91efdbc291d.jpeg" alt="" /></div>
                </div>
            </div>
        </section>
    </div>
    );  
}
export default Hobbies;