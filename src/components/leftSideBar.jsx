function LeftSideBar() {
    return (
        <>
            <aside className="leftSideBar">
                <div className="container">
                    <div className="icon"><img src="../public/birdIcon.png" alt="" className="bird" /></div>
                    <div className="leftSideBar__controls">
                        <div className="controls__buttons">
                            <div className="controls__item">
                                <div className="item__img-1"></div>
                                <div className="item__text">Home</div>
                            </div>
                            <div className="controls__item">
                                <div className="item__img-2"></div>
                                <div className="item__text">Explore</div>
                            </div>
                            <div className="controls__item">
                                <div className="item__img-3"></div>
                                <div className="item__text">Notifications</div>
                            </div>
                            <div className="controls__item">
                                <div className="item__img-4"></div>
                                <div className="item__text">Messages</div>
                            </div>
                            <div className="controls__item">
                                <div className="item__img-5"></div>
                                <div className="item__text">Bookmarks</div>
                            </div>
                            <div className="controls__item">
                                <div className="item__img-6"></div>
                                <div className="item__text">Lists</div>
                            </div>
                            <div className="controls__item">
                                <div className="item__img-7"></div>
                                <div className="item__text">Profile</div>
                            </div>
                            <div className="controls__item">
                                <div className="item__img-8"></div>
                                <div className="item__text">More</div>
                            </div>
                        </div>
                        <button className="tweetButton">Tweet</button>
                    </div></div>
            </aside>
        </>
    )
}
export default LeftSideBar