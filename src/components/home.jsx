function Home() {
    const obj = {
        dateOfBirth: '7 jule',
        city: 'Ekaterinburg',
        placeOfWork: 'Dinamo',
        email: 'drop1for1me@gmail.com',
    }
    return (
        <div className="home">
            <div className="backPhoto"><img src="https://assets.unenvironment.org/decadeonrestoration/2020-03/nature-3294681_1280%20%281%29.jpg" alt="" className="back__img" /></div>
            <div className="iconAndInfo">
                <img src="../public/vite.svg" alt="" className="icon" />
                <div className="info">
                    <div className="dateOfBirth">Date of birdth: {obj.dateOfBirth}</div>
                    <div className="city">City: {obj.city}</div>
                    <div className="placeOfWork">Place of work: {obj.placeOfWork}</div>
                    <div className="email">Email: {obj.email}</div>
                </div>
            </div>
            <div className="posts"></div>
        </div>
    )
}
export default Home